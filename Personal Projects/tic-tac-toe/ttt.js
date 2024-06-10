//Checking for win
function checkWin() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("box1");
    b2 = document.getElementById("box2");
    b3 = document.getElementById("box3");
    b4 = document.getElementById("box4");
    b5 = document.getElementById("box5");
    b6 = document.getElementById("box6");
    b7 = document.getElementById("box7");
    b8 = document.getElementById("box8");
    b9 = document.getElementById("box9");

    var b1val, b2val, b3val, b4val, b5val, b6val, b7val, b8val, b9val;
    b1val = b1.value;
    b2val = b2.value;
    b3val = b3.value;
    b4val = b4.value;
    b5val = b5.value;
    b6val = b6.value;
    b7val = b7.value;
    b8val = b8.value;
    b9val = b9.value;

    //Check for wins
    if (b1val == "X" && b2val == "X" && b3val == "X") {
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b1.style.color = "red";
        b2.style.color = "red";
        b3.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b4val == "X" && b5val == "X" && b6val == "X") {
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b4.style.color = "red";
        b5.style.color = "red";
        b6.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b7val == "X" && b8val == "X" && b9 == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b7.style.color = "red";
        b8.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b1val == "X" && b4val == "X" && b7val == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b1.style.color = "red";
        b4.style.color = "red";
        b7.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b2val == "X" && b5val == "X" && b8val == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b2.style.color = "red";
        b5.style.color = "red";
        b8.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b3val == "X" && b6val == "X" && b9val == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b3.style.color = "red";
        b6.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b1val == "X" && b5val == "X" && b9val == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b1.style.color = "red";
        b5.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b3val == "X" && b5val == "X" && b7val == "X"){
        document.getElementById("resultText").innerHTML = "Player X Wins!";
        b3.style.color = "red";
        b5.style.color = "red";
        b7.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }else if (b1val == "O" && b2val == "O" && b3 == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b1.style.color = "red";
        b2.style.color = "red";
        b3.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b4val == "O" && b5val == "O" && b6val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b4.style.color = "red";
        b5.style.color = "red";
        b6.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b7val == "O" && b8val == "O" && b9val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b7.style.color = "red";
        b8.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b1val == "O" && b4val == "O" && b7val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b1.style.color = "red";
        b4.style.color = "red";
        b7.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b2val == "O" && b5val == "O" && b8val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b2.style.color = "red";
        b5.style.color = "red";
        b8.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b3val == "O" && b6val == "O" && b9val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b3.style.color = "red";
        b6.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b1val == "O" && b5val == "O" && b9val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b1.style.color = "red";
        b5.style.color = "red";
        b9.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    } else if (b3val == "O" && b5val == "O" && b7val == "O") {
        document.getElementById("resultText").innerHTML = "Player O Wins!";
        b3.style.color = "red";
        b5.style.color = "red";
        b7.style.color = "red";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        return;
    }

    //Check for draw
    if (b1val!= "" && b2val!= "" && b3val!= "" && b4val!= "" && b5val!= "" && b6val!= "" && b7val!= "" && b8val!= "" && b9val!= "") {
        document.getElementById("resultText").innerHTML = "Draw!";
        return;
    }
}

//Reload / Reset Board
function reload() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("box1");
    b2 = document.getElementById("box2");
    b3 = document.getElementById("box3");
    b4 = document.getElementById("box4");
    b5 = document.getElementById("box5");
    b6 = document.getElementById("box6");
    b7 = document.getElementById("box7");
    b8 = document.getElementById("box8");
    b9 = document.getElementById("box9");
  
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("box3").value = "";
    document.getElementById("box4").value = "";
    document.getElementById("box5").value = "";
    document.getElementById("box6").value = "";
    document.getElementById("box7").value = "";
    document.getElementById("box8").value = "";
    document.getElementById("box9").value = "";
  
    document.getElementById("box1").disabled = false;
    document.getElementById("box2").disabled = false;
    document.getElementById("box3").disabled = false;
    document.getElementById("box4").disabled = false;
    document.getElementById("box5").disabled = false;
    document.getElementById("box6").disabled = false;
    document.getElementById("box7").disabled = false;
    document.getElementById("box8").disabled = false;
    document.getElementById("box9").disabled = false;
  
    b1.style.color = "black";
    b2.style.color = "black";
    b3.style.color = "black";
    b4.style.color = "black";
    b5.style.color = "black";
    b6.style.color = "black";
    b7.style.color = "black";
    b8.style.color = "black";
    b9.style.color = "black";
}

//Check turn, and change value accordingly (have function for each button)
var turn = 1;

function butt1() {
    if (turn == 1) {
        document.getElementById("box1").value = "X";
        turn = 2;
        document.getElementById("box1").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box1").value = "O";
        turn = 1;
        document.getElementById("box1").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt2() {
    if (turn == 1) {
        document.getElementById("box2").value = "X";
        turn = 2;
        document.getElementById("box2").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box2").value = "O";
        turn = 1;
        document.getElementById("box2").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt3() {
    if (turn == 1) {
        document.getElementById("box3").value = "X";
        turn = 2;
        document.getElementById("box3").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box3").value = "O";
        turn = 1;
        document.getElementById("box3").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt4() {
    if (turn == 1) {
        document.getElementById("box4").value = "X";
        turn = 2;
        document.getElementById("box4").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box4").value = "O";
        turn = 1;
        document.getElementById("box4").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt5() {
    if (turn == 1) {
        document.getElementById("box5").value = "X";
        turn = 2;
        document.getElementById("box5").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box5").value = "O";
        turn = 1;
        document.getElementById("box5").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt6() {
    if (turn == 1) {
        document.getElementById("box6").value = "X";
        turn = 2;
        document.getElementById("box6").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box6").value = "O";
        turn = 1;
        document.getElementById("box6").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt7() {
    if (turn == 1) {
        document.getElementById("box7").value = "X";
        turn = 2;
        document.getElementById("box7").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box7").value = "O";
        turn = 1;
        document.getElementById("box7").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt8() {
    if (turn == 1) {
        document.getElementById("box8").value = "X";
        turn = 2;
        document.getElementById("box8").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box8").value = "O";
        turn = 1;
        document.getElementById("box8").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}

function butt9() {
    if (turn == 1) {
        document.getElementById("box9").value = "X";
        turn = 2;
        document.getElementById("box9").disabled = true;
        document.getElementById("turnText").innerHTML = "Player O Turn";
    } else {
        document.getElementById("box9").value = "O";
        turn = 1;
        document.getElementById("box9").disabled = true;
        document.getElementById("turnText").innerHTML = "Player X Turn";
    }
}
