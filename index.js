//Fernando Gómez Graciani. Skylab Pasapalabra. 2021.
//Questions array of objets (letters)
const questions = {
    a: [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha."},
        { letter: "a", answer: "agorafobia", status: 0, question: "CON LA A. Fobia a los espacios abiertos."}
    ],
    b: [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "b", answer: "botiquin", status: 0, question: "CON LA B. Caja en la que se guardan medicinas."},
        { letter: "b", answer: "biologia", status: 0, question: "CON LA B. Ciencia que trata de los seres vivos."}
    ],
    c: [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
         { letter: "c", answer: "camilla", status: 0, question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos."},
         { letter: "c", answer: "cardiologia", status: 0, question: "CON LA C. Estudio del corazón y de sus funciones y enfermedades."}
    ],
    d: [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "d", answer: "dedicatoria", status: 0, question: "CON LA D. Palabras que se escriben y se dicen como regalo a alguien."},
        { letter: "d", answer: "democracia", status: 0, question: "CON LA D. Forma de gobierno en la que el poder político es ejercido por los ciudadanos"}
    ],
    e: [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "empañar", status: 0, question: "CON LA E. Mancharse un cristal con el vapor de agua."},
        { letter: "e", answer: "egoismo", status: 0, question: "CON LA E. Excesivo amor a sí mismo"}
    ],
    f: [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "fabula", status: 0, question: "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"},
        { letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso metabólico por el cual las plantas transforman la materia con la energía de la luz."}
    ],
    g: [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "guisar", status: 0, question: "CON LA G. Preparar alimentos cocinándolos con calor."},
        { letter: "g", answer: "gimnasio", status: 0, question: "CON LA G. Lugar destinado al ejercicio físico"}
    ],
    h: [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        { letter: "h", answer: "hamaca", status: 0, question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama."},
        { letter: "h", answer: "hemorragia", status: 0, question: "CON LA H. Flujo de sangre por rotura de vasos sanguíneos"}
    ],
    i: [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "i", answer: "imperdible", status: 0, question: "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho."},
        { letter: "i", answer: "icono", status: 0, question: "CON LA I. Símbolo gráfico que aparece en la pantalla de una computadora u otro dispositivo electrónico y que representa un programa, un sistema operativo, etc."}
    ],
    j: [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que monta a caballo."},
        { letter: "j", answer: "jamas", status: 0, question: "CON LA J. Nunca, en ningún momento."}
    ],
    k: [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla."},
        { letter: "k", answer: "kilovatio", status: 0, question: "CON LA K. Unidad de potencia equivalente a 1000 vatios."}
    ],
    l: [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
        { letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra."},
        { letter: "l", answer: "litografia", status: 0, question: "CON LA L. Arte de dibujar o grabar en piedra"}
    ],
    m: [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite."},
        { letter: "m", answer: "morfologia", status: 0, question: "CON LA M. Parte de la gramática que estudia la estructura de las palabras y de sus elementos constitutivos"}
    ],
    n: [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
        { letter: "n", answer: "nuca", status: 0, question: "CON LA N. Parte posterior de la cabeza situada encima del cuello."},
        { letter: "n", answer: "neumatico", status: 0, question: "CON LA N. Pieza de caucho que se monta sobre la llanta de una rueda"}
    ],
    ñ: [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "ñ", answer: "teñir", status: 0, question: "CONTIENE LA Ñ.  Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados."},
        { letter: "ñ", answer: "ñandu", status: 0, question: "CON LA Ñ. Ave de América parecida al avestruz pero más pequeña."}
    ],
    o: [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "o", answer: "orilla", status: 0, question: "CON LA O. Borde del mar, de un lago o de un río."},
        { letter: "o", answer: "otorrinolaringologo", status: 0, question: "CON LA O. Médico que trata de las enfermedades del oído, nariz y laringe."}
    ],
    p: [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "p", answer: "planchar", status: 0, question: "CON LA P. Quitar las arrugar a una prenda."},
        { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia."}
    ],
    q: [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quitamanchas", status: 0, question: "CON LA Q. Producto natural o preparado que sirve para quitar manchas."},
        { letter: "q", answer: "quiromancia", status: 0, question: "CON LA Q. Adivinación de lo concerniente a una persona por las rayas de sus manos"}
    ],
    r: [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "r", answer: "racimo", status: 0, question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo."},
        { letter: "r", answer: "retorica", status: 0, question: "CON LA R. Arte de bien decir, de dar al lenguaje escrito o hablado eficacia bastante para deleitar, persuadir o conmover."}
    ],
    s: [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        { letter: "s", answer: "sembrar", status: 0, question: "CON LA S. Enterrar semillas en la tierra para que crezcan."},
        { letter: "s", answer: "sandia", status: 0, question: "CON LA S. Fruto grande, redondo y jugoso, de color verde oscuro por fuera y rojo por dentro."}
    ],
    t: [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "t", answer: "taburete", status: 0, question: "CON LA T. Asiento sin respaldo."},
        { letter: "t", answer: "tanatorio", status: 0, question: "CON LA T. Edificio en que son depositados los cadáveres durante las horas que preceden a su inhumación o cremación"}
    ],
    u: [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "u", answer: "untar", status: 0, question: "CON LA U. Extender mantequilla sobre una rebanada de pan."},
        { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Elemento químico metálico, radiactivo, uno de cuyos isótopos se utilizó en la primera bomba atómica"}
    ],
    v: [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "v", answer: "vecino", status: 0, question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra."},
        { letter: "v", answer: "vagon", status: 0, question: "CON LA V. Plataforma o cabina del tren que es arrastrada por la locomotora, en donde viajan la carga o los pasajeros."}
    ],
    w: [{ letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "wifi", status: 0, question: "CON LA W. Sistema de conexión inalámbrica para conectarse a internet."},
        { letter: "w", answer: "wolframio", status: 0, question: "CON LA W. También llamado tungsteno,​ es un elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W."}
    ],
    x: [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas."},
        { letter: "x", answer: "inexacto", status: 0, question: "CONTIENE LA X. Falso, impreciso, desacertado"}
    ],
    y: [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
        { letter: "y", answer: "yunque", status: 0, question: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo."},
        { letter: "y", answer: "yoga", status: 0, question: "CON LA Y. Tradicional disciplina física y mental que se originó en la India."}
    ],
    z: [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zumbido", status: 0, question: "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito."},
        { letter: "z", answer: "zoologico", status: 0, question: "CON LA Z. Lugar en que se conservan, cuidan y a veces se crían diversas especies animales para que sean contempladas por el público y para su estudio."}
    ] 
}

