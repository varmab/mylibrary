import { Component, Input } from '@angular/core'
import { Book } from '../../models/book.interface';

@Component({
    selector:'book-count',
    template:`
        <h1>Books Dashboard</h1>
        <p>Total Books:{{items.length}}</p>
        <hr/>
    `
})
export class BookCountComponent{
    @Input()
    items: Book[];
}