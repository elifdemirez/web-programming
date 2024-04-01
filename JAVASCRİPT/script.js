// console.log("Hoş geldiniz")
// console.log(123)
// console.error("Hata oluştu")
// console.warn("Bir uyarı oluştu")

// console.clear()



// Değişkenler
// var password;
// console.log(password)
// password = "123"
// console.log(password)

// yas = 19;
// console.log(yas)

// Değişken tanımlama kuralları
// Sayısal ifade ile başlayamaz
// Türkçe karakter kullanılamaz
// Boşluk kullanılamaz
// "_" kullanılabilir
// "-" kullanılamaz
// case sensitive (Büyük küçük harf duyarlılığı)
// tanımlama yapılırken var, let, const kullanılabilir

// yas1 = 20;
// var adSoyad = "Elifnur Demirezen"
// console.log(adSoyad)

// const email="12345@gmail.com"
// console.log(email)
//email = "56789@gmail.com"
//console.log(email)


//Değişken Tipleri

// Primitive Types

// String
// let firstName = "Elifnur"
// console.log(typeof firstName)

// // Number
// let age = 19
// console.log(typeof age)

// // Boolean
// let isActive = true
// console.log(typeof isActive)

// //undefined
// let city;
// console.log(typeof city)

// //reference Types: Object
// // Array
// let names = ['Elif', 'Nur', 'Demirezen']
// console.log(typeof names)

// //object literal
// let address = {
//     city: 'İstanbul',
//     country: 'Türkiye'
// }
// console.log(typeof address)

// var hesapla=function(){
//     return 0
// }
// console.log(typeof hesapla)


//OPERATÖRLER

//Aritmetik Operatörler
// let veri;
// const a=20;
// const b=10;
// let d=3;
// const c=5;

// veri = a+b;
// veri = a-b;
// veri = a*b;
// veri = a/b;
// veri=d++;
// veri=++d;
// veri=d--;
// veri=--d;
// veri=a%b;

// //Atama Operatörleri
// veri = a;
// veri +=a;
// veri -=a;
// veri *=a;
// veri /=a;
// veri %=a;

// //Karşılaştırma Operatörleri
// veri = a==b;
// veri = b==c;
// veri = 5==="5";
// veri = a!==b;
// veri = a>b;
// veri = a<b;
// veri = a>=b;
// veri = a<=b;

// //Mantıksal Operatörler
// veri = (a>b) && (a>c);
// veri = (a>b) || (a<c);
// veri = !(a>b);



// console.log(veri)
// console.log(typeof veri)


// DATE OBJECT
// let zaman = new Date();
// let birthday = new Date(2004,10,20);

// //set methods

// zaman.setDate(25);
// zaman.setMonth(3);
// zaman.setFullYear(2024);
// zaman.setHours(20);

// //get methods

// console.log(zaman.getMonth());
// console.log(zaman.getDate());
// console.log(zaman.getDay());
// console.log(zaman.getFullYear());
// console.log(zaman.getHours());
// console.log(zaman.getMinutes());
// console.log(zaman.getSeconds());
// console.log(zaman.getMilliseconds());

// console.log(zaman.getFullYear()-birthday.getFullYear());
// console.log(zaman.getMonth()-birthday.getMonth());
// console.log(zaman);
// console.log(typeof zaman);

//numbers
// let veri;

// // veri=Number("5");
// // veri=parseInt("5");
// // veri=parseFloat("5.5");
// // veri=parseInt("5c");
// // veri=parseInt("a5c");
// // veri=isNaN("c5");
// // veri=isNaN("5");

// var sayi=15.123456789;
// veri=sayi.toPrecision(3);
// veri=sayi.toFixed(2);

// veri=Math.PI;
// veri=Math.round(2.4);
// veri=Math.ceil(2.4);
// veri=Math.floor(2.9);
// veri=Math.pow(2,4);
// veri=Math.sqrt(16);
// veri=Math.abs(-10);
// veri=Math.min(1,2,3,4,5);
// veri=Math.max(1,2,3,4,5);
// veri=Math.random();
// veri=Math.floor(Math.random()*100+1);

// console.log(veri);
// console.log(typeof veri);

//Strıngs

// const firstName="Elifnur";
// const lastName="Demirezen";
// const age=19;
// let hobbies="sinema,spor,kitap okumak";

// let veri;
// //string concatenation

// veri=firstName+" "+lastName;
// veri="Elifnur";
// veri+=" Demirezen";

// veri="Benim adım "+firstName+" ve yaşım "+age+" dır"+'ve İstanbul\'da yaşıyorum';
// veri=firstName.concat(" ",lastName);
// veri=veri.toUpperCase();
// veri=veri.toLowerCase();

