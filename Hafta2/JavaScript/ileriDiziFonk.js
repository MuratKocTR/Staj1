const dizi=[1,2,3,4,5]
const kareDizisi=[]

dizi.forEach(sayi =>{
kareDizisi.push(sayi*sayi);
})

console.log(kareDizisi);

const mapDizi = dizi.map(sayi=> sayi * 3 )
console.log(dizi);
console.log(mapDizi);

const filtreliDizi=dizi.filter(sayi=>sayi>2)
console.log(filtreliDizi);

const toplam =dizi.reduce((acc,sayi)=> {//reduce toplamak için kullanılir
return acc+sayi;//acc burda başlangic değeri
},10)//acc yi 10 olarak atadik
console.log(toplam);