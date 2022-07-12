// // asem();
// console.log("HELLO");

// // setTimeout(() => {
// //   console.log("INside TImeout");
// // }, 1000);

// // var arrow = function () {
// //   return 1;
// // };

// const arrow = () => {
//   return 1;
// };

// // () => {
// // } // this is a function definition
// // ===
// // function () {

// // }

// // const addOne = number => {
// // 	return number + 1
// // }

// // const addTwoArguments = (number1, number2) => {
// //   return number1 + number2;
// // };
// // const addTwoArguments = (number1, number2) => number1 + number2;
// const addTwoArguments = (number1, number2) => ({
//   name: number1,
//   age: number2,
// });

// console.clear();

// // var
// // can be redeclared
// // can be reassigned
// // IS Hoisted
// // Function Scoped

// // let
// // can NOT be redeclared
// // can be reassigned
// // IS NOT Hoisted
// // Block Scoped

// // const
// // can NOT be redeclared
// // can NOT be reassigned
// // IS NOT Hoisted
// // Block Scoped

// // console.log("syntax:", syntax);
// // let syntax = "funky";
// // var syntax
// // console.log("syntax:", syntax);
// // var syntax = "funky";
// // // syntax = "is this still correct js?";
// // const orange = "orange fruit";
// // {
// //   const banana = "yellow fruit";
// //   {
// //     const data = true;
// //   }
// // }
// // function asem() {
// //   console.log("HE ASKED A QUESTION");
// // }

// // 2 levels of scoping in JS
// // Block scoping
// // function scoping

// // const value = 1;

// // if (true) {
// //   const value = 2;
// // }

// // console.log(value);

const player = {
  javascript: 100,
  left: 50,
};

const { javascript, left } = player;
console.log("left:", left);
console.log("javascript:", javascript);

const that = {
  player: {
    left: 1,
  },
};

const { left: thatPlayerLeft } = that.player;
console.log("thatPlayerLeft:", left);

const whatever = {
  player,
};
// const whatever = {player: player}
console.clear();

const studentList = [
  { name: "kira" },
  { name: "vincent" },
  {
    name: "tony",
    languages: [
      { name: "dutch", level: "native" },
      { name: "english", level: "dutch" },
      { name: "flemish", level: "weird language, who cares?" },
    ],
  },
  { name: "daiane" },
  { name: "maxime" },
  { name: "guillermo" },
  { name: "nuno" },
  { name: "tiffany" },
  { name: "nico" },
  { name: "asem" },
  { name: "abhijeet" },
  { name: "palash" },
  { name: "diana" },
  { name: "elvan" },
  { name: "joao" },
];

const [
  ,
  ,
  {
    languages: [, , { level }],
  },
] = studentList;

console.log(level);
// const [studentOne, studentTwo, studentThree, , , , , surprise] = studentList;
// console.log("surprise:", surprise);
// console.log("studentThree:", studentThree);
// console.log("studentOne:", studentOne);

function sayHello(name = "world") {
  console.log(`Hello, ${name}`);
}

const user = {
  name: "Palash",
  from: "Dubai",
  livesIn: "Dubai",
  studies: true,
  languages: ["english", "hindi"],
  isBelow20: false,
  money: 1000000,
};

const user2 = {
  name: "Nuno",
  from: "Portugal",
  livesIn: "Porto",
  studies: true,
  languages: ["portuguese", "english", "portunhol"],
  isBelow20: true,
  speaksMadeUpLanguage: true,
  money: 1000000,
};

const user3 = {
  name: "Tiffany",
  from: "Taiwan",
  livesIn: "Paris",
  studies: true,
  languages: ["english", "taiwaneese", "mandarin"],
  isBelow20: false,
  speaksMadeUpLanguage: false,
  money: 1000000,
};

function presentUser({ speaksMadeUpLanguage = true }) {
  if (speaksMadeUpLanguage) {
    return "asdkljfghasdjklghsdfhjklghsdfejklh";
  }

  return "Hello there";
}

function hasAmazingImagination({ speaksMadeUpLanguage, money }) {
  return speaksMadeUpLanguage ? money * 1 : money * -1;
  return money > 10_000_000_000
    ? "ah, youre rich"
    : money > 1000
    ? "you are rich in some countries"
    : money > 500
    ? "depends on which coin were talking about"
    : money > 100
    ? "thats a more than 99"
    : "why";
  //   if (speaksMadeUpLanguage) {
  //     return money * 1;
  //   }
  //   return money * -1;
}

// setTimeout(() => {
//   console.log("DONE MAKING A VERY HEAVY CALCULTION IN THE DATABASE");
// }, 1000);

// function executeStuffAfterOneSecond() {
//   return new Promise((stickToPromise, breakThePromise) => {
//     setTimeout(() => {
//       stickToPromise("DONE MAKING A VERY HEAVY CALCULTION IN THE DATABASE");
//     }, 1000);
//   });
// }

// executeStuffAfterOneSecond()
//   .then((value) => {
//     console.log("YAY, YOU GOT ME A VALUE: ", value);
//   })
//   .catch((err) => {
//     console.error("OH NO< SOMETHING BROKE, WHAAAAAAAAAAAAAYYYYYYYY", err);
//   });

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     return response.json();
//   })
//   .then((results) => {
//     console.log("results:", results);
//   });

// REST Operator And SPREAD Operator

const [regionalManager, assistantToTheRegionalManager, ...branch] = studentList;

console.log("regionalManager:", regionalManager);
console.log("assistantToTheRegionalManager:", assistantToTheRegionalManager);

// const branch = studentList.slice(2);
console.log("branch:", branch);

// const {
//   name,
//   studies,
//   ...idontknowwhatevernameyoucangiveitidontknowaahilikehowyoutakemywordsliterally
// } = user;
// console.log(
//   "idontknowwhatevernameyoucangiveitidontknowaahilikehowyoutakemywordsliterally:",
//   idontknowwhatevernameyoucangiveitidontknowaahilikehowyoutakemywordsliterally
// );

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr = [...arr1, ...arr2];

// arr1.forEach((activity) => {
//   arr.push(activity);
// });
// arr2.forEach((activity) => {
//   arr.push(activity);
// });

console.log("arr:", arr);

const arr4 = [7, ...arr];
console.log("arr4:", arr4);
console.clear();

const userFromDb = {
  name: "Guillermo",
  likes: [1, 2, 3, 4, 5],
  password: "funky_cats123",
};

const { password: _, ...rest } = userFromDb;
console.log("rest:", rest);

const newPassword = "spicy_meatball123";
const name = "Guillllermo";
const likes = [1, 2, 6, 7, 8, 9, 11];
// userFromDb.password = newPassword;
// userFromDb.name = name;
// userFromDb.likes = likes;
// userFromDb.password = newPassword
const newImprovedGuillllermo = {
  ...userFromDb,
  name,
  likes,
  password: newPassword,
};
console.log("newImprovedGuillllermo:", newImprovedGuillllermo);

function ourOwnFunction(...args) {
  console.log("args:", args);
}