let donut = [];
let currentLetter = '';
let distance = 150;
let timer;
let player='';
let usernameCheck = false;
//Ranking array of players
const ranking = [
    {player:'Fer', hits: 23, fails:0, remainingTime: 0},
    {player: 'shady', hits: 22, fails: 5, remainingTime: 50},
    {player: 'fast', hits: 21, fails: 6, remainingTime: 30},
    {player: 'sky', hits: 20, fails: 3, remainingTime: 0},
    {player: 'lab', hits: 19, fails: 0, remainingTime: 0}
    ];

/*---------------- DOM elements-------------------*/
const playButton = document.getElementById('playButton');
const newGameButton = document.getElementById('newGame');
const questionsBox = document.getElementById('questions');
const inputBox = document.getElementById("inputBox");
const answersBox = document.getElementById('answers');
const instructionsBox = document.getElementById("instructions");
const timerBox = document.getElementById('timer');
const scoreBox = document.getElementById('scoreBox');
const pointsNumberBox = document.getElementById('pointsNumber');
const pasapalabraBox = document.getElementById('pasapalabra');
const hitsBox = document.getElementById('hits');
const rankingBox = document.getElementById('rankingBody');
const pasapalabraTitleBox = document.getElementById('pasapalabraTitle');
const footerBox = document.getElementById('madeBy');
const statsBox = document.getElementById('statsBox');
const donutLetters = document.getElementById('donutLetters');
/*-----------------------------------------------*/

/*---------------- Hide elements ----------------*/
const hideDOMElement = (element) => {

    element.style.display = 'none';

    switch(element){
        case pasapalabraBox:
            hidePointsNumber();
            break;
        
        case inputBox:
            element.style["padding-bottom"] = '0';
            break;
    }
}

const hidePointsNumber = () => {
    pointsNumberBox.innerHTML = '';
}
/*-----------------------------------------------*/

/*---------------- Show elements ----------------*/
const showDOMElement = (element) => {

    element.style.display = 'block'; 

    switch(element){
        case pasapalabraBox:
            element.style.display = 'grid';
            break;

        case answersBox:
            inputBox.style["padding-bottom"] = '100vh';
            break;

        case scoreBox:
            showPointsNumber();
            break;
    }
}

const showCurrentQuestion = () => {
    questionsBox.innerHTML = getCurrentQuestion();
}

