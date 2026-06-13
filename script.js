//resets board after winner is declared
 function reserBoard(){
    cells.forEach(cell=>
    {
        cell.textContent=""
        cell.style.backgroundColor=""
    }
    )
    document.querySelector(".winner").textContent =""
    gameOver=false
 }
 // anounce the winner
 function announceWinner(symbol) {
  gameOver = true
  const winner = symbol === "X" ? "Player 1" : "Player 2"
  document.querySelector(".winner").textContent = `WINNER is ${winner}`
  setTimeout(reserBoard, 3000)
}

//check winner
 function checkWinner(){
    const allFilled = Array.from(cells).every(cell => cell.textContent !== "")

 const sq_1 = document.querySelector(".sq_1").textContent
 const sq_2 = document.querySelector(".sq_2").textContent
 const sq_3 = document.querySelector(".sq_3").textContent
 const sq_4 = document.querySelector(".sq_4").textContent
 const sq_5 = document.querySelector(".sq_5").textContent
 const sq_6 = document.querySelector(".sq_6").textContent
 const sq_7 = document.querySelector(".sq_7").textContent
 const sq_8 = document.querySelector(".sq_8").textContent
 const sq_9 = document.querySelector(".sq_9").textContent
 
 if(sq_1=== sq_2 && sq_2===sq_3 && sq_1 !=="" ){ 
    announceWinner(sq_1)
 }
 else if (sq_4=== sq_5 && sq_5===sq_6 && sq_4 !=="" ){
   announceWinner(sq_4)
 }
 else if (sq_7=== sq_8 && sq_8===sq_9 && sq_7 !=="" ){
  announceWinner(sq_7)
 }
 else if (sq_1=== sq_4 && sq_4===sq_7 && sq_7 !=="" ){
    announceWinner(sq_1)
 }
else if (sq_2=== sq_5 && sq_5===sq_8 && sq_8 !=="" ){
   announceWinner(sq_2)   
}
 else if (sq_3=== sq_6 && sq_6===sq_9 && sq_9 !=="" ){
   announceWinner(sq_3)   
}
else if (sq_1=== sq_5 && sq_5===sq_9 && sq_9 !=="" ){
    announceWinner(sq_1)
 }
else if (sq_3=== sq_5 && sq_5===sq_7 && sq_7 !=="" ){
  announceWinner(sq_3)
 }
 
 else if (allFilled && !gameOver) {
  document.querySelector(".winner").textContent = "It's a draw!"
  setTimeout(reserBoard, 3000)
}



}
 
//Draw on board ---------------------------
let currentPlayer = "X";
let gameOver = false
 const cells= document.querySelectorAll(".cell")
 cells.forEach(cell =>{
    cell.addEventListener("click", () => {
        if(gameOver) return
        if(cell.textContent===""){
          cell.textContent = currentPlayer
          if(currentPlayer ==="X"){
            cell.style.backgroundColor="#1591dc"
          }
          else if(currentPlayer ==="O"){
            cell.style.backgroundColor="#47ca68"
          }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
          checkWinner()
             } }) })
 //-----------------------------
 


 
 

