// const validateForm = function(e){
//   e.preventDefault();
//   let userName = document.getElementById('userName').value;
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;

//   if(userName == ''){
//       document.getElementById('nameErr').innerHTML = "UserName cannot be Empty";
//       document.getElementById('nameErr').classList.add('invalid');
//   }else if(email==''){
//     document.getElementById('emailerr').innerHTML = "Email cannot be Empty";
//     document.getElementById('emailerr').classList.add('invalid');
//   }else if(password==''){
//     document.getElementById('pswdErr').innerHTML = "Password cannot be Empty";
//     document.getElementById('pswdErr').classList.add('invalid');
//   }else{
//     document.getElementById('nameErr').style.display = 'none';
//     document.getElementById('emailerr').style.display = 'none';
//     document.getElementById('pswdErr').style.display = 'none';
//     document.getElementById('form1').submit();
//   }
// }



// const loginForm = document.getElementById('form1').addEventListener('submit',validateForm)

//Field Validations

const validateInput = function(e){
    console.dir(e.target);
    if(e.target.id == 'userName'&& e.target.value == ''){
        console.log('Hi')
    if(e.target.value == ''){
        document.getElementById('nameErr').innerHTML = 'UserName cannot  be empty';
    
 
    }else{
        // document.getElementById('nameErr').classList.add('valid');

    }

}

}

document.getElementById('userName').addEventListener('blur',validateInput);
document.getElementById('email').addEventListener('blur',validateInput);