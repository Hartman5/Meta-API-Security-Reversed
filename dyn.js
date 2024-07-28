var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
var modules = [
    7,
    27,
    35,
    54,
    58,
    141,
    165,
    166,
    258,
    267,
    270,
    297,
    317,
    323,
    328,
    329,
    423,
    527,
    551,
    619,
    757,
    772,
    827,
    864,
    876,
    926,
    1127,
    1138,
    1317,
    1421,
    1478,
    1496,
    1667,
    1912,
    2104,
    2111,
    2190,
    2580,
    2609,
    2658,
    2776,
    2915,
    2981,
    3019,
    3032,
    3401,
    3419,
    3462,
    3515,
    3665,
    3790,
    3828,
    3829,
    3871,
    4171,
    4246,
    4328,
    4360,
    4414,
    4517,
    4521,
    4664,
    4685,
    4705,
    4748,
    4763,
    4890,
    4947,
    4953,
    4999,
    5003,
    5072,
    5094,
    5217,
    5237,
    5261,
    5269,
    5332,
    5389,
    5423,
    5508,
    5540,
    5836,
    5842,
    5884,
    5888,
    5895,
    5943,
    5954,
    5968,
    6231,
    6372,
    6421,
    6533,
    6545,
    6589,
    6639,
    6659,
    6687,
    6729,
    6730,
    6918,
    7026,
    7027,
    7133,
    7331,
    7410,
    7414,
    7422,
    7438,
    7457,
    7511,
    7515,
    7542,
    7622,
    7628,
    7631,
    7679,
    7723
]

// input your module array above

var $1 = []
var $2 = null

for(x of modules) {
    $1[x] = 1
}

function toString() {
    var a = [];
    for (var b = 0; b < $1.length; b++)
        a.push($1[b] ? 1 : 0);
    return a.length ? i(a.join("")) : ""
}

function h(a) {
    a = a.toString(2);
    var b = "0".repeat(a.length - 1);
    return b + a
}

function i(a) {
    a = (a + "00000").match(/[01]{6}/g);
    var b = "";
    for (var c = 0; a != null && c < a.length; c++)
        b += g[parseInt(a[c], 2)];
    return b
}

function toCompressedString() {
    if ($1.length === 0) return "";
    if ($2 != null) return $2;
    var a = []
        , b = 1
        , c = $1[0] || 0
        , d = c.toString(2);
    for (var e = 1; e < $1.length; e++) {
        var f = $1[e] || 0;
        f === c ? b++ : (a.push(h(b)),
        c = f,
        b = 1)
    }
    b && a.push(h(b));
    return $2 = i(d + a.join(""))
}

console.log(toCompressedString())