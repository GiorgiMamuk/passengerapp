let count=0
let countEl=document.getElementById("count-el")
 function increment() {
    count+=1
    console.log(count)
    countEl.innerText=count
 }


function decrement() {
    if (count>0){
    count -=1}
    countEl.innerText=count
}

let saveBtn=document.getElementById("save-btn")
 

 let saveEl=document.getElementById("save-el")

 function save(){
    let countDush=count +  " - "
    saveEl.innerText += " " + countDush
    countEl.innerText=0
    count=0
    
   
}
 
