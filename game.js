 // GLOBAL VAR


 let countries = new Array(
  new Array('MAGYARORSZÁG', 'BUDAPEST'),
  new Array('HOLLANDIA', 'AMSZTERDAM'),
  new Array('AUSZTRIA', 'BÉCS'),
  new Array('SPANYOLORSZÁG', 'MADRID'),
  new Array('FRANCIAORSZÁG', 'PÁRIZS'),
  new Array('HORVÁTORSZÁG', 'ZÁGRÁB'),
  new Array('OLASZORSZÁG', 'RÓMA'),
  new Array('NAGY-BRITANNIA', 'LONDON'),
  new Array('SVÁJC', 'GENF'),
  new Array('BELGIUM', 'BRÜSSZEL'),
  new Array('FINNORSZÁG','OSLO'),
  new Array('ROMÁNIA','BUKAREST'),
  new Array('UKRAJNA','KIJEV'),
  new Array('OROSZORSZÁG','MOSZKVA'),
  new Array('NÉMETORSZÁG','BERLIN'),
  new Array('ALBÁNIA','TIRANA'),
  new Array('SVÉDORSZÁG','STOCKHOLM'),
  new Array('TÖRÖKORSZÁG','ANKARA'),
  new Array('PORTUGÁLIA','LISSZABON'),
  new Array('BULGÁRIA','SZÓFIA'),
  new Array('LENGYELORSZÁG','VARSÓ'),
  new Array('LETTORSZÁG','RIGA'),
  new Array('LITVÁNIA','VILNIUSZ'),
  new Array('SZLOVÉNIA','LJUBLJANA'),
  new Array('LUXEMBURG','LUXEMBURG'),
  new Array('MÁLTA','VALLETTA'),
  new Array('CIPRUS','NICOSIA'),
  new Array('GÖRÖGORSZÁG','ATHÉN'),
  new Array('CSEHORSZÁG','PRÁGA'),
  new Array('SZLOVÁKIA','POZSONY'),
  new Array('BOSZNIA-HERCEGOVINA','SZARAJEVO'),
  new Array('IZLAND','REYKJAVIK'),
  new Array('FEHÉROROSZORSZÁG','MINSZK'),
  new Array('KAZAHSZTÁN','NUR-SZULTAN'),
  new Array('SZERBIA','BELGRÁD'),
  new Array('AZERBAJDZSÁN','BAKU'),
  new Array('GRÚZIA','TBILISZI'),
  new Array('IRORSZÁG','DUBLIN'),
  new Array('ÉSZTORSZÁG','TALLIN'),
  new Array('DÁNIA','KOPPENHÁGA'),
  new Array('MOLDOVA','KISINYOV'),
  new Array('ÖRMÉNYORSZÁG','JEREVÁN'),
  new Array('MACEDÓNIA','SZKOPJE'),
  new Array('MONTENEGRÓ','PODGORICA'),
  new Array('ANDORRA','ANDORRA LA VELLA'),
  new Array('LIECHTENSTEIN','VADUZ'),
  new Array('ALGÉRIA','ALGIR'),
  new Array('ANGOLA','LUANDA'),
  new Array('EGYIPTOM','KAIRÓ'),
  new Array('ETIÓPIA','ADDISZ-ABEBA'),
  new Array('KENYA','NAIROBI'),
  new Array('MAROKKÓ','RABAT'),
  new Array('KONGÓ','BRAZZAVILLE'),
  new Array('DÉL-AFRIKAI KÖZTÁRSASÁG','PRETORIA'),
  new Array('LIBIA','TRIPOLI'),
  new Array('MADAGASZKAR','ANTANANARIVO'),
  new Array('SEYCHELLE-SZIGETEK','VIKTÓRIA'),
  new Array('UGANDA','KAMPALA'),
  new Array('ARGENTINA','BUENOS AIRES'),
  new Array('BRAZILIA','BRAZILIAVÁROS'),
  new Array('VENEZUELA','CARACAS'),
  new Array('GUAYANA','GEORGETOWN'),
  new Array('BOLIVA','LA PAZ'),
  new Array('PERU','LIMA'),
  new Array('ECUADOR','GUAYAQUIL'),
  new Array('URUGUAY','MONTEVIDEO'),
  new Array('CHILE','SANTIAGO'),
  new Array('PARAGUAY','ASUNCION'),
  new Array('PANAMA','PANAMA'),
  new Array('MEXIKÓ','MEXIKÓVÁROS'),
  new Array('COSTA-RICA','SAN JOSÉ'),
  new Array('KUBA','HAVANNA'),
  new Array('AMERIKAI EGYESÜLT ÁLLAMOK','WASHINGTON'),
  new Array('KANADA','MONTREAL'),
  new Array('KÍNA','PEKING'),
  new Array('JAPAN','TOKIÓ'),
  new Array('INDIA','ÚJ-DELHI'),
  new Array('NEPÁL','KATMANDU'),
  new Array('IRAK','BAGDAD'),
  new Array('IRÁN','TEHERÁN'),
  new Array('IZRAEL','JERUZSÁLEM'),
  new Array('THAIFÖLD','BANGKOK'),
  new Array('VIETNÁM','HANOI'),
  new Array('INDONÉZIA','JAKARTA'),
  new Array('TAIWAN','TAIPEI'),
  new Array('MALAYSIA','KUALA LUMPUR'),
  new Array('FÜLÖP-SZIGETEK','MANILA'),
  new Array('ÉSZAK-KOREA','PHENJAN'),
  new Array('DÉL-KOREA','SZÖUL'),
  new Array('AFGANISZTÁN','KABUL'),
  new Array('SZÍRIA','DAMASZKUSZ'),
  new Array('AUSZTRÁLIA','SIDNEY')
);

