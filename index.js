
































































// const fs = require("fs");
// let mydata;
// fs.readFile("sample.txt", "utf8", (err, data) => {
//   mydata = data.split("\n");
//   let index = 0;
//   let acc = 0;
//   mydata = mydata[index];
//   newdata = mydata.slice(0, 3);
//   if (newdata === "nop") {
//     index += 1;
//   } else if (newdata === "acc") {
//     acc = acc + Number(mydata.match(/(?<=.{3} ).+/i)[0])
//     index += 1;
//   } else if (newdata === "jmp") {
//     Number(mydata.match(/(?<=.{3} ).+/i)[0]);
//     index += 1;
//   };
//   console.log(acc)
// });









































// const fs = require("fs");
// let counter = 0;
// let index = 0;
// let codes = fs.readFileSync("sample.txt", { encoding: "utf8" }).split("\n").filter(e => e);
// for (let code of codes) {
//   let letter = code.slice(0, 3);
//   let symbol = code.slice(4, 5);
//   let number = code.slice(5, code.length);
//   // console.log(`Letter: ${letter}\nSymbol: ${symbol}\nNumber: ${number}\n`);
//   // if (letter === "nop") {
//   //   index += 1;

//   // } else if (letter === "acc") {
//   //   if (symbol === "+") {
//   //     console.log(counter += Number(number));

//   //   } else if (symbol === "-") {
//   //     console.log(counter -= Number(number));

//   //   };
//   // };
// };

// console.log(counter);

