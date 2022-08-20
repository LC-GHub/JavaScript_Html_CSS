const add = (x, y) => {
    return x + y;
}

const PI = 3.14159;

function square(x) {
    return x * x;
}

const math = {
    add: add,
    PI: PI,
    sqaure: square
}

module.exports = math
//module.exports creates an empty object {}, a faster way

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;