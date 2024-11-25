//1-задание
class Cars {
    constructor(options) {
        this.models=options.models;
        this.color=options.color;
        this.wheels=options.wheels;
    }
    start(){
        console.log("Машина заведена");
    }
}
class Car1 extends Cars {
    constructor(options) {
        super(options);
        this.motors=options.motors;
    }
}
const car1 = new Car1({
    models:true,
    color:"white",
    wheels:4,
    motors:null
})
console.log(car1)
class Car2 extends Car1 {
    constructor(options) {
        super(options);
        this.windows = options.windows;
    }
}
const car2 = new Car2({
    models:false,
    color:"silver",
    wheels:4,
    motors:null,
    windows:5
})
console.log(car2)
class Car3 extends Car2 {
    constructor(options) {
        super(options);
        this.roll = options.roll;
    }
}
const car3 = new Car3({
    models:true,
    color:"blue",
    wheels:4,
    motors:1,
    windows:3,
    roll:1
})
console.log(car3)
car3.start()

//2-задание
class trafficLight{
    constructor() {
        this.red=document.querySelector(".traffic_color.red")
        this.yellow=document.querySelector(".traffic_color.yellow")
        this.green=document.querySelector(".traffic_color.green")
    }
    change(color) {
        this.red.classList.remove("active")
        this.yellow.classList.remove("active")
        this.green.classList.remove("active")

        switch (color.toLowerCase().trim()) {
            case "красный":
                this.red.classList.add("active");
                alert("stop");
                break;
            case "желтый":
                this.yellow.classList.add("active");
                alert("wait");
                break;
            case "зелёный":
                this.green.classList.add("active");
                alert("GO");
                break;

        }
    }
    start(){
        const color= prompt("Введите цвет: красный, желтый, зелёный")
        if(color){
            this.change(color)
        }else {
            alert("Напишите один из этих цветов : красный, желтый, зелёный")
        }
    }
}
const traffic=new trafficLight()
traffic.start()













