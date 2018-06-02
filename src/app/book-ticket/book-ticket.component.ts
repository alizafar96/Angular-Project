import { Component, OnInit } from '@angular/core';
import {Ticket} from "../ticket";
import {Route} from "../route";
import {Bus} from "../bus";
import {BookingsService} from "../bookings.service";
import { AppRoutingModule, routing } from "../app-routing.module"
import { Router } from '@angular/router';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  newRoute:Route=new Route();//={leaving_from:" ",going_to:" ",date:" "};
  newTicket:Ticket=new Ticket();

  points:string[];
  buses:Bus[];
  getBuses:boolean=false;
  getInfo:boolean;
  constructor(private bookingsService:BookingsService,private rout:Router) { }
  public ValidategetInfo():void{
    this.getInfo=true;
      console.log(this.newRoute.going_to+" "+this.newRoute.leaving_from+"\n");
      this.newTicket.bus.route=this.newRoute;
      console.log(this.newTicket.bus.route.going_to+" "+"\n");
      this.getInfo=true;
      
  }
  public NowshowBuses(){
    this.getBuses=true;

  }

  public selectedBus(a:Bus){
    this.newTicket.bus.name=a.name;
    console.log(this.newTicket.bus.name);
    this.bookingsService.addTicket(this.newTicket);
    this.rout.navigateByUrl("/wellcome");
  }



  ngOnInit() {
    this.points=this.bookingsService.getPoints();
    this.buses=this.bookingsService.getBuses();
    this.getInfo=false;
  }

}
