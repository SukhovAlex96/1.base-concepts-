class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

addClock(time, callback){
    if(callback === undefined || !time){
        throw new Error('Отсутствуют обязательные аргументы');
    }
    if(this.alarmCollection.some(el => el.time === time)){
        console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback, time, canCall : true});
}
removeClock(time){
    return this.alarmCollection = this.alarmCollection.filter(el => el.time != time);
}
getCurrentFormattedTime(){
    return new Date().toLocaleDateString("ru - Ru", {
        hour: "2-digit", 
        minute: "2-digit",
    });
}
start() {
    if (this.intervalId === null) {
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(el => {
                if (el.time === this.getCurrentFormattedTime() && el.canCall) {
                    el.canCall = false;
                    el.callback();
                }
            }
            )
        }, 1000)
    }
    return
}
stop(){
    clearInterval(this.intervalId);
    this.intervalId = null;
}
resetAllCalls(){
    this.alarmCollection.forEach(el => el.canCall = true);
}
clearAlarms(){
    this.stop();
    this.alarmCollection = [];
    }
}