let number = 0;
let total = 0;
let good = 0;


// FUNCTION


function change(text) {

  let countryName = text.substring(0,1);
  text = text.substring(1);
  countryName += text.toLowerCase();
  let textTemporary1 = countryName;
  let textTemporary2 = '';
  let changeChar = '';

  for (let i = 0; i < countryName.length; i++) {
    if ( countryName.charAt(i) === ' ' || countryName.charAt(i) ==='-') {
      textTemporary1 = countryName.substr(0,i + 1);
      changeChar = countryName.substr(i + 1, 1);
      changeChar = changeChar.toUpperCase();
      textTemporary2 = countryName.substring(i + 2);
      countryName = textTemporary1 + changeChar + textTemporary2;
    }
  }

  return countryName;

}


function createQuestion(questionText) {

  
  let question = document.createElement('h4');
  question.innerHTML = questionText;

  return question;

}


function askQuestion() {

  number = Math.floor(Math.random() * countries.length);

  total++;

  let question = 'Mi a fővárosa ' + change(countries[number][0]) + 'nak?';
  document.getElementById("ask").innerHTML = question;

  document.getElementById("answer").focus();

  let answerbox = document.getElementById('answer');
  answerbox.value = '';

}


function createGoodAnswer(key) {

  let correct = total + ' &#128512 Gratulálok! A válasz helyes!'
  let bad = total + ' &#128577 Sajnálom... A helyes válasz: '+change(countries[number][1]);
  

  let goodAnswer = document.createElement('h5');
    
  if (countries[number][1] === key.toUpperCase()) {
    good++;
    globalSumText = 'A helyes válaszok száma: ' + good + ' / ' + total + 'kérdésből :)';
    goodAnswer.innerHTML = correct + '</br> ' + globalSumText;
    console.log(good);
    console.log(total);
  }
  else {
    globalSumText = 'A helyes válaszok száma: ' + good + '/ ' + total + 'kérdésből :)';
    goodAnswer.innerHTML = bad  + '</br> ' + globalSumText;
  }

  return goodAnswer;

}


function checkAnswer() {

  let keyAnswer = document.gameForm.answer.value;

  let goodAnswerDiv = document.getElementById('goodAnswer');

  goodAnswerDiv.insertBefore(createGoodAnswer(keyAnswer),goodAnswerDiv.firstChild);
  
}


function bye() {
  
  alert('Sajnálom... Remélem hamarosan újra játszunk...');
  

}

//    MAIN FUNCTION


function init() {

   askQuestion();

}

init();