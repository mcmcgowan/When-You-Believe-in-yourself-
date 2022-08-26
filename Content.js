//Array to hold our motivational strings
let motivation = [
  "You are enough. A thousand times enough. -Unknown", 
  "If you have the ability to love, love yourself first... -Charles Bukowski",
  "Love yourself unconditionally, just as you love those closest to you... -Les Brown",
  "Be enough for yourself first. The rest of the world can wait. -F.W. Boreham",
  "You are very powerful, provided you know how powerful you are. -Yogi Bhajan",
  "You carry so much love in your heart. Give some to yourself. -Unknown",
  "To fall in love with yourself is the first secret to happiness. -Robert Morely",
  "You really have to love yourself to get anything in this world done. -Lucille Ball",
  "Talk to yourself like someone you love. -BreneBrown",
  "The same light you see in others is shining within you, too. -Morgan H Nichols",
  "No one is you and that is your superpower. -Unknown",
  "Make yourself a priority. -Unknown",
  "Self-care is how you take your power back. -Lalah Delia",
  "If there's one thing I'm willing to bet on, it's myself. -Beyonce",
  "Do not let what you cannot do interfere with what you can do. -John Wooden",
  "Trust yourself, you know more than you think you do. -Benjamin Spock",
  "You change the world by being yourself. -Yoko Ono",
  "Heal yourself first. The rest will come later. -Unknown",
  "I woke up like this. Flawless. -Beyonce",
  "Even though I had sold 70 million albums, there I was feeling like \"I\'m no good at this. -Jennifer Lopez"
]

//create a variable to store the body tag 
const page = document.getElementsByTagName('body')[0];
//function to append a full screen div for quotes and then remove after a set time

//create element for div (with id)
const quoteDiv = document.createElement("div");
quoteDiv.setAttribute("id", "quoteDiv");
quoteDiv.style.display = 'block';
quoteDiv.style.position = 'fixed';
quoteDiv.style.height = '100%';
quoteDiv.style.width = '100%';
quoteDiv.style.zIndex = '2000000000000';

const textDiv = document.createElement('div');
textDiv.setAttribute('class', 'textDiv');
textDiv.style.position = 'absolute';
textDiv.style.left = '50%';
textDiv.style.transform = 'translate(-50%)'
textDiv.style.fontSize = '45px';
textDiv.style.fontFamily = 'Cursive'
textDiv.style.textAlign = 'center'
textDiv.style.top = '40%';
textDiv.style.padding = "1em"
//textDiv.style.height = "100px"
textDiv.style.lineHeight = '1.6';
let randomizer = motivation[Math.floor(Math.random() * motivation.length)]
textDiv.innerHTML = `${randomizer}`


//attributes
// const bGColor = 'background-color'
// quoteDiv.setAttribute('style', 'backgroundColor');
let transparancy = '0'
quoteDiv.style.backgroundColor = `rgba(232, 211, 213, ${transparancy})` //${transparancy});
quoteDiv.style.color = `rgba(139, 150, 136, ${transparancy})`;
// //populate div with quote

// //append div to body
quoteDiv.appendChild(textDiv);
page.prepend(quoteDiv);

//delay()
fadeIn()

//helper function to recursively change transparency of text and background
function fadeIn(){
    if (Number(transparancy) >= 1) {
        transparancy = '1'
        quoteDiv.style.color = `rgba(139, 150, 136, ${transparancy})`;
        quoteDiv.style.backgroundColor = `rgba(232, 211, 213, ${transparancy})`;
        return delay();
    }
    transparancy = `${Number(transparancy) + .02}`
    quoteDiv.style.color = `rgba(139, 150, 136, ${transparancy})`;
    quoteDiv.style.backgroundColor = `rgba(232, 211, 213, ${transparancy})`;
    setTimeout(fadeIn, 10);
}

function fadeOut() {
  if (Number(transparancy) <=0) {
    page.removeChild(quoteDiv)
    return
  };
  transparancy = `${Number(transparancy) - .02}`
  quoteDiv.style.backgroundColor = `rgba(232, 211, 213, ${transparancy})`;
  quoteDiv.style.color = `rgba(139, 150, 136, ${transparancy})`
  setTimeout(fadeOut, 75);
}

function delay(){
    return setTimeout(fadeOut, 4000)
}