this package holds two classes `EventSystem`,  meant to provide the same functionality as C#'s `event` keyword does, and `Box` to synergize with it.
js already has an Event class built in but that class is aimed to be used with html elements where this is meant to be more generic.

example  
```
class Player{
    constructor(){
        this.deathEvent = new EventSystem()
        this.health = new Box(100)
        
        this.health.onchange.listen((value) => {
            if(value < 0){
                this.deathEvent.trigger()
            }
        })
    }
}
```
**EventSystem**

``constructor()``  
simply initializes an eventsystem ('change' or 'death' for example)

``listen(callback(value))``  
adds a callback that will be called when the event is triggered

``deafen(callback)``  
removes a callback from the eventsystem. make sure the function is you pass to this function is the exact same one you added with listen else it doesn't work.

``trigger(value)``  
causes all functions that are listening to be called with the supplied value.

**Box**

``constructor(value)``  
creates a Box with a value

``Box.value``  
internal value

``Box.onchange``  
an eventsystem that will be triggered when the internal value changes

``Box.batHearing``  
same as Box.onchange but is also triggered when Box.set is called with silent set to true

``get()``  
gets the internal value (not strictly nescessary but for completeness sake)

``set(value,silent:bool)``  
sets the internal and triggers the onchange event
