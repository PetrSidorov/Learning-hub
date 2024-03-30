class Chameleon {
  constructor(color = "green") {
    this.color = color;
  }

  static changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
}

const freddie = new Chameleon("green");
freddie.changeColor("orange");
// orange
