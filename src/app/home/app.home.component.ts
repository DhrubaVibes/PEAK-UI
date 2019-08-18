import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import "../../assets/js/insta.js";

import { HttpClient } from '@angular/common/http';

declare function initInsta();

@Component({
    selector: "home",
    templateUrl: "app.home.component.html",
    styleUrls: ["./app.home.component.css"]

})


export class HomeComponent implements AfterViewInit {

    @ViewChild('videoPlayer') videoplayer: ElementRef;

    private numPeople: number;
    private time: string;
    private date: String;
    private email: String;
    private phone: number;
    private name: string;
    private reserving: boolean;
    private success: boolean;

    private mailUrl1 = "https://api.smsglobal.com/http-api.php?action=sendsms&user=t4mmjm1m&password=N1YfWQm2&from=8328360153&to=18328360153";
    private mailUrl2 = "https://api.smsglobal.com/http-api.php?action=sendsms&user=t4mmjm1m&password=N1YfWQm2&from=8328360153&to=19728783404";
    private mailUrl3 = "https://api.smsglobal.com/http-api.php?action=sendsms&user=t4mmjm1m&password=N1YfWQm2&from=8328360153&to=12148642071";
    private mailUrl4 = "https://api.smsglobal.com/http-api.php?action=sendsms&user=t4mmjm1m&password=N1YfWQm2&from=8328360153&to=14325996151";



    constructor(private httpService: HttpClient) {
        this.reserving = false;
        this.success = false;
    }


    clearReserve() {

        this.numPeople = null;
        this.time = null;
        this.date = null;
        this.email = null;
        this.phone = null;
        this.name = null;

    }
    ngAfterViewInit() {
        initInsta();
    }

    initVideo() {
        //            this.videoplayer.nativeElement.play();
        this.videoplayer.nativeElement.muted = "muted";

    }

    sendForReservation() {

        var smsBody = "New request for reservation from " + this.name +
            " for " + this.numPeople + " people on " +
            this.date + " at " +
            this.time + ". Phone number is "
            + this.phone + " AND email is " +
            this.email.replace(".", "-");

        console.log(smsBody);

        console.log(this.mailUrl1 + "&text=" + encodeURIComponent(smsBody));
        console.log(this.mailUrl2 + "&text=" + encodeURIComponent(smsBody));
        console.log(this.mailUrl3 + "&text=" + encodeURIComponent(smsBody));
        console.log(this.mailUrl4 + "&text=" + encodeURIComponent(smsBody));

        this.httpService.get(this.mailUrl1 + "&text=" + smsBody).subscribe(
            (data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error.statusText);
                if (error.statusText == 'OK') {
                    console.log("SENT");
                    this.success = true;
                    this.reserving = false;
                    this.clearReserve();
                }
            });



        this.httpService.get(this.mailUrl2 + "&text=" + smsBody).subscribe(
            (data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error.statusText);
                if (error.statusText == 'OK') {
                    console.log("SENT");
                    this.success = true;
                    this.reserving = false;
                    this.clearReserve();

                }
            });

        this.httpService.get(this.mailUrl3 + "&text=" + smsBody).subscribe(
            (data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error.statusText);
                if (error.statusText == 'OK') {
                    console.log("SENT");
                    this.success = true;
                    this.reserving = false;
                    this.clearReserve();

                }
            });

        this.httpService.get(this.mailUrl4 + "&text=" + smsBody).subscribe(
            (data: any) => {
                console.log(data);
            },
            (error) => {
                console.log(error.statusText);
                if (error.statusText == 'OK') {
                    console.log("SENT");
                    this.success = true;
                    this.reserving = false;
                    this.clearReserve();

                }
            });


    }
    reserve() {

        this.reserving = true;
        this.sendForReservation();

    }

    nameValid() {

        if (this.name == null || !this.name.includes(" ")) {
            return false;
        } else {
            return true;
        }
    }

    contactDetails() {
        this.success = false;
        this.reserving = false;
    }

    emailValid() {

        var pattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}com$";

        if (this.email == null || this.email.match(pattern) == null) {
            return false;
        } else {
            return true;
        }
    }

    phoneValid() {

        if (this.phone == null || this.phone.toString().length != 10) {
            if (this.phone != null) {
                console.log(this.phone);
                console.log(this.phone.toString().length);
            }
            return false;
        } else {
            return true;
        }
    }

}