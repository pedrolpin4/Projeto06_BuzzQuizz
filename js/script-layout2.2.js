let levelControler = 0;
let index = 0;

const measureResults = () => {
    levelControler = 0;
    let percentage = Math.round((correctAnswer/thisQuizz.questions.length)*100);
    let userLevel = "";
    thisQuizz.levels.forEach((element, i) => {
        if(Number(element.minValue) <= percentage && Number(element.minValue) >= levelControler){
            userLevel = element.title;
            levelControler = Number(element.minValue);
            index = i;
        }
    });
    let message = `${percentage}% de acerto: ${userLevel}`
    console.log(message);
    showResults(message);
}

const showResults = message => {
    document.querySelector(".top-result").innerHTML = message;
    document.querySelector(".description img").src = thisQuizz.levels[index].image;
    document.querySelector(".description div").innerHTML = thisQuizz.levels[index].text;
}

const goHome = () => {
    const alterTo = document.querySelector(".page2")
    const from = document.querySelector(".page1")
    alterTo.classList.add("layout2")
    from.classList.remove("layout1")
}