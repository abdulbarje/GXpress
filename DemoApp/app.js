var cat = require('cat-me');
consol.log(cat());

var knock = require('knock-knock-jokes');
consol.log(knockknock());

var requireStack = require('require-stack');
try {
  requireStack('./module/with/syntax/error');
} catch (e) {
  console.log(e.stack);
}
