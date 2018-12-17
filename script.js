function  outputmessage() {
    var firstNumber=parseInt(document.getElementById("firstvalue").value);
    var secondNumber=parseInt(document.getElementById("secondvalue").value);
    var thirdNumber=parseInt(document.getElementById("thirdvalue").value);
    var text;
    var array =[firstNumber,secondNumber,thirdNumber];
    //if for intering positive value with 3sides

    if(firstNumber <=0 || secondNumber<=0|| thirdNumber<0){
        text="A triangle must have 3 sides with positiv definate lenght!";
    }
    if(
        (firstNumber + secondNumber <= thirdNumber &&
        secondNumber + firstNumber<=thirdNumber)||
        (firstNumber + thirdNumber <=secondNumber &&
            thirdNumber + firstNumber)||
            (secondNumber + thirdNumber<=firstNumber && thirdNumber + secondNumber <= firstNumber)
            ){
                
                text="Not a triangle";
            }
//if triangle is equilateral
else if(
    firstNumber ===secondNumber &&
    secondNumber===thirdNumber &&
    thirdNumber===firstNumber
){
    text = " equilateral.";
}
//if triangle is isosceles
else if (
    firstNumber===secondNumber ||
    secondNumber===thirdNumber ||
    thirdNumber===firstNumber
) {
    text="isosceles.";
}
//if triangle is scalene
else if(
    firstNumber!==secondNumber &&
    firstNumber!==thirdNumber &&
    secondNumber!==thirdNumber
) {
    text="scalene.";
}
    else {
        text="error";
    }
    document.getElementById("demo").innerHTML = text;
}