import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class IpService {

    baseUrl : string = "http://18.217.187.4:8080/peak/api";
    saveIpResource: string = "/ip/save"
    constructor(private http: HttpClient) {
    }

    saveIpClient(ip : string): Observable<any>{
        return this.http.post(this.baseUrl + this.saveIpResource, ip);
    }

    getIpClient(): Observable<any> {
        return this.http.get("http://api.ipify.org/?format=json");
    }
}