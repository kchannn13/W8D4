class Clock {
    constructor(){
        debugger;
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
        this.printTime();
        // const that = this;
        // const unboundTick = this._tick;
        // const boundTick = unboundTick.bind(this);
        // setInterval(boundTick, 1000);
        // setInterval(this._tick.bind(this), 1000);
        setInterval(() => {
            this._tick();
        }, 1000);
    };

    printTime() {
        const time = `${this.hours}::${this.minutes}::${this.seconds}`;
        console.log(time);
    };

    _tick() {
        // debugger;
        this.seconds ++
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes ++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours ++;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }
        this.printTime();
    }
};

// const clock = new Clock();

const readline = require('readline');

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft > 0){
        reader.question("Please input a number", function(answer) {
            const parsed = parseInt(answer);
            console.log(sum += parsed);
            addNumbers(sum, (numsLeft - 1), completionCallback);
        })
    } else {
        completionCallback(sum);
        reader.close();
    }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind(context) {
    
}