import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {Route} from "../route";
import {Bus} from "../bus";
import { BookingsService } from "../bookings.service";


@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.css']
})
export class PrintTicketComponent implements OnInit {
  ticket:Ticket=new Ticket();

  name:string="";
  mobile_no:string="";
  showTicket:boolean=false;
  constructor(private bookingService:BookingsService) { }
  
  public searchTicket(){
    this.showTicket=true;
    console.log(this.name+" "+this.mobile_no);
    this.ticket=this.bookingService.getTicket(this.name,this.mobile_no);
    console.log("service fetched - passangers :"+this.ticket.passangers+"/ mob no : "+
    this.ticket.mobile_no);
    
  }


  ngOnInit() {

  }

}
