import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environments } from "src/environments/configuration";
import { AuthService } from "./AuthService";

@Injectable({
    providedIn: 'root'
}) export class ApiService {
    private url = environments.BaseUrl;
    constructor(private http: HttpClient, private authService: AuthService){}

    Login(endpoint: string, body:any): Observable<any> {
        return this.Post(`${endpoint}`, body);
    }

    Get(endpoint: string) : Observable<any> {
        return this.http.get(`${this.url}/${endpoint}`);
    }

    Post(endpoint:string, body: any) : Observable<any> {
        return this.http.post(`${this.url}/${endpoint}`, body);
    }

    Put(endpoint:string, body: any) : Observable<any> {
        return this.http.put(`${this.url}/${endpoint}`, body);
    }

    Delete(endpoint: string) : Observable<any> {
        return this.http.delete(`${this.url}/${endpoint}`);
    }


}