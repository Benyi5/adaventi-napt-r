var linebreak = document.createElement("br");
const doorTexts = [   
    "do a backflip \n -- John Backflip",
    "igyál meg egy Habo🐦 Babo🐦 Roibo🐦 teát",
    "FE!N FE!N FE!N FE!N FE!N FE!N",
    "Hop on the Gyurcsány MC server",
    "Mew for 10 seconds",
    "start your winter arc already",
    "Borrow a pen from your friend and say: 'I have to write something imortant.' then write 'something important'.",
    "Text your friend you forgot your phone at their house",
    "Say this to the 9th person on the street you walk past by: 'Tudod mit szeretek benned a legjobban? Hogy olyan vagy mint egy battlepass' then walk away",
    "take a hard image today and make it as an album cover",
    "ask a stranger for the time and then say: 'correct' after watching your wrist",
    "drop something and stare at person infont of you untill they pick it up, then drop it again",
    "get off social media for the rest of the day",
    "run until you find a jojo reference",
    "play rock, paper, scisors with everyone in the room",
    "ask your friend for a challenge and do it without any hesitation",
    "when someone ask you something, ask back 'head or tails?' and then do nothing",
    "act like the main character for a day",
    "act like an npc for a day",
    "2 HOUR CODE SESSION make something up",
    "write music",
    "call someone randomly from a random phone and say: 'thats random, innit?' ",
    "Post this on insta story",   
    "You did it. Merry Christmas. Take a brake will you"
    
    
];



// 24 ajtó generálása
const container = document.querySelector('.container');
for (let i = 1; i <= 24; i++) {
    const door = document.createElement('div');
    door.className = 'door';
    door.textContent = i;
    door.style.gridArea = "door" + i;
    container.appendChild(door);
}

// Eseménykezelés hozzáadása
document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('click', function () {
        const day = this.textContent;

        switch (day) {
            case '1':
                alert(doorTexts[0]);
                door.style.opacity = 0;
                break;
            case '2':
                alert(doorTexts[1]);
                door.style.opacity = 0;
                break;
            case '3':
                alert(doorTexts[2]);
                door.style.opacity = 0;
                break;
            case '4':
                alert(doorTexts[3]);
                door.style.opacity = 0;
                break;
                case '5':
                alert(doorTexts[4]);
                door.style.opacity = 0;
                break;
                case '6':
                alert(doorTexts[5]);
                door.style.opacity = 0;
                break;
                case '7':
                alert(doorTexts[6]);
                door.style.opacity = 0;
                break;
                case '8':
                alert(doorTexts[7]);
                door.style.opacity = 0;
                break;
                case '9':
                alert(doorTexts[8]);
                door.style.opacity = 0;
                break;
                case '10':
                alert(doorTexts[9]);
                door.style.opacity = 0;
                break;
                case '11':
                alert(doorTexts[10]);
                door.style.opacity = 0;
                break;
                case '12':
                alert(doorTexts[11]);
                door.style.opacity = 0;
                break;
                case '13':
                alert(doorTexts[12]);
                door.style.opacity = 0;
                break;
                case '14':
                alert(doorTexts[13]);
                door.style.opacity = 0;
                break;
                case '15':
                alert(doorTexts[14]);
                door.style.opacity = 0;
                break;
                case '16':
                alert(doorTexts[15]);
                door.style.opacity = 0;
                break;
                case '17':
                alert(doorTexts[16]);
                door.style.opacity = 0;
                break;
                case '18':
                alert(doorTexts[17]);
                door.style.opacity = 0;
                break;
                case '19':
                alert(doorTexts[18]);
                door.style.opacity = 0;
                break;
                case '20':
                alert(doorTexts[19]);
                door.style.opacity = 0;
                break;
                case '21':
                alert(doorTexts[20]);
                door.style.opacity = 0;
                break;
                case '22':
                alert(doorTexts[21]);
                door.style.opacity = 0;
                break;
                case '23':
                alert(doorTexts[22]);
                door.style.opacity = 0;
                break;
                case '24':
                alert(doorTexts[23]);
                door.style.opacity = 0;
                break;

            
            
            default:
                alert('valami nem jo');
        }
    });
});  




