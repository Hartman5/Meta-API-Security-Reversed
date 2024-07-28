var password = "PASSWORD HERE"

function stringToKeyCodes(str) {
  let keyCodes = [];
  for (let i = 0; i < str.length; i++) {
    keyCodes.push(str.charCodeAt(i));
  }
  return keyCodes;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateTyping(inputString) {
  var minHoldTime = 100;
  var maxHoldTime = 200;

  let keyCodes = stringToKeyCodes(inputString);

  for (let keyCode of keyCodes) {
    simulateKeydown(keyCode);
    let holdTime = Math.random() * (maxHoldTime - minHoldTime) + minHoldTime;
    await sleep(holdTime);
    simulateKeyup(keyCode);
  }
}

function h(a) {
  a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
  return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63));
}

var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function j(a) {
  a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
  return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255);
}

function encode(a) {
  a = unescape(encodeURI(a));
  var b = (a.length + 2) % 3;
  a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
  return a.slice(0, a.length + b - 2) + "==".slice(b);
}

function encodeNums(a) {
  return String.fromCharCode.apply(String, a.map(function(a) {
    return base64Chars.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63);
  }));
}

function makeRandomArray() {
  var arr = [];
  for (var i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 3));
  }
  return arr;
}

var b = 32,
  d = 65,
  e = 90,
  f = 48,
  g = 57,
  h = 58,
  i = 63,
  j = 91,
  k = 94,
  l = 0,
  m = 0,
  n = 0,
  o = 0,
  p = [],
  q = null,
  r = [],
  s = [],
  t = [],
  u = [];

for (var v = 0; v < 10; v++) r.push(0), s.push(0);
for (v = 0; v < 10; v++) s.push(0), t.push(0), u.push(0);

var w = function (a) {
  var c = Date.now();
  a %= 128;
  (a >= d && a <= e) || a == b ? l++ : a >= f && a <= g ? m++ : (a >= h && a <= i) || (a >= j && a <= k) ? n++ : o++;
  p[a] = c;
  if (q != null && q !== 0) {
    var r = c - q;
    r >= 0 &&
      ((a >= d && a <= e) || a == b) &&
      (r < 400
        ? s[Math.floor(r / 20)]++
        : r < 1e3
        ? t[Math.floor((r - 400) / 60)]++
        : r < 3e3 && u[Math.floor((r - 1e3) / 200)]++);
  }
  q = c;
};

var x = function (a) {
  var b = Date.now();
  b = b - p[a % 128];
  b >= 50 && b < 250 && r[Math.floor((b - 50) / 20)]++;
};

var y = function (a) {
  var b = Math.max.apply(Math, a),
    c = [];
  a.forEach(function (a) {
    c.push(Math.floor((a * 63) / (b || 1)));
  });
  return c;
};

function getDataVect() {
  var a = s.concat(t, u);
  return y(a).concat(y(r), [l / 2, m / 2, n / 2, o / 2]);
}

function getData() {
  return encodeNums(getDataVect());
}

function simulateKeydown(keyCode) {
  w(keyCode);
}

function simulateKeyup(keyCode) {
  x(keyCode);
}

(async () => {
  await simulateTyping(password);
  console.log(getData());
})();