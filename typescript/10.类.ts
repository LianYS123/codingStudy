class User{
    private username:string;
    private password:string;
    constructor(username:string,password:string){
        this.username = username;
        this.password = password;
    }
    getUsername():string{
        return this.username;
    }
    setUsername(username:string):void{
        this.username = username;
    }
    getPassword():string{
        return this.password;
    }
    sePassword(password:string):void{
        this.password = password;
    }
}

class User2{ 
    constructor(private _username:string,private _password:string) {

    }
    get username():string{
        return this.username
    }
    set username(username:string) {
        this._username = username;
    }
}
let user1 = new User('lian','123');
let user2 = new User2('zhangsan','456');
