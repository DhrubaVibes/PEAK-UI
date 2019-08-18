import { Component, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "food-card",
    templateUrl: "app.cards.component.html",
    styleUrls: ["./app.cards.component.css"]
})

export class FoodCardComponent{

    constructor(private route: Router){

    }

    openMenu(type:string){

        if (type=='lunchSpecial'){

            this.route.navigateByUrl("menu/lunchSpecial");

        } else  if(type=='bar'){

            this.route.navigateByUrl("menu/bar");

        } else   if (type=='socialHours'){

            this.route.navigateByUrl("menu/socialHours");

        } else  if(type=='weekendSpecial'){

            this.route.navigateByUrl("menu/weekendSpecial");

        } 
    }

}