const showRemaining = () => {
    
    if (distance === 0) {
        endGame();
    } else {
        timerBox.innerHTML = distance;
        distance--;
    }
}

const showPointsNumber = () => {
    pointsNumberBox.innerHTML = totalHits();
}

const showInvalidUserMessage = () => {
    questionsBox.innerHTML = 'El nombre de usuario no puede contener más de 20 caracteres';
    questionsBox.style.color = '#d64444';
}
/*------------------------------------------------*/

/*-------------------- Donut  --------------------*/

const allDonutAnswered = () => {

    let result = true;

    for(let i=0; i< donut.length; i++) {
        if(!donutLetterAnswered(donut[i])){
            result = false;
        }
    }
    return result;
}

const donutLetterAnswered = (letter) => {

    let result = false;

    if(letter.status !== 0) result = true;

    return result;
}

const chooseQuestionOfLetter = (letter) => {
    return Math.round(Math.random()*(questions[letter].length - 1));
}

const generateDonut = () => {

    let donut = [];

    let number;
    for(let letter in questions) {
        number = chooseQuestionOfLetter(letter);
        donut.push({
            letter: questions[letter][number].letter,
            answer: questions[letter][number].answer, 
            status: questions[letter][number].status, 
            question: questions[letter][number].question
        });
    }
    return donut;
}

const currentDonutIndex = () => {
    let index;

    for(index=0; index<donut.length; index++) {
        if(donut[index].letter === currentLetter){
            return index;
        }
    }
}

const currentDonutElement = () => {

    let donutElement = [];

    for(let element in donut) {
        if(donut[element].letter === currentLetter){
            donutElement.push(donut[element]);
        }
    }
    return donutElement[0];
}

const updateStatus = (donutIndex, answer, input) => {

    if(answer === input){
        donut[donutIndex].status = 1;
        switchCurrentLetterGreen();
        playCorrectSound();
    } else if(input === '' || input === 'pasapalabra'){
        donut[donutIndex].status = 0;
    } else {
        donut[donutIndex].status = -1;
        switchCurrentLetterRed();
        playWrongSound();
    }
}

const nextQuestion = () => {

    let nextQuestionIndex;
    if (allDonutAnswered()){
        endGame();
    } else {
        nextQuestionIndex = nextNotAnsweredDonutIndex();
        currentLetter = donut[nextQuestionIndex].letter;
        showCurrentQuestion();
    }    
}

const nextNotAnsweredDonutIndex = () => {

    let i = currentDonutIndex() + 1;

    if(i === 27) {i = 0;}

    for(i; i< donut.length; i++) {

        if(i===26 &&  donutLetterAnswered(donut[i])){
            for(i=0; i< donut.length; i++) {
                if(!donutLetterAnswered(donut[i])){
                    return i;
                }
            }
        }
        if(!donutLetterAnswered(donut[i])){
            return i;
        }
    }
}

const allLetterColorsReset = () => {
    for (let letter in donut){
        document.getElementById(`letter${donut[letter].letter.toUpperCase()}`).style.background = 'radial-gradient(circle at 1vmin 1vmin, #1da8f8, #000)';
    }
}

const roundedDonut = () => {
    donut = generateDonut();
    playStartSound();
    let rotationDegrees = 13.33;
    const percentageTransform = 800;
    const convertToDeg = Math.PI/180;
    rotationDegrees *= convertToDeg;
 
    for (let letter in donut){
        const letterBox = document.getElementById(`letter${donut[letter].letter.toUpperCase()}`);

        letterBox.animate([
            // keyframes
            { transform: `translate(${(Math.sin(rotationDegrees*letter))*(percentageTransform)}%,${(Math.cos(rotationDegrees*letter))*(-percentageTransform)}%)`},
          ], {
            // timing options
            duration: 2000,
            iterations: 1,
            fill: "forwards",
          });
    }

    donut = [];
}

const resetRoundedDonut = () => {
    donut = generateDonut();

    for (let letter in donut){
        const letterBox = document.getElementById(`letter${donut[letter].letter.toUpperCase()}`);

        letterBox.animate([
            // keyframes
            { transform: `translate(0,0)`},
          ], {
            fill: "forwards",
          });
    }
    donut = [];
}

const switchCurrentLetterGreen = () => {    
    document.getElementById(`letter${currentLetter.toUpperCase()}`).style.background = 'radial-gradient(circle at 1vmin 1vmin, #1df897, #000)';
}

