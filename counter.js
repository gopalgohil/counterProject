let count=0;
let countLable=document.querySelector("#counter-value");
let add=document.querySelector("#increment-btn");
let reset=document.querySelector("#reset");
let sub=document.querySelector("#decrement-btn");

add.addEventListener("click",function(){
    count =count+1;
    countLable.innerHTML=count;
})
sub.addEventListener("click",function(){
    count =count-1;
    countLable.innerHTML=count;
})
reset.addEventListener("click",function(){
    count =0;
    countLable.innerHTML=count;
})
