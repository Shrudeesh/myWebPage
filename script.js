function validate(){
    let text=document.getElementById("inputEmail4").value
    reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(reg.test(text)){
    document.getElementById("warning").innerHTML="success"
    document.getElementById("warning").style.color="green"
}else{
    document.getElementById("warning").innerHTML="failed"
    document.getElementById("warning").style.color="red"
   }
}
function validateMob(){
    let text=document.getElementById("Mobile4").value
 red=/^[0-9]{10}$/
    if(red.test(text)){
    document.getElementById("warning-Mob").innerHTML="success"
    document.getElementById("warning-Mob").style.color="green"
}else{
    document.getElementById("warning-Mob").innerHTML="failed"
    document.getElementById("warning-Mob").style.color="red"
   }
}function validateName(){
    let text=document.getElementById("Name").value
 red=/^[a-zA-Z]+$/
    if(red.test(text)){
    document.getElementById("warning-Name").innerHTML="success"
    document.getElementById("warning-Name").style.color="green"
}else{
    document.getElementById("warning-Name").innerHTML="failed"
    document.getElementById("warning-Name").style.color="red"
   }
}
const learnRegex=()=>{
     validate();
     validateMob();
     validateName();

}

