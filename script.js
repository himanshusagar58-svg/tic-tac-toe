//Winner logic
 function reserBoard(){
    cells.forEach(cell=>
    {
        cell.textContent=""
    }
    )
    document.querySelector(".winner").textContent =""
    gameOver=false
 }
 function checkWinner(){
 const sq_1 = document.querySelector(".sq_1").textContent
 const sq_2 = document.querySelector(".sq_2").textContent
 const sq_3 = document.querySelector(".sq_3").textContent
 const sq_4 = document.querySelector(".sq_4").textContent
 const sq_5 = document.querySelector(".sq_5").textContent
 const sq_6 = document.querySelector(".sq_6").textContent
 const sq_7 = document.querySelector(".sq_7").textContent
 const sq_8 = document.querySelector(".sq_8").textContent
 const sq_9 = document.querySelector(".sq_9").textContent
 
 if(sq_1=== sq_2 && sq_2===sq_3 && sq_1 !=="" ){ gameOver =true
    if(sq_1=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_1=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }
    setTimeout(reserBoard, 3000)
 }
 else if (sq_4=== sq_5 && sq_5===sq_6 && sq_4 !=="" ){gameOver =true
    if(sq_4=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_4=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
 else if (sq_7=== sq_8 && sq_8===sq_9 && sq_7 !=="" ){gameOver =true
    if(sq_7=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_7=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
 else if (sq_1=== sq_4 && sq_4===sq_7 && sq_7 !=="" ){gameOver =true
    if(sq_7=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_7=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
else if (sq_2=== sq_5 && sq_5===sq_8 && sq_8 !=="" ){gameOver =true
    if(sq_8=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_8=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
 else if (sq_3=== sq_6 && sq_6===sq_9 && sq_9 !=="" ){gameOver =true
    if(sq_9=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_9=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
else if (sq_1=== sq_5 && sq_5===sq_9 && sq_9 !=="" ){gameOver =true
    if(sq_9=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_9=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
 }
else if (sq_3=== sq_5 && sq_5===sq_7 && sq_7 !=="" ){gameOver =true
    if(sq_7=== "X" ){
    document.querySelector(".winner").textContent = "WINNER is Player 1"
    }
    else if(sq_7=== "O"){
    document.querySelector(".winner").textContent = "WINNER is Player 2" 
    }setTimeout(reserBoard, 3000)
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

        currentPlayer = currentPlayer === "X" ? "O" : "X";
          checkWinner()
             } }) })
 //-----------------------------
 


 
 

