//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
 
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
 
//3) return only the last three presidents
 
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice


const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
  //1
  let demo = presidents.filter(presidents => presidents.party === "D");

  console.log(demo);
 // 2
  const rep = presidents.filter(presidents => presidents.party === "R");
  // const one = presidents.filter(presidents => presidents.terms === 1);
  let popOne = rep.pop();
  let popTwo= rep.pop();
  let remove = rep.splice(1,1);
  let removeTwo = rep.splice(2,1);
 console.log(rep);

 const republic = presidents.filter(presidents => presidents.party === "R"&& presidents.terms ===1);
 console.log(republic);
//4 
let power = presidents.filter(presidents => presidents.party === "D");
let pop = power.splice(2,2);
console.log(power);
let democrat = presidents.filter(presidents => presidents.party === "D" && presidents.terms === 2);
console.log(democrat);
// //BONUS
let Lyndon = presidents[10];

 if (Lyndon.terms= 2){
     console.log("LBJ served two terms");
 } else {
     console.log("LBJ was one and done");
 }
 //3
let call =  presidents.splice(9);
console.log(call);
//LOL THE SPLICING ALL WORKS JUST NOT EFFICIENT 