import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {Route} from "../route";
import {Bus} from "../bus";
import { BookingsService } from "../bookings.service";


@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {
  name:string="";
  mobile_no:string="";
  msg:boolean=false;
  constructor(private bookingService:BookingsService) { }

  public searchTicket(){
    console.log(this.name+" "+this.mobile_no);
    this.bookingService.deleteTicket(this.name,this.mobile_no);
    this.msg=true;
    
  }

  ngOnInit() {
  }

}
