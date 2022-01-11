var selamFonksiyonu=function selam(){
    console.log("merhaba");
}
selamFonksiyonu();
//fonksiyona illa bir ad girmek zorunda değiliz =()=> der iken bunun bir 
//fonksiyon olduğunu belirtiyoruz
const selamFonksiyonu2 = () => {
    console.log("merhaba2");
    console.log("...");
}
selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
    
}
selamFonksiyonu3("merhaba dünya");

var topla=(sayi1,sayi2) =>{
    return sayi1+sayi2;
}
let toplam=topla(3,4);
console.log(toplam);