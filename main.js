const email=document.querySelector('.email');
const password=document.querySelector('.password');
const confirmPassword=document.querySelector('.confirmPassword');
const form=document.querySelector('.form');


//3 function show error
const showError=(input,message)=>{
    let parentElement=input.parentElement;
    parentElement.classList='form-control error';
    let small=parentElement.querySelector('small');
    
    small.innerText=message;
}

//4 function show success
const showSuccess=(input)=>{
    let parentElement=input.parentElement;
    parentElement.classList='form-control success';
}

//2 check empty
const checkEmpty=(elements)=>{
    elements.forEach(element => {
        if(element.value === ''){
            showError(element,'Input required');
        }else{
            showSuccess(element);
        }
    });
}
//5 check email
const checkEmail=(email)=>{
    let reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email,'Invalid Email')
    }
}

//6 check password
const checkPasswordLength=(input,min,max)=>{
    if(input.value.length < min){
        showError(input,`Password at least ${min} charactor`)
    }else if(input.value.length > max){
        showError(input,`Password maximum charactor is ${max}`)
    }else{
        showSuccess(input)
    }
}



//1
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkEmpty([email,password,confirmPassword]);
    checkEmail(email);
    checkPasswordLength(password,8,25);
    checkPasswordLength(confirmPassword,8,25);
})