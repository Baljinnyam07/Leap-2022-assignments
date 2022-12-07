
function getGender(secondLastDigit) {
    if (secondLastDigit % 2 === 0) {
        return 'Emegtei';
    }
    return 'Eregtei';
}

function isBornInTwenties(fifthDigit) {
    if (fifthDigit === 3 || fifthDigit === 2)
        isBornInTwenties = true;
    return false;
}

function getBirthDay(reg) {

    const day = reg.substr(6,2);

    let isBornInTwenties = getBirthDay(reg[4]);

    const fifthDigit = reg[4];
    if (fifthDigit === 3 || fifthDigit === 2)
        isBornInTwenties = true;

    let month = Number(reg.substr(4, 2));
    if (isBornInTwenties)
        month -= 20;

    let year = reg.substr(2, 2);
    if (isBornInTwenties) {
        year = 20 + year;
    } else {
        year = 19 + year;
    }
    year = Number(year);

    return (`${year}-${month}-${day}`);
}


function register(reg) {

    const huis = getGender(Number(reg.substr(8, 1)));
    const birthDay = getBirthDay(reg);


    const firstLetter = reg.substr(0, 1);
    if (firstLetter == 'У') {
        aimag = 'Ulaanbaatar';
    } else if (firstLetter == 'А') {
        aimag = 'Arhangai';
    }
    else if (firstLetter == 'Б') {
        aimag = 'Bayan-Olgii';
    }
    else if (firstLetter == 'В') {
        aimag = 'Bayanhongor';
    }
    else if (firstLetter == 'Г') {
        aimag = 'Bulgan';
    }
    else if (firstLetter == 'Д') {
        aimag = 'Govi-Altai';
    }
    else if (firstLetter == 'Е') {
        aimag = 'Dornogovi';
    }
    else if (firstLetter == 'Ж') {
        aimag = 'Dundgovi';
    }
    else if (firstLetter == 'З') {
        aimag = 'Zavhan';
    }
    else if (firstLetter == 'И') {
        aimag = 'Uvurhangai';
    }
    else if (firstLetter == 'Й') {
        aimag = 'Umnugovi';
    }
    else if (firstLetter == 'К') {
        aimag = 'Sukhbaatar';
    }
    else if (firstLetter == 'Л') {
        aimag = 'Selenge';
    }
    else if (firstLetter == 'М') {
        aimag = 'Tuv';
    }
    else if (firstLetter == 'Н') {
        aimag = 'Uvs';
    }
    else if (firstLetter == 'О') {
        aimag = 'Hovd';
    }
    else if (firstLetter == 'П') {
        aimag = 'Huwsgul';
    }
    else if (firstLetter == 'Р ') {
        aimag = 'Khentii';
    }
    else if (firstLetter == 'С ') {
        aimag = 'Darkhan-Uul';
    }
    else if (firstLetter == 'Т') {
        aimag = 'Orkhon';
    }
    else if (firstLetter == 'Ф') {
        aimag = 'Govisumber';
    }
    else if (firstLetter == 'Х') {
        aimag = 'Ulaanbaatar';
    }
    console.log(`${aimag} hot/aimag-t tursun`);
    console.log('birthDay', birthDay);
    console.log('huis', huis);
}
 register('УШ96103147');