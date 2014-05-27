var subject = ["Ella", "Él", "Ellos", "Ellas", "Nosotros", "Paula", "Natalia y yo", "Manuel", "Usted", "Yo"];
var sThirdVerb = ["compró", "escribió", "mandó"];
var pThirdVerb = ["compraron", "escribieron", "mandaron"];
var pFirstVerb = ["compramos", "escribimos", "mandamos"];
var sFirstVerb = ["compré", "escribí", "mandé"];

var whichSubj = Math.floor(Math.random() * 10);
var sub = subject[whichSubj];
var randomZeroToTwo = Math.round(Math.random() * 2);

var subjectTwo = ["mí", "ella", "nosotros", "ti", "ellos"];


var whichSubjTwo = Math.round(Math.random() * 4);
var indirectObject = subjectTwo[whichSubjTwo];



var verb;
var sRandom = subject[whichSubj];
if (sRandom === "Ella" || sRandom === "Él" || sRandom === "Paula" || sRandom === "Manuel" || sRandom === "Usted") {
    var verb = sThirdVerb[randomZeroToTwo];
} else if (sRandom === "Ellos" || sRandom === "Ellas") {
    var verb = pThirdVerb[randomZeroToTwo];
} else if (sRandom === "Nosotros" || sRandom === "Natalia y yo") {
    var verb = pFirstVerb[randomZeroToTwo];
} else {
    var verb = sFirstVerb[randomZeroToTwo];
};

var noun
var doPronoun
if (randomZeroToTwo === 0) {
    var noun = " un regalo para ";
    var doPronoun = "lo";
} else if (randomZeroToTwo === 1) {
    var noun = " dos poemas para ";
    var doPronoun = "los";
} else {
    var noun = " una carta para ";
    var doPronoun = "la";
};

var ioPronoun
if (whichSubjTwo === 0) {
   var  ioPronoun = "me";
} else if (whichSubjTwo === 1 || whichSubjTwo === 4) {
    var ioPronoun = "se";
} else if (whichSubjTwo === 2) {
    var ioPronoun = "nos";
} else if (whichSubjTwo === 3) {
    var ioPronoun = "te";
};


document.getElementById("button").onclick = spanishEx();

function spanishEx() {
    var answerUser = prompt("Replace the direct and indirect objects in the sentence with their respective pronouns: " + sub + " " + verb + noun + indirectObject + ". Answer: " + sub + " " + ioPronoun + " " + doPronoun + " "
                  + verb);
   
};

/*Answer is supposed to show up if answerUser is incorrect. Also, prompt should show up only if button is clicked.

Ideally, pictures will link to other pages and the exercises will not be on the main page.*/

