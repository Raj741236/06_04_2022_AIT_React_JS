const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandParent.addEventListener('click',function(e){
   
    console.log('grandparent clicked');
    e.stopPropagation();
},false);



parent.addEventListener('click',function(){
    console.log('parent clicked');
},false);

child.addEventListener('click',function(e){
    console.log('child clicked');
    e.stopPropagation();
},false);



document.addEventListener('click',function(){
    console.log('document called')
},false)