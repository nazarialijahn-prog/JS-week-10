/* first task */
const calculateTip = (bill, percent) => bill * percent / 100;
console.log(calculateTip(946, 10));
console.log(calculateTip(1000, 20));
console.log(calculateTip(1500, 15));

/* second task */
function getDeliveryFee(total, city){
  if(city === "Herat"){
    return 100;
  }else if (city === "Kubal"){
    return 150;
  }else if(city === "Mazari"){
    return 200;
  }else{
    return 230;
  }
}
console.log(getDeliveryFee(2000, "Herat"));
console.log(getDeliveryFee(2500, "Kubal"));
console.log(getDeliveryFee(3000, "Mazar"));
