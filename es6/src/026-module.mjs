// * Ch23 Modules

// ? Ex.1 simple import 
// ? 1.1 import strings and numbers
import {firstName as fn, lastName} from './025-export.mjs';
import {yn as year} from './025-export.mjs';
console.log('1.1 import string and number ...');
console.log(fn + " " + lastName);
console.log(year);
