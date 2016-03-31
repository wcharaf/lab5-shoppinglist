// Shopping List Excersize - LAB5
var total = 0
var pricelist = {
  name: ['milk','cheese','eggs','bread','sugar','salt',"banana","strawberry"],
  price: [5.30,3.2,4.3,2.5,3.6,10,4.85,1.99]
};
var shoplist = ["cheese","eggs","sugar"];
shoplist.forEach(function(x) {
  var locationindex= pricelist.name.indexOf(x);
  console.log(x +"...$"+pricelist.price[locationindex].toFixed(2));
  total += pricelist.price[locationindex];
});
console.log("TOTAL= $"+total.toFixed(2));

// figure it out excersize
var makeintarray = [];
function makeintfunction (min,max){
  var x = min;
  while (x<=max) {
    makeintarray.push(x);
    x++;
  }
  console.log(makeintarray);
};
makeintfunction (-2,5);
