import { Injectable } from '@angular/core';
import {Ticket} from "./ticket";
import {Route} from "./route";
import {Bus} from "./bus";
@Injectable()
export class BookingsService {
  buses:Bus[]=[];
  locations:string[]=[];
  tickets:Ticket[]=[];

  constructor() { 
    this.addLocations();
    this.addBuses();

    var myroute:Route={leaving_from:"islamabad",going_to:"lahore",date:"22-Dec-2018"};
    var mybus:Bus={name:"fast",route:myroute};
    var myticket:Ticket={username:"ali",mobile_no:"03335134527",charges:1200,passangers:5,bus:mybus};
    this.tickets.push(myticket);
  }

  public getPoints():string[]{
    return this.locations;
  }

  public addTicket(t:Ticket){
    console.log("new ticket has been added by user : "+t.username)
    this.tickets.push(t);
  }
  public getBuses():Bus[]{
    return this.buses;
  }

  public getTicket(name:string,num:string):Ticket{
    for(let a of this.tickets){
      if(a.username===name && a.mobile_no===num){
        console.log("found in service : "+a.bus.route.going_to);
        return a;
      }
    }
    console.log("can't find ticket of user : "+name);
    return null;
  }

  public deleteTicket(name:string,num:string){
    let index=0;
    for(let a of this.tickets){
      if(a.username===name && a.mobile_no===num){
        console.log("deleting ticket ");
        this.tickets.splice(index,1);
      }
      index++;
    }
  }


  addBuses(){
    var rote:Route=new Route;
    var bus:Bus={name:"xyz",route:rote};
    bus.name="dewoo";
    this.buses.push({name:"dewoo",route:rote});
    bus.name="FaisalMovers";
    this.buses.push({name:"bimbo",route:rote});
    bus.name="Hego";
    this.buses.push({name:"hugo",route:rote});
    bus.name="Ding";
    this.buses.push({name:"ding",route:rote});
    bus.name="AVL";
    this.buses.push({name:"rexn",route:rote});
    bus.name="RXV";
    this.buses.push({name:"buzz",route:rote});
    bus.name="DEEZ";
    this.buses.push({name:"RZD",route:rote});
    bus.name="FAST";
    this.buses.push({name:"Fast",route:rote});

  }
  addLocations(){
    this.locations.push("Rawalpindi");
    this.locations.push("Islamabad");
    this.locations.push("Karachi");
    this.locations.push("Lahore");
    this.locations.push("Quetta");
    this.locations.push("Pashawar");
    this.locations.push("Multan");
  }

}
