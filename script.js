// Variable
const error = document.getElementsByClassName("error");
const fname =  document.getElementById("fName"); 
const lname =  document.getElementById("lName"); 
const phone =  document.getElementById("phoneNo"); 
const email =  document.getElementById("mail"); 
const pass =  document.getElementById("pass");
const cpass =  document.getElementById("cpass");
const gender =  document.getElementsByClassName("gender");
// let temp = 0;


// function
let inner = function(idVal,val){
    document.getElementById(idVal).innerHTML=val;
}
let removeError = function(){
    for (let i =0;i<error.length;i++){
        error[i].innerHTML="";
    }
}
let success = function(){
    alert("your form is sucessfully submitted");
}
// success();

// Regex
let rPhone = /^[7-9]([0-9]){9}$/;
let rEmail = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-])+.([a-z]{2,10})(.[a-z]{2,8})?$/;
let rName = /^([a-zA-Z]{3,20})$/;
let rPass = /^([a-zA-Z0-9_@]){8,20}$/;




// Validate form
function validateForm(){
    let returnVal = true;
    removeError();

    // Checking first name
    fname.value=fname.value.trim();
    if(!(rName.test(fname.value))){
        inner("error--fName","**Invalid");
        returnVal= false;
    }
    
    if(fname.value==""){
        
        inner("error--fName","**Can't be empty");
        returnVal= false;
    }
    
    // Checking last name
    lname.value=lname.value.trim();
    if(!(rName.test(lname.value))){
        inner("error--lName","**Invalid");
        returnVal= false;
    }
    
    if(lname.value==""){
        
        inner("error--lName","**Can't be empty");
        returnVal= false;
    }


    // Checking mobile number
    phone.value=phone.value.trim();
    if(!(rPhone.test(phone.value))){
        inner("error--phone","**Invalid phone number");
        returnVal= false;
    }
    if(phone.value==""){

        inner("error--phone","**Can't be empty");
        returnVal= false;
    }
    
    
    // Checking email
    email.value=email.value.trim();
    if(!(rEmail.test(email.value))){
        inner("error--email","**Invalid email number");
        returnVal= false;
    }
    if(email.value==""){
        
        inner("error--email","**Can't be empty");
        returnVal= false;
    }

    
    // Checking pass error
    pass.value=pass.value.trim();
    if(!(rPass.test(pass.value))){
        inner("error--pass","**Invalid password");
        returnVal= false;
    }
    if(pass.value==""){
        inner("error--pass","**Can't be empty");
        returnVal= false;
    }
    
    // checking cpass error
    cpass.value=cpass.value.trim();
    if(pass.value!==cpass.value){
        inner("error--cpass","Doesn't match password");
        returnVal= false;
    }
    if(cpass.value==""){
        inner("error--cpass","**Can't be empty");
        returnVal= false;
    }
    
    // checking radio buttons
    
    for (let opt of gender){
        if(opt.checked == true){
            inner("error--gender","");
            break;   
        }
        else{
            returnVal= false;   
            inner("error--gender","**please select an option");
        }
    }
    
    
    // if(returnVal==true)
    //     success();

    return returnVal;
}