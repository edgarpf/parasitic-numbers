var assert = require('assert');
var parasiticNumber = require('./');

assert.strictEqual(parasiticNumber(1,1), '1');
assert.strictEqual(parasiticNumber(2,2), '105263157894736842');
assert.strictEqual(parasiticNumber(3,3), '1034482758620689655172413793');
assert.strictEqual(parasiticNumber(3,5), '1724137931034482758620689655');
