
const assert = require( "assert" );
const mtch = require( "./mtch.js" );

assert.equal( mtch( "hello world", /hello/, 0 ), "hello" );
assert.deepEqual( mtch( "hello world", /hello/ ), [ "hello" ] );

console.log( "ok" );
