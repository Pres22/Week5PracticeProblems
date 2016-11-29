// Returns the bitwise AND of two numbers.
function bitwiseAnd(x, y)
{
  return x & y;
}

// Returns the bitwise OR of two numbers.
function bitwiseOr(x, y)
{
  return x | y;
}

// Returns the bitwise XOR of the two numbers
function bitwiseXor(x, y)
{
  return x ^ y;
}

// Returns the bitwise left shift of two numbers.
function bitwiseLeftShift(x, y)
{
  return x << y;
}

// Returns the bitwise right shift of two numbers.
function bitwiseRightShift(x, y)
{
  return x >> y;
}

function removeSubStr(text, subStr)
{
  return text.split(subStr).join("");
}

function awesomeRepeat()
{
  return "<br>I am awesome".repeat(repeat)
}

function palindrome()
{
  
}  

function sort(sortNum1, sortNum2, sortNum3)
{
  var sortTemp = 0;
  if (sortNum1 > sortNum2)
  {
    var sortTemp = sortNum1
    var sortNum1 = sortNum2
    var sortNum2 = sortTemp
  }
  else if (sortNum2 > sortNum3)
  {
    var sortTemp = sortNum2
    var sortNum2 = sortNum3
    var sortNum3 = sortTemp
  }

  return "<br>" + sortNum1 + ", " + sortNum2 + ", " + sortNum3
}

function getLetterGrade(percentage)
{
  var letterGrade = "";

  switch(true)
  {
    case (percentage >= 90 && percentage <= 100):
      letterGrade = "A";
      break;

      case (percentage >= 80 && percentage <= 89.9):
      letterGrade = "B";
      break;

      case (percentage >= 70 && percentage <= 79.9):
      letterGrade = "C";
      break;

      case (percentage >= 67 && percentage <= 69.9):
      letterGrade = "D";
      break;

      case (percentage <= 66.9):
      letterGrade = "F";
      break;
  }

  return "<br>" + letterGrade;
}