const btns = document.querySelectorAll(".btn");
const body = document.body;
 

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    change = btn.value;
    changeBackground(change);
  });
});

function changeBackground(change) {
  body.className = "";

  switch (change) {
    case "CAIRO":
      body.classList.add("cairo");
      break;
    case "LONDON":
      body.classList.add("london");
      break;
    case "PARIS":
      body.classList.add("paris");
      break;
    case "ROMA":
      body.classList.add("roma");
      break;
    case "BERLIN":
      body.classList.add("berlin");
      break;
    case "MADRID":
      body.classList.add("madrid");
      break;
    default:
      break;
  }
}