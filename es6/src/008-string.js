// * ch4 String

// ? Ex.1 Iterator fro string
// * this new iterator can recognize unicode > 0xFFFF
// let text = String.fromCodePoint(0x20BB7);
let text = String.fromCodePoint(0x1F680);

for (let i = 0; i< text.length; i++){
    console.log(text[i]);
}

for(let i of text){
    console.log(i);
}

// ? Ex.2 JSON.stringify()
// * UTF-8 标准规定，0xD800到0xDFFF之间的码点，不能单独使用，必须配对使用。
// * 比如，\uD834\uDF06是两个码点，但是必须放在一起配对使用，代表字符𝌆。
// * 单独使用不合法，颠倒顺序也不行。
// * JSON.stringify()的问题在于，它可能返回0xD800到0xDFFF之间的单个码点。
// ! ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存
// ! 在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。
console.log(JSON.stringify('\uD834\uDF06'));
console.log(JSON.stringify('\uD834'));
console.log(JSON.stringify('\uDF06\uD834'));

// ? Ex.3 Template string
// ? 3.1. using variable and expression inside curly brace
let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// ? 3.2. keep all space and newline
console.log(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

// ? 3.3. Tagged template: function name (fn) + template string (`xxx`) = fn(xxx)
let a = 5;
let b = 10;

// * paramenter s = [all parts not replace,], v1 = first replaced, v2 = second replaced
function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
  
    return "OK";
  }

  tag`Hello ${ a + b } world ${ a * b}`;

// ? 3.4 Advanced example for tagged template: how slice back to original string
let total = 30;
let template = `The total is ${total} (${total*1.05} with tax)`;
console.log(template);

let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg);

// ? 3.5 improve String.fromCharCode to String.fromCodePoint()
console.log(String.fromCharCode(0x20bb7));      // ! wrong
console.log(String.fromCodePoint(0x20bb7));     // * correct


// ? 3.6 improve s.charAt() and s.charCodeAt() to s.codePointAt()
let s = "𠮷a";

console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charAt(2));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));
console.log(s.charCodeAt(2));
console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));

// ? 3.7 test whether charactor is 2 bytes or 4 bytes
function is32Bit(c){
    return c.codePointAt(0) > 0xFFFF;
}

console.log('is a 32bit? ' + is32Bit("a"));
console.log('is 𠮷 32bit? ' + is32Bit("𠮷"));