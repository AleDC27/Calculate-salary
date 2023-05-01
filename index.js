let hoursField=document.getElementById('hours');
let moneyField = document.getElementById("money");
let formField = document.getElementById("form");


/* hoursField.addEventListener("change",()=>{
    let hours = hoursField.value;
    console.log("Money per Hour:", hours);
})

moneyField.addEventListener("change", function() {
    let money = moneyField.value;
    console.log("Money per Hour:", money);
  });
 */
formField.addEventListener("submit",(e)=>{
    e.preventDefault();
    let sum=+moneyField.value*(+hoursField.value);
    document.getElementById("total").innerHTML=sum+" te extraño amiguis"
})

