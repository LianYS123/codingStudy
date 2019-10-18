abstract class Shape {
    abstract area():number
}
class Rect extends Shape{
    constructor(private width:number,private height:number) {
        super();
    }
    area(): number {
        return this.width * this.height;
    }
}
class Circle extends Shape{
    constructor(private radius:number) {
        super();
    }
    area():number{
        return Math.PI * this.radius * this.radius;
    }
}

let arr:Shape[];
arr.push(new Rect(10,20))
arr.push(new Circle(10))

// arr.forEach(shape => console.log(shape.area()));
for(let shape of arr){
    console.log(shape.area());
}
