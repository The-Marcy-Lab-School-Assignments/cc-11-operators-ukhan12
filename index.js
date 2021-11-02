("areBothSame()")//1
function areBothSame(num1, num2){
  return num1 == num2;
}

//2
function areBothEqual(num1, num2){
  return num1 === num2;
}

//3
function areAllFourEqual(num1, num2, num3, num4){
  return (num1 === num2 && num1 === num3 && num1 === num4);
      
}


//4
function areAllFourSame(num1, num2, num3, num4){
  return (num1 == num2 && num1 == num3 && num1 == num4);
}

//5
function areAllFourSameOrEqual(num1, num2, num3, num4){
  if(num1 === num2 && num1 === num3 && num1 === num4){
    return "equal";
  }else if(num1 == num2 && num1 == num3 && num1 == num4){
    return "same";
  }else
    return null;
}


console.log(areAllFourSameOrEqual(5, 5, 5, 2));