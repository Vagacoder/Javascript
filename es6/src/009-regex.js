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

// ? Ex.5 Unicode property escape
// ? 5.1. \p{...}
console.log('\n5.1. Unicode property escape: p{...}');
console.log('π'.match(/\p{Script=Greek}/u));

// ? 5.2 match all kinds of decimal numbers
console.log('\n5.2. Match all kind of decimal number  ...');
console.log('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼'.match(/\p{Decimal_Number}+?/ug));

// ? 5.3 match all kinds of numbers, even Roma
console.log('\n5.3. Match all kinds of number ...');
console.log('²³¹¼½¾㉛㉜㉝ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ'.match(/\p{Number}/ug));

// ? 5.4 match white space
console.log('\n5.4. match all white space ...');
console.log('\n\r\t\v '.match(/\p{White_Space}/ug));

// ? Ex.6 Named Capture Group
// ? 6.1. example
console.log('\n6.1. Named capture group ...');
let date1 = '1992-05-17';
console.log(date1);
let matchResult = date1.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(matchResult);
console.log(matchResult.groups);
console.log(matchResult.groups.year);
console.log(matchResult.groups.month);
console.log(matchResult.groups.day);

// ? 6.2. With destructuring, assign variables
console.log('\n6.2. with destructuring to assign variables ...');
let {groups:{one, two}} = /(?<one>\w+):(?<two>\w+)/.exec('foo:bar');
console.log(one);
console.log(two);

// ? 6.3 another example with destructureing
console.log('\n6.3. changing date format ...');
let regex1 = /(?<year>\d{4})-(?<month>\d*)-(?<day>\d*)/u;
console.log('2015-01-02'.replace(regex1, '$<day>/$<month>/$<year>'));
console.log(
    '2015-01-02'.replace(regex1, (
        matched, // 整个匹配结果 2015-01-02
        capture1, // 第一个组匹配 2015
        capture2, // 第二个组匹配 01
        capture3, // 第三个组匹配 02
        position, // 匹配开始的位置 0
        S, // 原字符串 2015-01-02
        groups // 具名组构成的一个对象 {year, month, day}
      ) => {
      let {day, month, year} = groups;
      return `${day}/${month}/${year}`;
     }));

// ? 6.4. named capture group can be used inside regex (with number cap group)
console.log('\n6.4. named cap group inside regex, with number cap group ...');
let regex2 = /^(?<word>[a-z]+)!\k<word>!\1!/;
console.log('abc!abc!abc!abcdefg!!'.match(regex2));
console.log('abc!abc!abcd!abcdefg!!'.match(regex2));

