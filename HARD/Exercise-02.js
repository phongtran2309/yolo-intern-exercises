function randomRange(min, max) {
  return Math.floor((Math.random() * (max - min)) + 1) + min;
}
alert(randomRange(2, 5));