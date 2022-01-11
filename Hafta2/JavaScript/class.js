class Personel{//classlar büyük harfle başlar
    constructor(ad,soyad){
     this.ad= ad;
     this.soyad=soyad;
    }
    
    kaydet(){
        console.log("personel kaydedildi"+" "+this.ad+" "+this.soya);
    }
}
const personel=new Personel("murat","koç")
    personel.kaydet();
    console.log(personel.ad);
    console.log(personel.soyad);