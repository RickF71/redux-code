function sum(a,b,c,z) {
    return a*z+b+c;
}

const curry = fn => (a,z) => b => c => {
    return fn (a,b,c,z)
}

const curriedFunc = curry(sum);

console.log(curriedFunc(2,10)(3)(5));

