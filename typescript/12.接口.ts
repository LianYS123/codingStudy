interface Shape1 {
    area():number
}
class Rect1 implements Shape1{
    constructor(private width:number,private height:number) {
    }
    area(): number {
        return this.width * this.height;
    }
}
class Circle1 implements Shape1{
    constructor(private radius:number) {
    }
    area():number{
        return Math.PI * this.radius * this.radius;
    }
}

let arr1:Shape1[];
arr1.push(new Rect1(10,20))
arr1.push(new Circle1(10))

for(let shape of arr1){
    console.log(shape.area());
}
