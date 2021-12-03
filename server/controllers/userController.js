const { User, Basket } = require("../models/models");
const ApiError = require("../error/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userId, email, role) => {
  return jwt.sign(
    { id: userId, user: email, role: role },
    process.env.SECRET_KEY,
    {
      expiresIn: '24h'
    }
  );
};

class UserController {

  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(
        ApiError.badRequest("Отсутствует имя пользователя или пароль")
      );
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashedPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateToken(user.id, user.email, user.role);
    return res.json({token});
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({where: { email }})
    if(!user) {
      return next(ApiError.internal("User email doesn't exist"))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if(!comparePassword) {
      return next(ApiError.internal("Wrong password"))
    }
    const token = generateToken(user.id, user.email, user.role);
    return res.json({token});
  }

  async checkAuth(req, res, next) {
    const token = generateToken(req.user.id, req.user.user, req.user.role);
    return res.json({token})
  }
}

module.exports = new UserController();
