function outputmessage() {
    var firstNumber=parseInt(document.getElementById("firstvalue").value);
    var secondNumber=parseInt(document.getElementById("secondvalue").value);
    var thirdNumber=parseInt(document.getElementById("thirdvalue").value);
    var tex;
    if(firstNumber <=0 || secondNumber<=0|| thirdNumber<0){
        text="A triangle must have 3 sides with positiv definate lenght!";
    }
    else if(firstNumber + secondNumber <= thirdNumber &&
        secondNumber + firstNumber<=thirdNumber)||
        (firstNumber + thirdNumber <=secondNumber &&
            thirdNumber + firstNumber)||
            (secondNumber + thirdNumber && thirdNumber + secondNumber <= firstNumber){
                
                text="Not a triangle";
            }

}
//if triangle is equilateral
else if(
    firstNnumber ===secondNumber &&
    secondNumber===thirdNumber &&
    thirdNumber===firstNumber
){
    text = "The triangle is equilateral.";
}
//if triangle is isosceles
else if (
    firstNumber===secondNumber ||
    secondNumber===thirdNumber ||
    thirdNumber===firstNumber
) {
    text="The triangle is isosceles.";
}
//if triangle is scalene
else if(
    firstNumber!==secondNumber &&
    firstNumber!==thirdNumber &&
    secondNumber!==thirdNumber
) {
    text="Triangle is scalene.";
    else {
        text="error";
    }
    document.getElementById("demo")
}