export class User{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this._password;

    }


    get password() {
        return this._password
    }
    set password(value1) {
       
    }


}