const switchCurrentLetterRed = () => {
    document.getElementById(`letter${currentLetter.toUpperCase()}`).style.background = 'radial-gradient(circle at 1vmin 1vmin, #ff4a21, #000)';
}

/*------------------------------------------------*/

/*-------------- Question / answer ---------------*/

const updateAnswer = () => {
    answersBox.value = '';
}

const getCurrentQuestion = () => {
    return currentDonutElement().question;
}

const checkAnswer = () => {

    const letter = currentDonutElement();
    const currentAnswer = letter.answer;
    let userAnswer = currentUserAnswer();
    const currentIndex = currentDonutIndex();

    if(userAnswer !== null) userAnswer = userAnswer.toLowerCase();

    if(userAnswer === 'me rindo'){
        updateAnswer();
        endGame();
    } else {
        updateStatus(currentIndex, currentAnswer, userAnswer);
        updateTotalHits();
        updateAnswer();
        nextQuestion();
    }    
}

const currentUserAnswer = () => {
    return answersBox.value;
}

const resetQuestions = () => {
    questionsBox.innerHTML = 'Introduce tu nombre de usuario';
}

/*-----------------------------------------------*/

/*-------------------- Game ---------------------*/

const startGame = () => {
    stopTitleAnimation();
    showDOMElement(statsBox);
    updateAnswer();
    donut = generateDonut();
    currentLetter = `${donut[0].letter}`;
    showCurrentQuestion();
    timer = setInterval(showRemaining, 1000);
}

const startNewGame = () => {
    resetRankingTable();
    hideDOMElement(scoreBox);
    showDOMElement(pasapalabraBox);
    hideDOMElement(inputBox);
    hideDOMElement(questionsBox);
    hideDOMElement(pasapalabraTitleBox);
    hideDOMElement(donutLetters);
    showDOMElement(instructionsBox);
    showDOMElement(playButton);
    adjustFooterToMain();
}

const endGame = () => {
    addToRanking();
    generateRankingTable();
    hideDOMElement(pasapalabraBox);
    showDOMElement(scoreBox);
    adjustFooterToRanking();
    resetValues();
    playEndSound();
}

const resetValues = () => {
    usernameCheck = false;
    player = '';
    resetQuestions();
    allLetterColorsReset();
    resetRoundedDonut();
    hitsBox.innerHTML = `0`;
    timerBox.innerHTML = 150;
    donut = [];
    currentLetter='';
    distance = 150;
    clearInterval(timer);
    restartTitleAnimation();
    hideDOMElement(statsBox);
    resetUserInputMessage();
}

const resetUserInputMessage = () => {
    questionsBox.innerHTML = 'Introduce tu nombre de usuario';
    questionsBox.style.color = 'white';
}

/*------------------------------------------------*/

/*-------------------- Stats  --------------------*/

const totalHits = () => {

    let result = 0;

    for(let i=0; i< donut.length; i++) {
        if(donut[i].status === 1){
            result++;
        }
    }
    return result;
}

const totalFails = () => {

    let result = 0;

    for(let i=0; i< donut.length; i++) {
        if(donut[i].status === -1){
            result++;
        }
    }
    return result;
}

const updateTotalHits = () => {
    hitsBox.innerHTML = `${totalHits()}`;
}

/*-----------------------------------------------*/

/*----------------- Username  -------------------*/

const askForUsername = () => {
    hideDOMElement(instructionsBox);
    hideDOMElement(playButton);
    showDOMElement(pasapalabraBox);
    showDOMElement(pasapalabraTitleBox);
    showDOMElement(donutLetters);
    showDOMElement(questionsBox);
    showDOMElement(answersBox);
    showDOMElement(inputBox);
    roundedDonut();
}

const checkUsername = () => {

    player = answersBox.value;

    if(player.length > 20){
        showInvalidUserMessage(); 
    } else if (player !== ''){
        usernameCheck = true;
        questionsBox.style.color = 'rgb(231, 231, 231)';
        startGame();
    }
}
/*-----------------------------------------------*/

/*------------------- Ranking -------------------*/

const addToRanking = () => {
    ranking.push({player: player, hits: totalHits(), fails: totalFails(), remainingTime: distance});
    sortRanking();
}
//Sorts in ascending order the ranking array having as priorities (in order): More points, less fails, less remaining time 
const sortRanking = () => {

    ranking.sort((a, b) => {

        if(b.hits > a.hits){
            return 1;
        }

        if(b.hits === a.hits && b.fails < a.fails){
            return 1;
        }

        if(b.hits === a.hits && b.fails === a.fails && b.remainingTime < a.remainingTime){
            return 1;
        }

        if (b.hits < a.hits) {
            return -1;
        }

        if (b.hits === a.hits && b.fails > a.fails) {
            return -1;
        }

        if(b.hits === a.hits && b.fails === a.fails && b.remainingTime > a.remainingTime){
            return -1;
        }
            return 0;
    });
}

