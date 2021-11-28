class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){ return this._firstName; }
    set firstName(fName){
        let fNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fNameRegExp.test(fName))
            this._firstName = fName;
        else throw 'FirstName is Not Matched';
    }

    get lastName(){ return this._lastName; }
    set lastName(lName){
        let lNameRegExp = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(lNameRegExp.test(lName))
            this._lastName = lName;
        else throw 'LastName is Not Matched';
    }

    get address(){ return this._address; }
    set address(address){
        let addressRegex = RegExp('^[a-z A-z]{4,}');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is not Matched';
    }

    get city(){ return this._city; }
    set city(city){
        let cityRegex = RegExp('^[a-z A-z]{4,}');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City is not Matched';
    }

    get state(){ return this._state; }
    set state(state){
        let stateRegex = RegExp('^[a-z A-z]{4,}');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State is not Matched';
    }

    get zip(){ return this._zip; }
    set zip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5,}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip is not Matched';
    }

    get phoneNumber(){ return this._phoneNumber;}
    set phoneNumber(phoneNo){
        let phoneRegex = new RegExp("^(\\d{2})( )([6-9]{1})(\\d{9})");
        if(phoneRegex.test(phoneNo)){
            this._phoneNumber = phoneNo;
        }else{
            throw "PhoneNumber is not Matched";
        }
    }

    get email(){ return this._email;}
    set email(e){
        let emailRegex = new RegExp("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$");
        if(emailRegex.test(e)){
            this._email = e;
        }else{
            console.log("Email is not Matched");
        }
    }

    toString(){
        return "FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
                ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", PhoneNumber = " + this.phoneNumber + ", Email = " + this.email;
    }
}

let personContact = new Contact("Tanniru", "Kalyan", "abcdef", "Guntur", "AndhraPradesh", "522616", "91 9182169100", "tannirukalyan1432@gmail.com");
console.log(personContact.toString());
try{
    personContact.firstName = "Tanniru";
    console.log(personContact.firstName);
}catch(e){
    console.error(e);
}
try{
    personContact.lastName = "Kalyan";
    console.log(personContact.lastName);
}catch(e){
    console.error(e);
}
try{
    personContact.address = "abc";
    console.log(personContact.address);
}catch(e){
    console.error(e);
}
try{
    personContact.city = "Gnt";
    console.log(personContact.city);
}catch(e){
    console.error(e);
}
try{
    personContact.state = "Ap";
    console.log(personContact.state);
}catch(e){
    console.error(e);
}
try{
    personContact.zip = "123";
    console.log(personContact.zip);
}catch(e){
    console.error(e);
}
try{
    personContact.phoneNumber = "9182169100";
}catch(e){
    console.error(e);
}
try{
    personContact.email = "tannirukalyan1432@gmail";
    console.log(personContact.email);
}catch(e){
    console.log(e);
}
let person1 = new Contact("Bhargav", "Tanniru", "Abcde", "RangaReddy", "Andhrapradesh", "522616", "88 8765445664","bhargav@gmail.com" );
let person2 = new Contact("Simran", "Tanniru", "Abcde", "Guntur", "Andhrapradesh", "522616", "88 9165445664","simran@gmail.com" );
let addressBookArray = [];
addressBookArray[0] = person1;
addressBookArray[1] = person2;
console.log(addressBookArray);
let objIndex = addressBookArray.findIndex((obj => obj.firstName == "Bhargav"));
console.log("Before Update : " + addressBookArray[objIndex]);
addressBookArray[objIndex].city = "Guntur";
console.log("After Update : " + addressBookArray[objIndex]);
let person3 = new Contact("Durga", "Tanniru", "Bffrfd", "Thane", "Maharastra", "564763", "78 9876789654", "Durga@gmail.com" );
addressBookArray[2] = person3;
console.log(addressBookArray);
let index = addressBookArray.findIndex((obj => obj.firstName == "Durga"));
addressBookArray.splice(index, 1);
console.log("After Deletion");
console.log(addressBookArray);
let count = addressBookArray.reduce((counter, person) => counter + 1, 0);
console.log(count);
let person4 = new Contact("Sanu", "Abgcd", "Gtfvs", "Piduguralla", "Ngtdbd","675873", "99 8756473425", "sanu23@gmail.com");
if(addressBookArray.findIndex(contact => contact.firstName == person4.firstName) == -1){
    addressBookArray[3] = person4;
}
else{
    console.log("Duplicate Entry");
}
console.log(addressBookArray);
let person5 = new Contact("Jyothi", "Tanniru", "Defds", "Piduguralla", "Andhrapradesh", "654773", "76 8866744467", "jyothi20@gmail.com");
addressBookArray[3] = person5;
console.log(addressBookArray);

let contacts = addressBookArray.filter(personContact => personContact.city == "Guntur");
console.log("Contacts from city 'Guntur' are : ")
console.log(contacts);

let personFromState = addressBookArray.filter(personContact => personContact.state == "Andhrapradesh");
console.log("Contacts from State 'Andhrapradesh' are : ");
console.log(personFromState);
console.log("No.of Persons from city = 'Guntur' and state = 'Andhrapradesh' : ");
let countByCity = addressBookArray.filter(person => person.city =="Guntur" && person.state == "Andhrapradesh").reduce((count, personContact) => count + 1, 0);
console.log(countByCity);