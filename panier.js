let plus =Array.from(document.querySelectorAll(".plusbts"))
let qte = Array.from(document.querySelectorAll(".qte"))
let minus = Array.from(document.querySelectorAll(".minusbts"))
let sup = Array.from( document.querySelectorAll(".fa-trash"))
let price = document.querySelectorAll(".price")
let totalpr = document.querySelectorAll(".Total")
for (let i = 0; i < plus.length; i++) {
plus[i].addEventListener("click",function(){

qte[i].innerHTML=Number(qte[i].innerHTML)+1
total()  
})
  
}
for (let i = 0; i < minus.length; i++) {
minus[i].addEventListener("click",function(){
qte[i].innerHTML=Number(qte[i].innerHTML)-1
 total()  
})
 
};

for ( let i in sup ){
    sup[i].addEventListener("click",function(){
    sup[i].parentNode.parentNode.parentNode.remove()
   //card[i].remove()
   total()
   })
   
}

function total(){
    let qtet = Array.from(document.querySelectorAll(".qte"))
    let unitepri =Array.from(document.querySelectorAll(".price")) 
    let s = 0 ;
    for (let i in unitepri){
        s= s +(+qtet [i].innerHTML)*(+unitepri[i].innerHTML)
console.log("s")
    }
    totalpr.innerHTML= s
}
