// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1, num2) {
    let GreaterNum ;
        if (num1>num2){
          GreaterNum=num1;
        }else{
          GreaterNum=num2;  
        }
    console.log("${GreaterNum} win");
      }

// Call the function
max(12, 43);
