import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

//containers
import { BooksDashboardComponent } from './containers/books-dashboard/books-dashboard.component'

//components
import { BookCountComponent } from './components/book-count/book-count.component'
import { BookDetailComponent } from './components/book-detail/book-detail.component'

//services
import { BooksDashboardService } from './books-dashboard.service'

@NgModule({
    declarations:[
        BooksDashboardComponent,
        BookCountComponent,
        BookDetailComponent
    ],
    imports:[
            CommonModule,
            HttpModule
        ],
    exports:[BooksDashboardComponent],
    providers:[BooksDashboardService]
})
export class BooksDashboardModule{}