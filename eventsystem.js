class EventSystem{
    //callbacks

    constructor(){
        this.callbacks = []
    }

    listen(callback){
        this.callbacks.push(callback)
    }

    deafen(callback){
        this.callbacks.splice(this.callbacks.findIndex(v => v === callback),1)
    }

    trigger(value){
        for(var callback of this.callbacks){
            callback(value)
        }
    }
}

class Box{
    constructor(value){
        this.onchange = new EventSystem();
        this.batHearing = new EventSystem();
        this.value = value
    }

    get(){
        return this.value
    }

    set(value,silent){
        var old = this.value
        this.value = value
        if(old != value){
            this.batHearing.trigger(this.value)
            if(!silent){
                this.onchange.trigger(this.value)
            }
        }
    }
}
