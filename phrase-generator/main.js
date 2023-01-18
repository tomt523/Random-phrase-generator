// returns a random index based on the length of an array
const getRandIndex = arr => Math.floor(Math.random() * arr.length);


const phrase = ['It is time to', 'will be your lucky day!', 'Mark your calender for'];

const phrase0 = ['keep going!', 'take a break.', 'finish up for the day.', 'push forward!'];

const phrase1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const phrase2 = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const phraseMe = () => {
    p = getRandIndex(phrase);
    pFull = phrase[p];
    if (p === 0) {
        p1 = getRandIndex(phrase0);
        p1Full = phrase0[p1];
        return pFull + ' ' + p1Full;
    } else if (p === 1) {
        p1 = getRandIndex(phrase1);
        p1Full = phrase1[p1];
        return p1Full + ' ' + pFull
    } else if (p === 2) {
        p1 = getRandIndex(phrase2);
        p1Full = phrase2[p1];
        day = Math.floor(Math.random() * 29);
        return pFull + ' ' + p1Full + ', ' + day + '.';
    } else {
        return 'Error';
    }
}

console.log(phraseMe());