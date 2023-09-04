const ques= document.querySelectorAll(".ques")
const ans= document.querySelectorAll(".ans")
const arrow= document.querySelectorAll(".arrow")
const para= document.querySelectorAll(".para")
const heading= document.querySelectorAll(".h")

function resetAll(i){
    for(let j=0;j<5;j++){
        ans[j].classList.remove("active")
        arrow[j].style.cssText= "rotate: -90deg"
        para[j].style.cssText=" opacity: 0 ;"
        heading[j].style.cssText="font-weight:400"
    }
    ans[i].classList.add("active")
    heading[i].style.cssText="font-weight:bold"
    setTimeout(function(){
        para[i].style.cssText=" opacity: 0.7 ; transition: 1s;" // Important... adding transition
    },50)
    arrow[i].style.cssText="rotate: 180deg"
}


function closeAccordion(i){
    ans[i].classList.remove("active")
    para[i].style.cssText=" opacity: 0;"
    arrow[i].style.cssText= "rotate: -90deg"
    heading[i].style.cssText="font-weight:400"
}



for(let i=0;i<5;i++){
    ques[i].addEventListener("click",()=>{
        if(ans[i].classList.contains("active")){
            closeAccordion(i)
            
        }
        else{
            resetAll(i)
        }
  
    })
}