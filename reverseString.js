let text = "hello world"
let string = ""


function reverseString() {
    for (let i = text.length -1; i >=0; i--) {
        string += text[i];
    }
    return string

}
let result = reverseString()
console.log(result);