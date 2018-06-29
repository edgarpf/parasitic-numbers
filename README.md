# parasitic-numbers [![Build Status](https://travis-ci.org/edgarpf/parasitic-numbers.svg?branch=master)](https://travis-ci.org/edgarpf/parasitic-numbers)
A simple function that generates a n-parasitic number(in base 10).

## Installation
```js
npm i -S parasitic-numbers
```

## Usage
```js
var parasiticNumber = require('parasitic-numbers');

//Use parasiticNumber(n, k) with k >= n 

console.log(parasiticNumber(1,1)); //1
console.log(parasiticNumber(2,2)); // 105263157894736842
console.log(parasiticNumber(3,3)); // 1034482758620689655172413793
console.log(parasiticNumber(3,5)); // 1724137931034482758620689655

```
