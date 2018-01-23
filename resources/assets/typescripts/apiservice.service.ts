import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { User } from './user';

@Injectable()
export class apiService {
    constructor(private http:Http) { }


    get(url: string) {
        return this.http.get(url);
    }

    post(user: any, url: string) {
        return this.http.post(url, user);
    }

    create(user: User, url: string) {
        return this.http.post(url, user);
    }
}