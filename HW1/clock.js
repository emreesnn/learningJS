let myNameDOM = document.querySelector("#myName");

let myName = prompt("Adınızı Giriniz : ", "Adınız");

myNameDOM.innerHTML = myName;

function tarihSaat() {
  var date = new Date().toLocaleString();
  document.getElementById("myClock").innerHTML = date;
}
setInterval(tarihSaat, 1000);
