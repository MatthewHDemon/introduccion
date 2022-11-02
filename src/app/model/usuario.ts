export interface usuario {
    name: string,
    lastName: string,
    age: number,
    address: string,
    height: number,
    company: company
}

let usuario = {
    name:"Elon",
    lastName:"Musk",
    age:48,
    address:"Boston Street",
    height:182
}
export interface company{
    name: string
    value:number
    location:location
}
let company = {
    name:"Tesla",
    value:1000000000
}
export interface location{
    lat: number
    lon: number
}
let location ={
    lat: "55.87611",
    lon:"-23.65899"
}