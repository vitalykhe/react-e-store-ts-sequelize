const jwt = require("jsonwebtoken");

module.exports = (role) => {
  return function (req, res, next) {
    if (req.METHOD === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; //"Bearer [token]"
      if (!token) {
        return res.status(401).json({ message: "Пользователь не авторизован" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if(decoded.role !== role){
        return res.status(403).json({ message: "Запрещено" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Пользователь не авторизован" });
    }
  };
};
