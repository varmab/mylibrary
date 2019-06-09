import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { BooksDashboardService } from '../../books-dashboard.service'

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
export class BooksDashboardComponent implements OnInit{
    books: Book[];

    constructor(private booksDashboardService:BooksDashboardService){}

    ngOnInit(){
        this.booksDashboardService
        .getBooks()
        .subscribe((data:Book[])=>this.books=data);
    }
}