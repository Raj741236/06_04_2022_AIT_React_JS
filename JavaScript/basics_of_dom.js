const heading = document.getElementById('heading');
console.log(heading);
heading.style.backgroundColor = "blue";

const listItems = document.getElementsByClassName('list');
console.log(listItems);

listItems[0].style.backgroundColor = "green";

// for(let i = 0; i <= listItems.length;i++){
//     listItems[i].style.backgroundColor = "red";
// }

const demo = document.getElementById('demo');
demo.innerHTML = "I am inner text";

console.dir(demo);

const tagItems = document.getElementsByTagName('li');
console.log(tagItems);

const logo = document.querySelectorAll('.logo');
console.log(logo);