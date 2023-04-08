// 6. Write a program to find the number of times, the character "a" is repeated and its index
// position in the following paragraph:-

var text = "JavaScript was created by Brendan Eich in 1995 to give web pages a little more pep than the <blink> tag could provide. Today it has far more powerful uses and companies like Google and Facebook use JavaScript to build complex desktop-like web applications. With the launch of Node.js, It has also become one of the most popular languages for building server-side software. Today, even the web isn’t big enough to contain JavaScript’s versatility. I believe that you are already aware of these facts and this has made you land on this JavaScript Interview Questions article.";
var count = 0;
var positions = [];

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === "a") {
    count++;
    positions.push(i);
  }
}

// Print the results
console.log(" character 'a' appears: " + count);
console.log(" index positions of a: " + positions);