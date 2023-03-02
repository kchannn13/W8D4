class Clock {
    constructor(){
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
        
    };

    printTime() {
        const time = `${this.hours}::${this.minutes}::${this.seconds}`;
        console.log(time);
    }
}