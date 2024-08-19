import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
}) export class AuthService {
    private token: string | null = null;

    constructor() {}

    SetToken(token: string) : void {
        this.token = token;
        localStorage.setItem('authToken', token);
    }

    GetToken(): string | null {
        return this.token || localStorage.getItem('authToken');
    }
}