let counter = 0;
//player 1 is X  and player 2 is O
let stopcouter = 0;

function myfunc_3() {
    if (counter == 0) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_4() {
    if (counter == 0) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_5() {
    if (counter == 0) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;

    }
}
function myfunc_6() {
    if (counter == 0) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_7() {
    if (counter == 0) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_8() {
    if (counter == 0) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_9() {
    if (counter == 0) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_10() {
    if (counter == 0) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_11() {
    if (counter == 0) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        counter = 1;
        showStatus();
        stopcouter++;
    } else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        counter = 0;
        showStatus();
        stopcouter++;
    }
}
function myfunc_2() {
    location.reload();
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
}
function showStatus() {
    if (counter == 0) {
        document.getElementById("print").innerHTML = "Player X Turn";
    } else {
        document.getElementById("print").innerHTML = "Player 0 Turn";
    }
}

function winning() {
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields
    if (
        (b1 == "x" || b1 == "X") &&
        (b2 == "x" || b2 == "X") &&
        (b3 == "x" || b3 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        // window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b1 == "x" || b1 == "X") &&
        (b4 == "x" || b4 == "X") &&
        (b7 == "x" || b7 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        // window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b7 == "x" || b7 == "X") &&
        (b8 == "x" || b8 == "X") &&
        (b9 == "x" || b9 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        // window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b3 == "x" || b3 == "X") &&
        (b6 == "x" || b6 == "X") &&
        (b9 == "x" || b9 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        // window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b1 == "x" || b1 == "X") &&
        (b5 == "x" || b5 == "X") &&
        (b9 == "x" || b9 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        // window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b3 == "x" || b3 == "X") &&
        (b5 == "x" || b5 == "X") &&
        (b7 == "x" || b7 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        //  window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b2 == "x" || b2 == "X") &&
        (b5 == "x" || b5 == "X") &&
        (b8 == "x" || b8 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        //window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b4 == "x" || b4 == "X") &&
        (b5 == "x" || b5 == "X") &&
        (b6 == "x" || b6 == "X")
    ) {
        document.getElementById("print").innerHTML = "Player X won";
        //  window.alert("Player X won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b1 == "0" || b1 == "0") &&
        (b2 == "0" || b2 == "0") &&
        (b3 == "0" || b3 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";
        // window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b1 == "0" || b1 == "0") &&
        (b4 == "0" || b4 == "0") &&
        (b7 == "0" || b7 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";
        //window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b7 == "0" || b7 == "0") &&
        (b8 == "0" || b8 == "0") &&
        (b9 == "0" || b9 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";
        // window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b3 == "0" || b3 == "0") &&
        (b6 == "0" || b6 == "0") &&
        (b9 == "0" || b9 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";
        // window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b1 == "0" || b1 == "0") &&
        (b5 == "0" || b5 == "0") &&
        (b9 == "0" || b9 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";

        //window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b3 == "0" || b3 == "0") &&
        (b5 == "0" || b5 == "0") &&
        (b7 == "0" || b7 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";
        //  window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b2 == "0" || b2 == "0") &&
        (b5 == "0" || b5 == "0") &&
        (b8 == "0" || b8 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";

        // window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (
        (b4 == "0" || b4 == "0") &&
        (b5 == "0" || b5 == "0") &&
        (b6 == "0" || b6 == "0")
    ) {
        document.getElementById("print").innerHTML = "Player 0 won";

        // window.alert("Player 0 won");
        setTimeout(() => location.reload(), 800);
    } else if (stopcouter == 9) {
        document.getElementById("print").innerHTML = "Match Tie";
        window.alert("Match Tie");

    }
}
