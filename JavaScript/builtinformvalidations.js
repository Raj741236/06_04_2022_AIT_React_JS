const userName = document.getElementById('userName').value;
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

console.log(userName)
btn.addEventListener('click',function(e){
   e.preventDefault();
userName.addEventListener('keypress',function(e){
    console.log(e)
    if(userName == ''){
        document.getElementById('nameErr').innerHTML = "please enter the valid username";
        document.getElementById('nameErr').style.color = 'red';
    }
})
   
   
})