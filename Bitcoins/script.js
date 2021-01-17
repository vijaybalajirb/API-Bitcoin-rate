async function rate(){
  let x = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  let data=await x.json()
  console.log(data.bpi)
  displayData(data.bpi);
  }
rate()

function displayData(data){
  document.getElementById("code").innerText=data.USD.code;

  document.getElementById("description").innerText=data.USD.description;

  document.getElementById("rate").innerText="$"+data.USD.rate;

  document.getElementById("rate_float").innerText="$"+data.USD.rate_float;

  document.getElementById("codee").innerText=data.EUR.code;

  document.getElementById("descriptione").innerText=data.EUR.description;

  document.getElementById("ratee").innerText="$"+data.EUR.rate;

  document.getElementById("rate_floate").innerText="$"+data.EUR.rate_float;

  document.getElementById("codeb").innerText=data.GBP.code;

  document.getElementById("descriptionb").innerText=data.GBP.description;

  document.getElementById("rateb").innerText="$"+data.GBP.rate;

  document.getElementById("rate_floatb").innerText="$"+data.GBP.rate_float;


}
