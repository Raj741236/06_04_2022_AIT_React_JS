// let name= "Iphone";

// let model = "13";

// let description =  "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone."

// let price = 100000;

// const details = function(){
//     console.log(this)
//     let detail=`<h1>${name} ${model}</h1>
//     <p>${description}</p>
//     <button>Add to cart</button>
// `
// document.body.innerHTML = detail;
// }

// const gstCalc = function(gstPercent){
//     return price+((price*gstPercent)/100);
// }
// const productResult = details();

//Object Literal

// let product = {
//     name: "I Phone",
//     model: 13,
//     description:
//       "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//     price: 100000,
//     details: function(){
//        return `<h1>${this.name} ${this.model}</h1>
//               <p>${this.description}</p>
//               <button>Add to cart</button>
//        `
//     },
//     gstCalc : function(gstPercent){
//       return this.price+((this.price*gstPercent)/100);
//     }
//   };
  
//   console.log(product.name);
//   console.log(product.details());
  
//   console.log(product.gstCalc(10));


//Object constructor

// function Cart() {
//     this.items = [
//       {
//         name: "I Phone",
//         model: 13,
//         description:
//           "The iPhone 13 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//         price: 100000,
//       },
//       {
//           name: "I Phone",
//           model: 12,
//           description:
//             "The iPhone 12 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//           price: 80000,
//         },
//         {
//           name: "I Phone",
//           model: 11,
//           description:
//             "The iPhone 11 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.",
//           price: 50000,
//         },
//     ];

//     this.allProducts = function(){
//         let tableHtml = `<table>
//                          <tr>
//                             <th>SL NO</th>
//                             <th>Name</th>
//                          </tr>
//                          <tr>
//                          <td>${1}</td>
//                          <td>${this.items[0].name}</td>
//                          </tr>
//                          <tr>
//                          <td>${2}</td>
//                          <td>${this.items[1].name}</td>
//                          </tr>
//                          <tr>
//                          <td>${3}</td>
//                          <td>${this.items[2].name}</td>
//                          </tr>
//                         </table>
//                          `
//             document.body.innerHTML = tableHtml
//     }
//   }
//   let cartObj = new Cart();
// //   cartObj.allProducts();
//   console.log(cartObj);
//   console.log(cartObj.productSeller)
// //   cartObj.allProductsusingLoop()


//   Cart.prototype.productSeller = "cloudtail";
//   Cart.prototype.allProductsusingLoop = function(){
//       let tableHtml = `<table>
//                          <tr>
//                            <th>Sl NO</th>
//                            <th>Name</th>
//                          </tr>
//                        `
//         for(let i = 0;i < this.items.length;i++){
//             tableHtml += `<tr>
//                             <td>${i}</td>
//                              <td>${this.items[i].name}</td>
//                           </tr>`
//         }
//         tableHtml += `</table>`
//         document.body.innerHTML = tableHtml;
//   }

// console.log(cartObj.productSeller)
// cartObj.allProductsusingLoop()


//ES6 OOJS

class Product{
    name;
    model;
    description;
    price;
    constructor(n,m,d,p){
        this.name = n;
        this.model = m;
        this.description = d;
        this.price = p;
    }
   details(){
      let res =  `<h1>${this.name} ${this.model}</h1>
              <p>${this.description}</p>
              <button>Add to cart</button>
       `
       document.body.innerHTML = res;
    };
    gstCalc(gstPercent=10){
      console.log(this.price+((this.price*gstPercent)/100));
    }
}
let des =  "The iPhone 11 models come in 5.4 and 6.1-inch sizes, with the 5.4-inch iPhone 13 Pro positioned as Apple's smallest iPhone.";
const pObj = new Product("Iphone",13,des,10000);
console.log(pObj)
pObj.details();
pObj.gstCalc(18);
pObj.gstCalc();


const pObj1 = new Product("Iphone",11,des,1000);
console.log(pObj1.seller);


class childProduct extends Product{
   constructor(n,m,d,p,s){
     super(n,m,d,p)
   this.seller = s;
   }
   detai(){
    let res =  `<h1>${this.name} ${this.model}</h1>
            <p>${this.description}</p>
            <button>Add to cart</button>
     `
     document.body.innerHTML = res;
  };
}

const cPro = new childProduct("oneplus",10,"oneplus description",50000,"cloudtail");
console.log(cPro);

cPro.detai();