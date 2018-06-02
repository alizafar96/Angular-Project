import {Bus} from "./bus";
export class Ticket {
    username:string="";
    mobile_no:string="";
    passangers:number;
    charges:number;
    bus:Bus;
    constructor(){
        this.charges=15000;
        this.bus=new Bus();
        
    }
}
