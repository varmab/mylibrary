import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Book } from './models/book.interface'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

const GET_BOOKS_API:string="http://localhost:5000/api/books"

@Injectable()
export class BooksDashboardService {
    constructor(private http:Http){}

    getBooks(): Observable<Book[]>{
        return this.http.get(GET_BOOKS_API).map((response:Response)=>response.json());
    }
}