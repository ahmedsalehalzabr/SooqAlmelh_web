export interface CreateAccount {
    username:string,
    password:string,
    role:string,
    email:string
}

export interface Login {
    email:string,
    password:string,
    role:string,
}
export interface User {
    UserName: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
}