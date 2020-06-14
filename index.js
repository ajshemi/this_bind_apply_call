let blueButton = new ButtonJS("Blue");

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
console.log(module.getX());
//expected output: 42
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
console.log(unboundGetX.call(module));
//expected output: 42
console.log(unboundGetX.apply(module));
//expected output :42
