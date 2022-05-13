function randomRange(min, max) {
  return Math.floor((Math.random() * (max - min)) + 1) + (min - 1);
}
console.log(randomRange(1, 5));