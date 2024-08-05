const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};



function decode(encodedStr) {
    const chunks = [];
    for (let i = 0; i < encodedStr.length; i += 10) {
        chunks.push(encodedStr.substring(i, i + 10));
    }

    let decodedMessage = "";

    for (const chunk of chunks) {
        if (chunk === '**********') {
            decodedMessage += " ";
        } else {
            let morseCode = "";
            for (let i = 0; i < 10; i += 2) {
                const pair = chunk.substring(i, i + 2);
                if (pair === '10') {
                    morseCode += '.';
                } else if (pair === '11') {
                    morseCode += '-';
                }
            }

            decodedMessage += MORSE_TABLE[morseCode] || '?';
        }
    }

    return decodedMessage;
}

module.exports = {
    decode
}