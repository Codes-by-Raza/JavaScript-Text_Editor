var para = document.getElementById("para")
var textNumber = document.getElementById("textNumber")


function paraHandler(type) {
    var counter = textNumber.innerHTML;
    if (type == "minus") {
        textNumber.innerHTML = --counter;
    } else {
        textNumber.innerHTML = ++counter;
    }
    para.style.fontSize = `${counter}px`
}

function colorChange(input) {
    console.log(input.value)
    para.style.color = input.value;
}

function boldPara() {
    para.style.fontWeight = "bold"
}

function ItalicPara() {
    para.style.fontStyle = "italic"

}
