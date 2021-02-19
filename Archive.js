/*
Advent of Code Day 1:
  Logic:
    1. Put puzzle input in input.txt
    2. Import input.txt with the fs module
    3. log the error if it exists
    4. Split puzzle input line by line.
    5. The numbers are technically strings, so use the Number() function (or parseInt()) to turn into a string
    You can do this by iterating over the array and turning all values into numbers
    6. Iterate over the array to get all possible numbers for the first number
    7. Iterate over the array again in the iteration to get all possible numbers for the second number
    8. Check if the first and second number equal 2020, if so console.log the product of them

CODE:
  Part 1:
    const fs = require("fs");
    fs.readFile("input.txt", "utf8", (err, data) => {
      if (err) throw err;
      data = data.split("\n");
      data = data.map(e => Number(e));
      data.forEach(function(e) {
        data.forEach(function(j) {
          if(e+j == 2020) {
      console.log(e*j);
    };
        });
      });
    });
  Part 2:
    const fs = require("fs");
    fs.readFile("input.txt", "utf8", (err, data) => {
      if (err) throw err;
      data = data.split("\n");
      data = data.map(a => Number(a));
      data.forEach(function(a) {
        data.forEach(function(b) {
          data.forEach(function(c) {
            if(a+b+c == 2020) {
              console.log(a*b*c);
            };
          })
        });
      });
    });
Advent of Code Day 2:
  Logic:
    1. Put puzzle input in input.txt
    2. Import input2.txt with the fs module
    3. Log the error if it exists
    4. Split the puzzle input line by line
    5. Use a Regexr to split each line in 3 parts, 1st part being the password, 2nd part being the letter, 3rd part being the number of times the letter should be used
    6. Get the number of passwords that are not corrupted
  CODE:
    Part 1:
      let counter = 0;
      const fs = require("fs");
      fs.readFile("input2.txt", "utf8", (err, data) => {
        if (err) throw err;
        data = data.split("\n");
        data = data.map(e => {
          const part1 = e.match(/\d+(?=-)/gi)[0]
          const npart1 = e.match(/(?<=-)\d+/gi)[0]
          const part2 = e.match(/[a-z](?=:)/gi)[0]
          const part3 = e.match(/[a-z]*(?<!\d+-\d+ [a-z](?=:))/gi).filter(e => e)[0]
          console.log(part1, npart1, part2, part3)
          let part4 = e.replace(new RegExp(`[^${part2}]`, "g"), "").length - 1
          console.log(part4);
          if(part4 <= npart1) {
            if(part4 >= part1) {
              counter += 1;
            } else {

            };
          };
        });
        console.log(counter);
      });
    Part 2:
      let counter = 0;
      const fs = require("fs");
      fs.readFile("input2.txt", "utf8", (err, data) => {
        if (err) throw err;
        data = data.split("\n");
        data = data.map(e => {
          let firstNum = e.match(/\d+(?=-)/gi)[0]
          let secondNum = e.match(/(?<=-)\d+/gi)[0]
          let letter = e.match(/[a-z](?=:)/gi)[0]
          let password = e.match(/[a-z]*(?<!\d+-\d+ [a-z](?=:))/gi).filter(e => e)[0]
          let firstcheck = false;
          let secondcheck = false;
          if (password[firstNum-1] == letter) {
          firstcheck = true;
          }
          if (password[secondNum-1] == letter) {
          secondcheck = true;
          }
          if (!(firstcheck && secondcheck)) {
            if (firstcheck || secondcheck) {
              counter++
            };
          };
        });
        console.log(counter);
      });
Advent of Code Day 3:
  Logic:
    1. Put puzzle input in input.txt
    2. Import input3.txt with the fs module
    3. Log the error if it exists
    4. Split the puzzle input line by line and store it to a variable
    5. Set length of the array to mylength
    6. If it is a "#" add 1 to hits
  CODE:
    Part 1:
      let mydata;
      let mylength;
      const gettreehits = (x,y,hits) => {
        x = x % mylength;
        if (mydata[y]) {
        if (mydata[y][x] == "#") hits++
        gettreehits(x+3,y+1,hits)
        } else console.log(hits)
      }
      const fs = require("fs");
      fs.readFile("input3.txt", "utf8", (err, data) => {
        mydata = data.split("\n");
        mylength = mydata[0].length
        if (err) throw err;
        gettreehits(0,0,0)
      });
    Part 2:
      let mydata;
      let mylength;
      const gettreehits = (x, y, hits) => {
        x = x % mylength;
        if (mydata[y]) {
          if (mydata[y][x] == "#") hits++
          gettreehits(x + 1, y + 2, hits);
          //Switch the number hat x or y is added to for each of the slopes
        } else console.log(hits);
      };
      const fs = require("fs");
      fs.readFile("input3.txt", "utf8", (err, data) => {
        mydata = data.split("\n");
        mylength = mydata[0].length;
        if (err) throw err;
        gettreehits(0, 0, 0);
      });
      //Multiplying the number of trees each slope will encounter
      console.log(292*81*89*101*44)
Advent of Code Day 4:
  Part 1:
    CODE:
      const fs = require("fs");
      let mydata;
      let counter = 0;
      fs.readFile("input4.txt", "utf8", (err, data) => {
        if (err) throw err;
        mydata = data.split(/\n\s/gi);
        mydata.map(e => {
          let byr = e.match(/(?<=byr:)[A-Z#a-z0-9]+/gi);
          let iyr = e.match(/(?<=iyr:)[A-Z#a-z0-9]+/gi);
          let eyr = e.match(/(?<=eyr:)[A-Z#a-z0-9]+/gi);
          let hgt = e.match(/(?<=hgt:)[A-Z#a-z0-9]+/gi);
          let hcl = e.match(/(?<=hcl:)[A-Z#a-z0-9]+/gi);
          let ecl = e.match(/(?<=ecl:)[A-Z#a-z0-9]+/gi);
          let pid = e.match(/(?<=pid:)[A-Z#a-z0-9]+/gi);
          let cid = e.match(/(?<=cid:)[A-Z#a-z0-9]+/gi);
          if (byr) {
            if (iyr) {
              if (eyr) {
                if (hgt) {
                  if (hcl) {
                    if (ecl) {
                      if (pid) {
                        counter += 1;
                      };
                    };
                  };
                };
              };
            };
          };
        });
        console.log(counter);
      });
  Part 2:
    CODE:
      const fs = require("fs");
      let mydata;
      let counter = 0;
      const matches = (str, comp) => {
        let matches = comp.map(e => {
          if (e == str) {
            return "a"
          }
        }).filter(e => e)
        return matches.length;
      }
      fs.readFile("input4.txt", "utf8", (err, data) => {
        if (err) throw err;
        mydata = data.split(/\n\s/gi);
        mydata.map(e => {
          let byr = e.match(/(?<=byr:)[0-9]{4}\b/gi);
          let iyr = e.match(/(?<=iyr:)[0-9]{4}\b/gi);
          let eyr = e.match(/(?<=eyr:)[0-9]{4}\b/gi);
          let hgtNUM = e.match(/(?<=hgt:)[0-9]+/gi);
          let hgtIN = e.match(/(?<=hgt:[0-9]+)[in]+/gi);
          let hgtCM = e.match(/(?<=hgt:[0-9]+)[cm]+/gi)
          let hcl = e.match(/(?<=hcl:)#[a-f0-9]{6}\b/gi);
          let ecl = e.match(/(?<=ecl:)[A-Z#a-z0-9]+/gi);
          let pid = e.match(/(?<=pid:)[0-9]{9}\b/gi);
          let cid = e.match(/(?<=cid:)[A-Z#a-z0-9]+/gi);
          if ((byr >= 1920 && byr <= 2002)) {
            if ((iyr >= 2010 && iyr <= 2020)) {
              if ((eyr >= 2020 && eyr <= 2030)) {
                if (hgtIN) {
                  if ((hgtNUM >= 59 && hgtNUM <= 76)) {
                    if (hcl) {
                      if (matches(ecl, ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])) {
                        if (pid) {
                          counter += 1;
                        };
                      };
                    };
                  };
                } else if (hgtCM) {
                  if ((hgtNUM >= 150 && hgtNUM <= 193)) {
                    if (hcl) {
                      if (matches(ecl, ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])) {
                        if (pid) {
                          counter += 1;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        });
        console.log(counter);
      });
Advent of Code Day 5:
  Part 1:
    CODE:
      const fs = require("fs");
      fs.readFile("input5.txt", "utf8", (err, data) => {
        if (err) throw err;
        data = data.split("\n");
          let seatids = [];
        data = data.forEach(e => {
          let total = 0;
          let total2 = 0;
          let rows = e.slice(0, 7);
          let column = e.slice(7, e.length);
            for (let i = 0; i < rows.length; i++) {
              let num = rows.length - Number(i) -1;
              let num2 = column.length - Number(i) -1;
                if (rows[num] == "B") {
                  total += 2 ** Number(i);
                };
                if (column[num2] == "R") {
                  total2 += 2 ** Number(i);
                };
            };
            seatids.push(total * 8 + total2);
          });
          console.log(`Highest Seat ID: ${Math.max(...seatids)}`)
        });
  Part 2:
    CODE:
      const fs = require("fs");
      fs.readFile("input5.txt", "utf8", (err, data) => {
        if (err) throw err;
        data = data.split("\n");
        let seatids = [];
        let combos = [];
        let notfound = [];
        data = data.forEach(e => {
          let total = 0;
          let total2 = 0;
          let rows = e.slice(0, 7);
          let column = e.slice(7, e.length);
          for (let i = 0; i < rows.length; i++) {
            let num = rows.length - Number(i) - 1;
            let num2 = column.length - Number(i) - 1;
            if (rows[num] == "B") {
              total += 2 ** Number(i);
            };
            if (column[num2] == "R") {
              total2 += 2 ** Number(i);
            };
          };
          seatids.push(total * 8 + total2);
          combos.push([total * 8 + total2]);
        });
        let newArr = combos.sort(function(a, b) {
          return a - b;
        });
        let nums = new Set(newArr.map(e => e[0]));
        for (let i = Number(newArr[0]); i <= Number(newArr[newArr.length - 1]); i++) {
          if (!nums.has(i)) {
            console.log(i);
            break;
          };
        };
      });
Advent of Code Day 6:
  Part 1:
    CODE:
      const fs = require("fs");
      let x = 0;
      fs.readFile("input6.txt", "utf8", (err, data) => {
        if (err) throw err;
        data = data.split(/\n\s/gi);
        data = data.map(e => {
          e = e.replace(/\n/gi, "");
          if(e) {
            let Dupcheck = [...new Set(e)]
            x += Dupcheck.length;
          }
        });
        console.log(x);
      });
  Part 2:
    CODE:
      const fs = require("fs");
      const groups = fs.readFileSync("input6.txt", {encoding: "utf8"}).split("\n\n").filter(e => e);
        let total = 0;
          for(const group of groups) {
            const Dupcheck = new Set([...group.replace(/\n/g, "")]);
              total += [...Dupcheck].filter(character => group.split("\n").filter(e => e).every(form => form.includes(character))).length;

        };
          console.log(total);
Advent of Code Day 7: 
  Part 1:
    CODE: 
      const fs = require("fs");
      const lines = fs.readFileSync("input7.txt", { encoding: "utf8" }).split("\n").filter(e => e);
      const map = new Map();
      function containsShinyGold(color) {
        if(color === "shiny gold") return true;
        if(!map.has(color)) return false;
        const bagsWithin = map.get(color);
        for(const bag of bagsWithin) {
          if(containsShinyGold(bag)) {
            return true;
          };
        };
        return false;
      };
      for (const line of lines) {
        const [bag, bags] = line.split(' bags contain ');
        bags.replace(/\./, '').split(', ').map(txt => {
        const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
            if(!map.has(bag)) {
              map.set(bag, []);
            };
            map.set(bag, [...map.get(bag), groups.color]);
        });
      }; 
      const colors = map.keys();
      let total = 0;
      for(const color of colors) {
        if(containsShinyGold(color) && color != 'shiny gold') {
          total++;
        };
      };
      console.log(total);
  Part 2: 
    CODE:
      const fs = require("fs");
      const lines = fs.readFileSync("input7.txt", {encoding: "utf8" }).split("\n").filter(e => e);
      const map = new Map();
      function containsShinyGold(color) {
        if(color === "shiny gold") return true;
        if(!map.has(color)) return false;
        const bagsWithin = map.get(color);
        for(const {color: bag} of bagsWithin) {
          if(containsShinyGold(bag)) {
            return true;
          };
        };
        return false;
      };
      for (const line of lines) {
        const [bag, bags] = line.split(' bags contain ');
        bags.replace(/\./, '').split(', ').map(txt => {
        const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
            if(!map.has(bag)) {
              map.set(bag, []);
            };
            if(!groups.number) groups.number = 0;
            map.set(bag, [...map.get(bag), groups]);
        });
      }; 
      const colors = map.keys();
      let total = 0;
      for(const color of colors) {
        if(containsShinyGold(color) && color != 'shiny gold') {
          total++;
        };
      };
      console.log(total);
      function sumBags(topBag) {
        if(topBag.number == 0) return 0;
        const bagsWithin = map.get(topBag.color);
        let sum = 1;
        for(const bag of bagsWithin) {
          sum += bag.number * sumBags(bag);
        };
        return sum;
      };
      console.log(sumBags({number: 1, color: "shiny gold"})-1);
Advent of Code Day 8: 
  Part 1: 
    CODE: 
      
*/






































//Ok. So, there are true/false values, and there are truthy and falsy values. truthy values are technically true and falsy values are technically false. Examples of falsy values are empty strings (''), zeros (0), and undefined. Truthy values are stuff like strings with length ("aoeuaoeu"), numbers that aren't zero (4), arrays,objects, etc
//Right now bruh doesn't exist so it won't run the first statement
// "" is falsy, as it isn't containing anything, so it still won't run the first condition.
// 0 is falsy, as it has no value (0 is not a value), so it still won't run the first condition
//OK I got this but how does this connect to .filter();
// e => e
// Imagine the e in filter like the e in map because like they're the same. If inside the function of filter you return true, then it includes that in a new array. Otherwise it won't, effectively filtering out values that return false in the logic. And with the truthy/falsy, empty strings return false, and if "e" is an empty string it won't allow it in the array.