var kullanicilar =[
    {email:"kocmurat145@gmail.com",sifre:"12345"},
    {email:"muratkoc145@gmail.com",sifre:"54321"}
]
var twittler=[
    {email:"kocmurat145@gmail.com",twit:"bugun hava sicak"},
    {email:"kocmurat145@gmail.com",twit:"evet baya sicak?"},
    {email:"muratkoc145@gmail.com",twit:"akşama düzelir"}
]

var email=prompt("emailinizi giriniz")
var sifre=prompt("sifrenizi giriniz")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}
function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(twittler)
    }else{
        console.log("hatali giris")
    }
}
giris(email,sifre)