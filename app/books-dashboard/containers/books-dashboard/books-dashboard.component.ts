import { Component } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
    selector:'books-dashboard',
    template:`
        <div>
            <book-count
                [items]="books"
            ></book-count>
            
            <book-detail
                *ngFor="let book of books"
                [detail]="book">
            </book-detail>
        </div>
    `
})
export class BooksDashboardComponent{
    books: Book[]=[
        {
            id:1,
            title:'Node Fundamentals',
            published:14657774,
            instock:false
        },
        {
            id:2,
            title:'HTML Fundamentals',
            published:14657774,
            instock:false
        },
        {
            id:3,
            title:'JS Fundamentals',
            published:14657774,
            instock:true
        }
    ]
}