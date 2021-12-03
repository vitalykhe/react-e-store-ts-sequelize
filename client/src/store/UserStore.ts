import { makeAutoObservable } from "mobx"
import { User } from '../utils/types'

export default class UserStore {
    private _isAuth: boolean
    private _user: User|null
    constructor(){
        this._isAuth = false
        this._user = null
        makeAutoObservable(this)
    }
    setIsAuth(bool: boolean){
        this._isAuth = bool
    }
    //переопределит тип позже, когда будут известны все поля пользователя
    setUser(user: User|null) { 
        this._user = user
    }
    getIsAuth(): boolean {
        return this._isAuth
    }
    getUser(): User|null {
        return this._user
    }
    getRole(): string {
        return this._user?.role||''
    }
}
