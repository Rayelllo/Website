
var colourID = 3;
var colours = ["lightyellow", "pink", "lightblue", "lightgreen", "blue", "brown", "orange"];

function printColours(){

    var coloursString = "";

    for(i = 0; i < colours.length; i++){
        var onclick = "onclick=\"changeColour(" + i + ")\""
        coloursString += "<a " + onclick + " href=\"#\">" + colours[i] + "</a><br>";
    }

    changeText(coloursString); 
}

function changeText(text){
    document.getElementsByTagName("p")[0].innerHTML = text;
}

function nextColour(){
    if(colourID == 0){
        changeColour(1);
    } else if (colourID == 1) {
        changeColour(2);
    } else if (colourID == 2){
        changeColour(3);
    } else {
        changeColour(0);
    }
}

function changeColour(id) {
    document.getElementsByTagName("body")[0].style.backgroundColor = colours[id];
    colourID = id;
    changeText("colour id: " + colourID);
}

function randomColour(){
    var randomNumber = Math.floor(Math.random() * colours.length);
    changeColour(randomNumber)
}

function chooseText(){
    var chosenText = document.getElementById("textbox").value;
    changeText(chosenText);
}
