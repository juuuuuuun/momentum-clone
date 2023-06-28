import { getRandomId } from "../utils/getRandomId";

export class User {
    constructor(userName, userEmail="", userPw){
        this.id = getRandomId();
        this.name = userName;
        this.email = userEmail;
        this.pw = userPw;
        this.created = new Date().toString();
    }
}