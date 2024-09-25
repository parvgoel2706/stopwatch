let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let child = document.querySelectorAll(".child");
start.addEventListener("click", starting);
pause.addEventListener("click",pausing);
reset.addEventListener("click",reseting);

let clrid;
function starting(){
    start.removeEventListener("click",starting);
    clrid = setInterval(() => {
      child[3].innerHTML = ((parseInt(child[3].innerHTML)+1).toString()).padStart(2,"0");
      if (child[3].innerHTML > 99) {
        child[3].innerHTML = 0;
        child[2].innerHTML =((parseInt(child[2].innerHTML)+1).toString()).padStart(2,"0"); 
        if(child[2].innerHTML > 59){
            child[2].innerHTML=0;
            child[1].innerHTML =((parseInt(child[1].innerHTML)+1).toString()).padStart(2,"0");
            if(child[1].innerHTML  > 60){
                child[1].innerHTML=0;
                child[0].innerHTML =((parseInt(child[0].innerHTML)+1).toString()).padStart(2,"0");
            }
        }
      }
    }, 10);
}

function pausing(){
    clearInterval(clrid);
    start.addEventListener("click", starting);
}

function reseting(){
    pausing();
    child.forEach((ele)=> {
        ele.innerHTML="00";
    })
}