let word = "malayalam"

function palindrone(word) {
    let text = true;
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] != word[word.length - i - 1]) {
            text = false;
        }
    }
    if (text == true) {
        return "palindrone"
    } else {
        return "not palindrone"
    }

}
console.log(palindrone(word));