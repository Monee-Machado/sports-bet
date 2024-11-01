let funds = 100

//#region 
function betTeam1() {
  const team1skill = 0
  const team2skill = 0
}
//#endregion




//#region 
const fruits = [{
  name: "lemon",
  teamNumber: 1,
  emoji: '🍋',
  skill: 10
},
{
  name: "apple",
  teamNumber: 1,
  emoji: '🍎',
  skill: 30
},
{
  name: "grapes",
  teamNumber: 1,
  emoji: '🍇',
  skill: 88
},
{
  name: "green apple",
  teamNumber: 1,
  emoji: '🍏',
  skill: 15
},
{
  name: "cherries",
  teamNumber: 1,
  emoji: '🍒',
  skill: 77
},
{
  name: "pear",
  teamNumber: 1,
  emoji: '🍐',
  skill: 21
},
{
  name: "orange",
  teamNumber: 1,
  emoji: '🍊',
  skill: 5
},
{
  name: "watermelon",
  teamNumber: 1,
  emoji: '🍉',
  skill: 99
},
{
  name: "avocado",
  teamNumber: 1,
  emoji: '🥑',
  skill: 50
},
{
  name: "strawberry",
  teamNumber: 1,
  emoji: '🍓',
  skill: 1
},
{
  name: "mango",
  teamNumber: 2,
  emoji: '🥭',
  skill: 61
},
{
  name: "peach",
  teamNumber: 2,
  emoji: '🍑',
  skill: 34
},
{
  name: "melon",
  teamNumber: 2,
  emoji: '🍈',
  skill: 71
},
{
  name: "kiwi",
  teamNumber: 2,
  emoji: '🥝',
  skill: 76
},
{
  name: "pineapple",
  teamNumber: 2,
  emoji: '🍍',
  skill: 47
},
{
  name: "banana",
  teamNumber: 2,
  emoji: '🍌',
  skill: 23
},
{
  name: "tomato",
  teamNumber: 2,
  emoji: '🍅',
  skill: 58
},
{
  name: "eggplant",
  teamNumber: 2,
  emoji: '🍆',
  skill: 99
},
{
  name: "coconut",
  teamNumber: 2,
  emoji: '🥥',
  skill: 3
},
{
  name: "BIG cake",
  teamNumber: 2,
  emoji: '🎂',
  skill: 100
},
]
//#endregion

const teamSweetElm = document.getElementById('Team-Sweet')
const teamTangyElm = document.getElementById('Team-Tangy')
// NOTE this is in ID= see line 68








//#region 🧠 Logic

// NOTE THIS is pulled from MICK's lecture




//#endregion

// NOTE Lecture line 153



//#region 🎨 Visuals, Graphics and document manips

// NOTE mick' lecture
function drawTeam1() {
  teamSweetElm.innerText = '' // empty the element, of OLD data
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i]
    console.log('draw fruit', fruit);
    // console.log('this for team 1');
    if (fruit.teamNumber == 'Team Sweet')
      // NOTE here lies IF
      teamSweetElm.innerHTML += `<span>${fruit.emoji}</span>` // and NEW data into element
  }
}

drawTeam1()

// NOTE mick' lecture
function drawTeam2() {
  teamTangyElm.innerText = '' // empty the element, of OLD data
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i]
    console.log('draw fruit', fruit);
    // console.log('this for team 1');
    // NOTE here lies IF
    teamTangyElm.innerHTML += `<span>${fruit.emoji}</span>` // and NEW data into element
  }
}

drawTeam1()



//#endregion







