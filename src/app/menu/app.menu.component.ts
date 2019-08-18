import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { FoodService } from './app.food-service.component';
import { Router } from '@angular/router';

@Component({
    selector: 'menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.css']
})

export class MenuComponent implements OnInit, AfterViewInit{

    private category: string;
    private activeItems: any;
    private activeDrinks: any;
    private peakSpecialDrinks: any;

    @ViewChild('bar')
    bar:ElementRef;

    @ViewChild('chef')
    chef:ElementRef;

    private navigateTo : string;

    constructor(private starter : FoodService, private route: Router){
        
        this.activeItems = this.starter.starterItems;
        this.activeDrinks = null;

        if(this.route.url.includes('bar')){
            this.navigateTo = "bar";
        } else{

            this.navigateTo = "chef";

            if(this.route.url.includes("lunchSpecial")){

                this.getLunchSpecials();
            } else if(this.route.url.includes("weekendSpecial")){

                this.getWeekendSpecial();
            } else if(this.route.url.includes("socialHours")){

                this.getSocialHour();                

            }            
        }
    }

    ngOnInit(){

    }

    ngAfterViewInit(){
        setTimeout(() => {
            if(this.navigateTo == 'bar'){
                this.bar.nativeElement.scrollIntoView({behaviour:'smooth'});
            } else {
                this.chef.nativeElement.scrollIntoView({behaviour:'smooth'});
            }


        },100);

    }

    getLunchSpecials(){
        this.category = "LUNCH SPECIALS";
        this.activeItems =  this.starter.lunchSpecials;
        this.activeDrinks = null;
    }
    getPeakSpecialDrinks(){
       return this.starter.peakSpecialDrinks;
    }

    getSocialHour(){
        this.category = "HAPPY HOUR";
        this.activeItems = this.starter.socialHours;
        this.activeDrinks = this.starter.socialDrinks;
    }

    getWeekendSpecial(){
        this.category = "WEEKEND SPECIALS";
        this.activeItems = this.starter.weekendSpecial;
        this.activeDrinks = this.starter.weekendSpecialDrinks;
    }

    getSoupsAndSalads(){
        this.category = "SOUPS & SALADS";
        this.activeItems =  this.starter.soupsAndSalads;
        this.activeDrinks = null;

    }

    getStarterItems(){
        this.category="STARTERS";
        this.activeItems =  this.starter.starterItems;
        this.activeDrinks = null;
    }

    getHimalayanTiffin(){
        this.category = "HIMALAYAN TIFFIN";
        this.activeItems =  this.starter.himalayanTiffin;
        this.activeDrinks = null;
    }

    getChikcenSpecial(){
            this.category = "CHICKEN SPECIALS";
        this.activeItems =  this.starter.chikcenSpecial;
        this.activeDrinks = null;
    }

    getSeaFoodEntrees(){
        this.category = "SEA FOOD";
        this.activeItems =  this.starter.seaFoodEntrees;        
        this.activeDrinks = null;
    }

    getLambSpecial(){
        this.category = "LAMB SPECIALS";
        this.activeItems =  this.starter.lambSpeical;
        this.activeDrinks = null;
    }
    getGoatSpecial(){
        this.category = "GOAT SPECIALS";
        this.activeItems =  this.starter.goatSpecial;
        this.activeDrinks = null;
    }

    getRiceAndBiryani(){
        this.category = "BIRYANI";
        this.activeItems =  this.starter.riceAndBiryani;
        this.activeDrinks = null;
    }
    
    getTandooriBreads(){
        this.category = "TANDOORI";
        this.activeItems =  this.starter.tandooriBreads;
        this.activeDrinks = null;
    }

    getNoodles(){
        this.category = "NOODLES";
        this.activeItems =  this.starter.noodles;
        this.activeDrinks = null;
    }
    getPeakSpecial(){
        this.category = "PEAK SPECIALS";
        this.activeItems =  this.starter.peakSpecial;
        this.activeDrinks = null;
    }

    getVegetableEntrees(){
        this.category = "VEGETARIAN";
        this.activeItems =  this.starter.vegetableEntrees;
        this.activeDrinks = null;
    }

    getThakaliThali(){
        this.category = "THAKALI THALI";
        this.activeItems =  this.starter.thakaliThali;
        this.activeDrinks = null;
    }
    getTibetan(){
        this.category = "TIBETAN";
        this.activeItems =  this.starter.tibetan;
        this.activeDrinks = null;
    }

    getDelight(){
        this.category = "DELIGHT";
        this.activeItems =  this.starter.delight;
        this.activeDrinks = null;
    }



}