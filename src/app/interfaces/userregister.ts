export interface Userregister {
    fullname : string,
    email : string,
    phoneno : string,
    password : string,
    confirmpassword : string,
    terms : boolean
}
export interface EmployeeRegister {
    fullname : string,
    email : string,
    address : string,
    city : string,
    phoneno : string,
    password : string,
    confirmpassword : string,
}

export interface Register {
    fullname : string,
    email : string,
    address : string,
    city : string,
    phoneno : string,
    password : string,
    confirmpassword : string,
}

export interface Login {
    email : string,
    password : string
}
