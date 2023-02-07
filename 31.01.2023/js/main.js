
'use strict';

// var ad="Murad"

// console.log ("Salam " + ad)
// console.log ("Sagol " + ad)
// console.log ("hello " + ad)
// console.log ("hi " + ad)
// console.log ("necesen " + ad)

// var a=6
// var b=4
// var total=a+b
// console.log(total);

// var a=false
// console.log(typeof(a))

// var reqem1
// console.log(reqem1)

// var reqem1=null
// console.log(reqem1)

// const value1 = 90078992540998n;

// const result1 = value1+1n;
// console.log(result1);

// const student={
//     firstName: 'ram',
//     lastName: null,
//     class: 10
// };



// let hospital = {
//     name: "Baku Medical Plaza",
//     address: {
//         city: "Baku",
//         country: "Azerbaiijan"
//     },
//     contact: {
//         tel: ["012 404 41 90"]
//     },
//     area: {
//         street: "42N Babak Pros, Baku 1142"
//     },
//     section: ["Dermatologiya", "Stomatologiya", "Terapiya", "Dietologiya"],
//     services: ["Diaqnostika", "Laboratoriya", "Rentgenoqrafiya"],
//     doctors: {
//         names: ["Op.Dr. Kamil Gokhan Acar", "Uzm.Dr.Rexsende Aslanova", "Dr.Gunel Qafarli"],
//     },
//     branches: ["Babek", "Merkez", "Medilux"],
// }

// console.log(hospital);

// var ad="Gulnar"

// console.log(ad [3])

// console.log(ad.charAt(2))

// var name="Gulnar"

// var lastName="Asgarova"

// console.log(name.concat(lastName));

// var ad="gulnar"

// console.log(ad.toUpperCase())

// let firstName="Gulnar"
// let lastName="Esgerova"
// let salary="5000"

// console.log("Sizin adiniz:"+firstName+"\n"+"Sizin soyadiniz:"+lastName+"\n"+"Sizin maasiniz:"+salary)
//  console.log(`Sizin adiniz:${firstName}\nsizin soyadiniz:${lastName}`)



// var a=5
// var b=5

// if(a==b){
//     console.log("cavab duzdur");
// }
// else{
//     console.log("cavab sehvdir");
// }

// var a=5
// var b="5"

// if(a==b){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// == (deyerini yoxlayir)

// ===(hem deyerini, hem tipini yoxlayir)


// Bir nece shert odenirse else if istifade olunur 

// let ad="Gulnar"

// if(ad==="Qonce"){
//     console.log(`Salam ${ad}`);
// }
// else if(ad==="Murad"){
//     console.log(`Salam ${ad}`);
// }
// else if(ad==="Gulnar"){
//     console.log(`Salam ${ad}`);
// }
// else{
//     console.log("text");
// }



// let a="5"
// let b="5"

// if(a!==5){
//     console.log("beraber deyil");
// }
// else{
//     console.log("beraberdir");
// }








// let a=0
// let myArr=[1,3,5,7]

// while(a<myArr.length){
//     console.log(myArr[a]);
//     a++
// }

// let counter=1
// while(counter<5){
//     console.log(`sizin reqeminiz ${counter}`);
//     counter++
// }


// let a=1

// do{
//     console.log("Sizin daxile tdiyiniz reqem ardicilligi"+a);
//     a++
// }while(a<4);




// let a=1

// while (a<20){
//     console.log(a);
//     if(a==15){
//         break
//     }
//     a++
// }

// let a=0
// let b=['cup', 'plate', 'spoon', 'knife', 'fork']

// while (a<=b.length) {
//     console.log(b[a]);
//     a++
// }


let Arr= ['xiyar','pomidor','sogan','yerkoku','sarimsag','semeni']
let i=0
while (i<Arr.length) {
    let element=Arr[i]
    i++
    if(element[0]==="s"){
        console.log(element);
    }
}