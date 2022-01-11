var kullanicilar =[
    {email:"kocmurat145@gmail.com",sifre:"12345"},
    {email:"muratkoc145@gmail.com",sifre:"54321"}
]
var twittler=[
    {email:"kocmurat145@gmail.com",twit:"bugun hava sicak"},
    {email:"kocmurat145@gmail.com",twit:"bu sıcaklar bitecekmi?"},
    {email:"muratkoc145@gmail.com",twit:"biter birgün oda biter"}
]

var email=prompt("emailinizi giriniz")
var sifre=prompt("sifrenizi giriniz")

function giris(){
    if((email==kullanicilar[0].email && sifre== kullanicilar[0].sifre)||(email==kullanicilar[1].email &&sifre== kullanicilar[1].sifre)){
console.log(twittler)
    }else{
        console.log("hatali giris")
    }
}
giris(email,sifre)