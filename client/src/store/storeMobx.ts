import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import {AuthResponse} from "../models/response/AuthResponse";

export default class StoreMobx {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
             const response = await AuthService.login(email, password);
             localStorage.setItem("token", response.data.accessToken);
             this.setAuth(true);
             this.setUser(response.data.user);
        } catch (error: any) {
            alert(error.response?.data?.message);
        }
    }

    async registration(email: string, password: string) {
        try {
             const response = await AuthService.register(email, password);
             localStorage.setItem("token", response.data.accessToken);
             this.setAuth(true);
             this.setUser(response.data.user);
        } catch (error: any) {
            alert(error.response?.data?.message);
        }
    }

    async logout() {
        try {
             const response = await AuthService.logout();
             localStorage.removeItem("token");
             this.setAuth(false);
             this.setUser({} as IUser);
        } catch (error: any) {
            alert(error.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setIsLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
             localStorage.setItem("token", response.data.accessToken);
             this.setAuth(true);
             this.setUser(response.data.user);
        } catch (error: any) {
            alert(error.response?.data?.message);
        } finally {
            this.setIsLoading(false);
        }
    }
}
