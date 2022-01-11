// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");
// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
// }
//  var classElemanlari = document.getElementsByClassName("intro1");
//  alert(classElemanlari[1].innerHTML);
//  alert(classElemanlari.length);
//  var queryElemanlari=document.querySelectorAll("p.intro1");
//  alert(queryElemanlari.length);
// 
// alert(isimElemanlari[0].value);
// var cevher=document.getElementById("cevher").addEventListener("mouseover",rengiDegistir);
// var cevher1=document.getElementById("cevher").addEventListener("mouseout",rengiDegistir2);
// function rengiDegistir(){
//     document.getElementById("div1").style.color="red";
//     var isimElemanlari=document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value="Murat";
// }
// function rengiDegistir2(){
//     document.getElementById("div1").style.color="green";
//     var isimElemanlari=document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value="Murat";
// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);
var baslik=document.createElement("h2");
var node=document.createTextNode("merhaba javascript");
baslik.appendChild(node);
var div1=document.getElementById("div1");
var p2=document.getElementById("p2");
div1.insertBefore(baslik,p2);

alert("p2 siliniyor")
div1.removeChild(p2);

alert("degiştiriliyor");
var p1=document.getElementById("p1");
div1.replaceChild(baslik,p1);