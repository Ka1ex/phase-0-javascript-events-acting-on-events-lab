// Your code here
const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "#FF69B4"

dodger.style.bottom = "0px"

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }

    if (event.key === "ArrowRight"){
      moveDodgerRight()
    }
  })

function moveDodgerLeft(event){
  
    const leftNumber =  dodger.style.left.replace("px", "")
    const left = parseInt(leftNumber, 10)

    if (left > 0 ){
      dodger.style.left = `${left - 1}px`
      console.log(dodger.style.left)
    }
}
function moveDodgerRight(event){
  
  const rightNumber =  dodger.style.left.replace("px", "")
  const right = parseInt(rightNumber, 10)

  if (right > 0 && right < 360 ){
    dodger.style.left = `${right + 1}px`
    console.log(dodger.style.left)
  }
}