// // veri=veri.substring(0,5);
// // veri=veri.slice(0,5);
// // veri=veri.indexOf("n");

// // veri=veri.replace("nur","nuray");

// // veri=veri.length;

// veri=hobbies.split(",");


// console.log(veri);
// console.log(typeof veri);

//Arrays

// let names=["Elif","Nur","Demirezen"];
// let years=[1990,1980,2000]
// let mix=["Elif",19,null,undefined,2021,new Date()];

// console.log(names);
// console.log(names.length);
// console.log(typeof names);

// console.log(years);
// console.log(mix);

// //get array item
// console.log(names[3]);

// //set array item
// names[0]="Seçil";
// names[names.length]="Akif";
// console.log(names);

// //add item

// //names.push("Elif");
// names.unshift("Elif");
// console.log(names);

// //remove item
// years.pop();
// console.log(years);

// years.shift();
// //console.log(ye fromIndex?: number):number

// //indexof
// let index=names.indexOf("Demirezen");
// console.log("index: "+index);

// //reverse
// names.reverse();
// console.log(names);

// //sort
// names.sort();
// console.log(names);

// //concat
// let val=names.concat(years);
// console.log(val);

// //splice
// names.splice(0,2);
// console.log(names);

// //find
// function over18(year){
//     let age=new Date().getFullYear()-year;
//     return age>=18;
// }

//Object Literals

// let veri;
// let user={
//     username:"Elifnur",
//     firstName:"Elifnur",
//     lastName:"Demirezen",
//     age:19,
//     hobbies:["sinema","spor","kitap okumak"],
//     address:{
//         city:"İstanbul",
//         country:"Türkiye"
//     }
// }

// veri=user;
// veri=user.firstName;
// veri=user.lastName;
// veri=user.hobbies;
// veri=user.hobbies.length;
// veri=user.address.city;

// console.log(veri);
// console.log(typeof veri);


//Döngüler

//while
// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=10;

// while(i>0){
//     console.log(i);
//     i--;
// }

//break ve continue
// let i=0;
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }

// let i=0;
// while(i<10){
//     if(i==3){
      
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//do-while
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

//for
// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let i=0;i<10;i++){
//     if(i==3){
//         console.log("En sevdiğim sayı: "+i);
//         continue;
//     }
//     if(i==5){
//         console.log("En sevmediğim sayı: "+i);
//         break;
//     }
//     console.log(i);
// }


// let toplam=0;
// for(let i=10;i>0;i--){
//     toplam+=i;
// }


// console.log(toplam);

// let sonuc=1;
// for(let i=10;i>0;i--){
//     sonuc*=i;
// }
// console.log(sonuc);



//dizi ve objelerde döngüler
// let citys=["İstanbul","Ankara","İzmir","Adana"];

//     let users = [
//         {
//             firstName: 'John',
//             lastName: 'Doe'
//         },
//         {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//         // Add more users as needed
//     ];


// //array
// // for(let i=0;i<citys.length;i++){
// //     console.log(citys[i]);
// // }


// //for-in methodu
// for(let i in citys){
//     console.log(i);
// }

// //for-each methodu
// citys.forEach(function(city){
//     console.log(city);
// });


//Fonksiyonlar

// function merhaba(){
//     console.log("Merhaba");
// }
// merhaba();


// function merhaba(firstName,lastName){
//     console.log(`Merhaba ${firstName} ${lastName}`);
// }

// merhaba("Elifnur","Demirezen");
// merhaba("Seçil","Akif");

// function yasHesapla(dogumYili){
//     return 2024-dogumYili;
//  }

// yasHesapla(2004);
// console.log(yasHesapla(2004));

// let ageElif=yasHesapla(2004);
// let ageSeçil=yasHesapla(1975);

// console.log(ageElif);
// console.log(ageSeçil);


// function ehliyetAlabilmeDurumu(dogumYili,isim){
//     let yas=yasHesapla(dogumYili);
//     let ehliyetYasi=18;
//     if(yas>=ehliyetYasi){
//         console.log(`${isim} ehliyet alabilir`);
//     }else{
//         console.log(`${isim} ehliyet alamaz`);
//     }
// }

// ehliyetAlabilmeDurumu(2004,"Elifnur");



//window object
veri=window;
console.log(window);

alert("Merhaba");
prompt("Adınızı giriniz");

//confirm
if(confirm("Emin misiniz?")){
    console.log("Evet");
}
else{
    console.log("Hayır");
}






