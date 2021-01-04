type Callback = () => void

export class Eventing{

    events:{[key:string]:Callback[]}={}

    on=(eventName:string, callback:Callback):void=>{
        const handlers=this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName]=handlers;
    }

    trigger=(eventName:string):void=>{
        const eventHandler=this.events[eventName]
        if(!eventHandler || eventHandler.length === 0) return;

        eventHandler.forEach(callback=>{
            callback();
        })
    }
}
