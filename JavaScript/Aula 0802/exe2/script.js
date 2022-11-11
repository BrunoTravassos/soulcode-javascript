num1 = 20;
num2 = 15;

result = 0;

result = num1 + num2;
console.log('result = ' + result);
result = result + num2;
console.log("result = " + result);
num1 = result;
console.log("num1 = " + num1);
result = result - result;
console.log("result = " + result);
result = num1 * num2;
console.log("result = " + result);

result = num1 % 3;
console.log("result = " + result);

num2 = num1 / result;
console.log("num2 = " + num2);

result = num2 = num1 + num2
result = num2 + (num1 = num2);
console.log("result2 = " + result);

result =+ num2;
console.log("result3 = " + result);

/*
result = 35
result = 50
num1 = 50
result = 0
result = 750 */