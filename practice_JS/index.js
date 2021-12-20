function expressionToRpn(str) {
  let arrNumber = [];
  let arrStack = [];
  let i = 0;
  let priority;
  for (i = 0; i < str.length; i++) {
    priority = getPriority(str.charAt(i));
    if (priority == 0) {
      arrNumber += str.charAt(i);
    }
    if (priority == 1) {
      arrStack.push(str.charAt(i));
    }
    if (priority > 1) {
      arrNumber += " ";
      while (arrStack != null) {
        if (arrStack.lastIndexOf >= priority) {
          arrNumber += arrStack.pop();
        } else {
          break;
        }
        arrStack.push(str.charAt(i));
      }
    }
    if (priority == -1) {
      arrNumber += " ";
      while (arrStack.lastIndexOf != 1) {
        arrNumber =+arrStack.pop();
      }
      arrStack.pop();
    }
}
  while (arrStack != null) {
    arrNumber += arrStack.pop();
  }
  return arrNumber;
}
console.log(expressionToRpn("(2+2)*2"));

function answerToRpn(strRpn) {
  return 0;
}

function getPriority(char) {
  if (char == "*" || char == "/") {
    return 3;
  } else if (char == "+" || char == "-") {
    return 2;
  } else if (char == "(") {
    return 1;
  } else if (char == ")") {
    return -1;
  } else {
    return 0;
  }
}
