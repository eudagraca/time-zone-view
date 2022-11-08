function getTime() {
  let date = new Date();

  document.getElementById(
    "p_time"
  ).innerHTML = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()} \n ${date.getHours().toString().length == 2 ?  date.getHours(): '0'+date.getHours()} : ${date.getMinutes().toString().length == 2 ? date.getMinutes() : '0'+date.getMinutes() } : ${date.getSeconds().toString().length ==2? date.getSeconds() : '0'+ date.getSeconds()}`;

  if (date.getHours() > 10 && date.getHours() < 18) {
    document.body.style.backgroundColor = "#ffc05a";
    document.getElementById("img_time").src = "./assets/sun.png"
  } else if (date.getHours() > 5 && date.getHours() < 11) {
    document.body.style.backgroundColor = "#ffe1b0";
    document.getElementById("img_time").src = "./assets/sunrise.png"
  } else if (
    (date.getHours() >= 18 && date.getHours() <= 23) ||
    (date.getHours() >= 0 && date.getHours() < 5)
  ) {
    document.body.style.backgroundColor = "rgb(34, 33, 41)";
    document.getElementById("img_time").src = "./assets/half-moon.png"

  }
}

setInterval(getTime, 1000);

fetch("http://ip-api.com/json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("p_location").innerHTML = `${data.regionName}`;
    console.log(data);
  });
