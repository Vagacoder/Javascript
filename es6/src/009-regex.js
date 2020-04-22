// * ch.6 Regex

// ? Ex.1 u flag for regex
// ? 1.1.
console.log('1.1 test 4 bytes UTF-16 ...');
console.log('\ud83d\udc2a');
console.log(/^\ud83d/u.test('\ud83d\udc2a'));
console.log(/^\ud83d/.test('\ud83d\udc2a'));


// ? 1.2. metacharacter, '.', must use u flag for 4 bytes utf-16 character 
console.log('\n1.2 test chinese character ...');
let s = '𠮷';
console.log(s);
console.log(/^.$/.test(s));
console.log(/^.$/u.test(s));

// ? 1.3. In ES6 u{100} can be used for unicode; in regex, u{100} must with u flag
console.log('\n1.3 test \\u{}');
console.log(/\u{61}/.test('a'));        // match 'u' 61 times
console.log(/\u{61}/u.test('a'));
console.log(/\u{1}/.test('u'));         // match 'u' one time

// ? 1.4. With u flag, {n} can get correct number;
console.log('\n1.4 test {n} with u flag ...');
console.log(/a{2}/.test('aa'));
console.log(/a{2}/u.test('aa') );
console.log(/𠮷{2}/.test('𠮷𠮷') );
console.log(/𠮷{2}/u.test('𠮷𠮷') );

// ? 1.5. a function return correct length of string (utf-16 4bytes)
function codePointLength(string){
    let result = string.match(/[\S\s]/gu);
    return result? result.length:0;
}

console.log('\n1.5 function return corret string length ...');
console.log(s);
console.log(s.length);
console.log(codePointLength(s));

// ? 1.6. some letters are same meaning, but are in different coide points.
console.log('\n1.6 same meaning, differnt code points ...');
console.log('\u004b');
console.log('\u212a');
console.log(/[a-z]/i.test('\u212a'));
console.log(/[a-z]/iu.test('\u212a'));

// ? Ex.2 y flag for regex
// ? 2.1. compare g and y flags
let s1 = 'aaa_aa_a';
let r1 = /a+/g;
let r2 = /a+/y;
let r3 = /a+_/y;

console.log('\n2.1. compare g and y flags ...');
console.log(r1.exec(s1));
console.log(r2.exec(s1));
console.log(r3.exec(s1));

console.log(r1.exec(s1));
console.log(r2.exec(s1));
console.log(r3.exec(s1));

// ? 2.2. for string methods, y flag must be used with g
console.log('\n2.2. for string method, using y with g flag to get all matches ...');
console.log('a1a2a3'.match(/a\d/y));
console.log('a1a2a3'.match(/a\d/yg));

// ? Ex.3 s flag for dotAll mode
console.log('\n3.1. dotAll mode for s flag ...');
let s2 = 'foo\nbar';
console.log(s2.match(/foo.bar/));
console.log(s2.match(/foo[^]bar/));
console.log(s2.match(/foo.bar/s));

// ? Ex.4 lookbehind and negative lookbehind
// ? 4.1. general using
console.log('\n4.1. lookbehind ....');
console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill.'));
console.log(/(?<!\$)\d+/.exec('It is worth €23.'));

// ? 4.2. Note the difference
console.log('\n4.2. Note the difference ....');
console.log(/(?<=(\d+)(\d+))$/.exec('1053'));
console.log(/$/.exec('1053'));
console.log(/(?<=(\d+))(\d+)$/.exec('1053'));
console.log(/(?<=(\d+))(\d+?)$/.exec('1053'));
console.log(/^(\d+)(\d+)$/.exec('1053'));

// ? 4.3. Note the position of the quotation (\1)
// ? the evaluation order of lookbehind is from right to left
console.log('\n4.3. Note the position of \\1');
console.log(/(?<=\1d(o))r/.exec('hodor'));
console.log(/(?<=(o)d\1)r/.exec('hodor'));
