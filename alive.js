/*const name = document.querySelector("#name");
const no = document.querySelector("#no");
const Onyi = document.querySelector("#Onyi");
*///const Rotich = document.querySelector("#Rotich");
//const submitBtn = document.querySelector("#submitBtn");
let running = true;
let num = 0;
let names;
let reg;
let btn = document.querySelector(".submit");
let myLabel;
let Onyii= document.querySelector("#oo");
let Otieno= document.querySelector("#ot");

btn.addEventListener("click", display);

function display(){
    running = true;
    let s =document.querySelector(".s");
    //let ctx = s.getContext("2d");
    s.style.opacity= 1;
    reg = document.querySelector(".b").value;
    names = document.querySelector(".a").value;
    myLabel= document.querySelector("#myLabel");

    if(Onyii.checked){
        //console.log(true);
        myLabel.innerHTML= `${names} ${reg} has voted for Onyii`;
        running = false;
        num +=1;
        console.log(num);


    }
    else if(Otieno.checked){
        console.log(false);
        myLabel.innerHTML= `${names} ${reg} has voted for Otieno`;
        running=false;
    }
    else{
        myLabel.innerHTML= `${names} ${reg} Please vote`;
        
    }


    


}

