document.addEventListener("DOMContentLoaded", function () {
    let id_tip = document.querySelector("#id_tip");
    let text_tip = document.querySelector("#text_tip");
    let btn = document.querySelector("#btn");
    getTip()
    btn.addEventListener("click", function(){
        getTip();
    })
  async function getTip() {
    let response = await fetch(	"https://api.adviceslip.com/advice");
    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      console.log(json.slip.advice);
      let tip = {
          id: json.slip.id,
          text: json.slip.advice
      }
      pintarTip(tip);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  


  function pintarTip(tip){
    id_tip.textContent = `Advice # ${tip.id}`;
    text_tip.textContent = "“"+tip.text+"”";
  }
});
