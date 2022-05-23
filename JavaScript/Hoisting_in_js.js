

var a= 10;
console.log(a);
function gstCalculation(amount,gst){
  var result = amount + ((amount/100)*gst); 
  return result;
}

var finalGst = gstCalculation(10000,18)


