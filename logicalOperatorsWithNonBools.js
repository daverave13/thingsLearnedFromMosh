// Falsy
// undefined
// null
// 0
// ''
// NaN

// Anything that is not falsy is truthy
// numbers <> 0
// non empty strings/arrays


// Short-circuiting
// an expression with || will evaluate left to right UNTIL a truthy value is found
console.log(false || 0 || 1 || 'potato' || true); // 1, every value to right of 1 is ignored
// This is useful for returning a user choice or a default value


