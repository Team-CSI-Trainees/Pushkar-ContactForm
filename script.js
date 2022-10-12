// Variable
const error = document.getElementsByClassName("error");
const fname =  document.getElementById("fName"); 
const lname =  document.getElementById("lName"); 
const phone =  document.getElementById("phoneNo"); 
const email =  document.getElementById("mail"); 
const pass =  document.getElementById("pass");
const cpass =  document.getElementById("cpass");
const branch =  document.getElementById("branch");
const gender =  document.getElementsByClassName("gender");
const eBox = document.getElementsByClassName("content");
var check = 0;
// let temp = 0;


// function
let inner = function(idVal,val){
    document.getElementById(idVal).innerHTML=val;
}
let removeError = function(){
    for (let i =0;i<error.length;i++){
        error[i].innerHTML="";

    }
    for(let j=0;j<eBox.length;j++){
        eBox[j].style.border= 'none';
        eBox[j].style.borderBottom = '3px var(--color-body) solid';
    }
}
let success = function(){
    alert("your form is sucessfully submitted");
}

const display = function(returnVal){
    if(returnVal==true){
        removeError();
        
        console.log('First Name:',fname.value);
        console.log('Last Name:',lname.value);
        console.log('Phone Number:',phone.value);
        console.log('Email:',email.value);
        console.log('Gender:',check);
        // console.log('Branch:',branch.value);
        

        success();
    }
    }
// success();

// Regex
let rPhone = /^[7-9]([0-9]){9}$/;
let rEmail = /^([a-zA-Z0-9._-]+)([@]{1})([a-zA-Z0-9-])+.([a-z]{2,10})(.[a-z]{2,8})?$/;
let rName = /^([a-zA-Z]{3,20})$/;
let rPass = /^([a-zA-Z0-9_@#]){8,20}$/;




let returnVal = true;
// Validate form
function validateForm(){
    removeError();
    returnVal = true;
    
    // checking radio buttons
    for (let opt of gender){
        if(opt.checked == true){
            check = opt.value;
            inner("error--gender","");
            returnVal=true;
            break;   
        }
        else{
            returnVal= false;   
            inner("error--gender","**please select an option");
        }
    }
    
    // Checking first name
    fname.value=fname.value.trim();
    if(!(rName.test(fname.value))){
        inner("error--fName","**Invalid");
        fname.style.border='1px solid white';
        returnVal= false;   
    }
    
    if(fname.value==""){
        
        fname.style.border='1px solid white';
        inner("error--fName","**Can't be empty");
        returnVal= false;
    }
    
    // Checking last name
    lname.value=lname.value.trim();
    if(!(rName.test(lname.value))){
        lname.style.border='1px solid white';
        inner("error--lName","**Invalid");
        returnVal= false;
    }
    
    if(lname.value==""){
        lname.style.border='1px solid white';
        
        inner("error--lName","**Can't be empty");
        returnVal= false;
    }

    
    
    // Checking mobile number
    phone.value=phone.value.trim();
    if(!(rPhone.test(phone.value))){
        phone.style.border='1px solid white';
        inner("error--phone","**Invalid phone number");
        returnVal= false;
    }
    if(phone.value==""){
        phone.style.border='1px solid white';
        inner("error--phone","**Can't be empty");
        returnVal= false;
    }
    
    
    
    // Checking email
    email.value=email.value.trim();
    if(!(rEmail.test(email.value))){
        email.style.border='1px solid white';
        inner("error--email","**Invalid email number");
        returnVal= false;
    }
    if(email.value==""){
        email.style.border='1px solid white';
        inner("error--email","**Can't be empty");
        returnVal= false;
    }
    
    
    // Checking pass error
    pass.value=pass.value.trim();
    if(!(rPass.test(pass.value))){
        pass.style.border='1px solid white';
        inner("error--pass","**Min 8 letters, should contain special character <br/> and 1 uppercase letter");
        returnVal= false;
    }
    if(pass.value==""){
        pass.style.border='1px solid white';
        inner("error--pass","**Can't be empty");
        returnVal= false;
    }
    
    
    // checking cpass error
    cpass.value=cpass.value.trim();
    if(pass.value!==cpass.value){
        cpass.style.border='1px solid white';
        inner("error--cpass","Doesn't match password");
        returnVal= false;
    }
    if(cpass.value==""){
        cpass.style.border='1px solid white';
        inner("error--cpass","**Can't be empty");
        returnVal= false;
    }
    

    display(returnVal);
        
    return returnVal;
}
