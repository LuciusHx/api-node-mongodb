import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
    handle(): Promise<HttpResponse<User[]>>;
}

export interface IGetUsersRepository {
    //retorna uma lista de usuarios
    getUsers(): Promise<User[]>
}