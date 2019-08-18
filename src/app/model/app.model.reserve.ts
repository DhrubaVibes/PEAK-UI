export class ReserveDTO{
   reserveId : number;
	
	fullName : string;
	
	 date : string;
	
	 email : string;
	
	 phone : string;
	
    numOfPeople : number;
    
    constructor(reserveId, date, email, phone, numOfPeople){
        this.reserveId = reserveId;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.numOfPeople = numOfPeople;
    } 

}