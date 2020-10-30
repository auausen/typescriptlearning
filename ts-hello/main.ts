class Point {
  X: number;
  constructor(private x?: number, private y?: number) {
    this.x = x;
    this.y = y;
  }
  public draw() {
    console.log("X:" + this.x + ", Y: " + this.y);
  }

  getX() {
    return this.x;
  }

  // setX(value){
  //   if (value < 0)
  //     throw new Error('value cannot be less than 0.');

  //     this.x = value;

  // }
}

let point = new Point(1, 2);
let x = point.getX();
point.X = 10;
point.draw();
