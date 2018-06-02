import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookTicketComponent} from './book-ticket/book-ticket.component'
import { BookingsService } from './bookings.service'
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app-routing.module';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';


@NgModule({
  declarations: [
    AppComponent,BookTicketComponent, WellcomeComponent, PrintTicketComponent, CancelTicketComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,routing
  ],
  providers: [ BookingsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
