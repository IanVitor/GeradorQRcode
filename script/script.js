const img = document.querySelector("#img")
const btn = document.querySelector("#btn")
const input = document.querySelector("#link-input")
const imgContainer = document.querySelector(".img-container")

function gerarQRcode(){
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${input.value}`
  imgContainer.classList.remove("hide")
}

input.addEventListener("keyup", (e) => {
  if(e.code === "Enter"){
    gerarQRcode()
  }
})