const createRankingRankColumn = (rankingIndex) => {
    const rankColumnElement = document.createElement('td');
    const rank = document.createTextNode(`${rankingIndex+1}`);

    rankColumnElement.appendChild(rank);

    return rankColumnElement;
}

const createRankingPlayerColumn = (rankingIndex) => {
    const playerColumnElement = document.createElement('td');
    const player = document.createTextNode(`${ranking[rankingIndex].player}`);

    playerColumnElement.appendChild(player);

    return playerColumnElement;
}

const createRankingHitsColumn = (rankingIndex) => {
    const hitsColumnElement = document.createElement('td');
    const hits = document.createTextNode(`${ranking[rankingIndex].hits}`);

    hitsColumnElement.appendChild(hits);

    return hitsColumnElement;
}

const createRankingFailsColumn = (rankingIndex) => {
    const failsColumnElement = document.createElement('td');
    const fails = document.createTextNode(`${ranking[rankingIndex].fails}`);

    failsColumnElement.appendChild(fails);

    return failsColumnElement;
}

const createRankingRemainingTimeColumn = (rankingIndex) => {
    const remainingTimeColumn = document.createElement('td');
    const remainingTime = document.createTextNode(`${ranking[rankingIndex].remainingTime}`);

    remainingTimeColumn.appendChild(remainingTime);

    return remainingTimeColumn;
}

const generateRankingTable = () => {

    for(let i=0; i<ranking.length; i++){

        const rankingTable = document.createElement('tr');
        const rankColumn = createRankingRankColumn(i);
        const playerColumn = createRankingPlayerColumn(i);
        const hitsColumn = createRankingHitsColumn(i);
        const failsColumn = createRankingFailsColumn(i);
        const remainingTimeColumn = createRankingRemainingTimeColumn(i);
        
        rankingTable.appendChild(rankColumn);
        rankingTable.appendChild(playerColumn);
        rankingTable.appendChild(hitsColumn);
        rankingTable.appendChild(failsColumn);
        rankingTable.appendChild(remainingTimeColumn);

        rankingBox.appendChild(rankingTable);
    }
}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const resetRankingTable = () => {
    removeAllChildNodes(rankingBox);
}

/*-----------------------------------------------*/

/*-------------- Title animation ----------------*/

const stopTitleAnimation = () => {
    pasapalabraTitleBox.classList.remove('mainTitle');
    pasapalabraTitleBox.innerHTML = 'PASAPALABRA';
}

const restartTitleAnimation = () => {
    pasapalabraTitleBox.classList.add('mainTitle');
    pasapalabraTitleBox.innerHTML = '';
}
/*-----------------------------------------------*/

/*---------------- Footer adjusts ---------------*/

const adjustFooterToMain = () => {
    footerBox.style.padding = '0 0 0 0';
    footerBox.style.position = 'absolute';
    footerBox.style.fontSize = '2vmin';
}

const adjustFooterToRanking = () => {
    footerBox.style.position = 'unset';
    footerBox.style.padding = '2vmin 0 1vmin 0';
    footerBox.style.fontSize = '1em';
}

/*-----------------------------------------------*/

/*---------------- Sounds control ---------------*/

const playCorrectSound = () => {
    const tmpCorrectSound = new Audio("sounds/correct.wav");
    tmpCorrectSound.play();
}

const playWrongSound = () => {
    const tmpWrongSound = new Audio("sounds/wrong.wav");
    tmpWrongSound.play();
}

const playEndSound = () => {
    const tmpEndSound = new Audio("sounds/end.flac");
    tmpEndSound.play();
}

const playStartSound = () => {
    const tmpStartSound = new Audio("sounds/start.wav");
    tmpStartSound.play();
}

/*-----------------------------------------------*/

/*----------------- Listeners -------------------*/

window.onkeydown = function(event) {

    if(event.keyCode === 13){
        (usernameCheck) ? checkAnswer() : checkUsername(); 
    }
};

playButton.addEventListener('click', askForUsername);
newGameButton.addEventListener('click', startNewGame);

/*-----------------------------------------------*/