# reactive-variable-manager
=========================

a manager class for for the meteor reactive variable class (https://github.com/ruzz/Meteor-ReactiveVariable.git) which probably makes the ReactiveVariable a much more interesting and useful tool in your toolbox. 

feel free to pull, fork, frak, or pontificate. i'm open like an all night diner. 

## Install:  
`mrt add reactive-variable-manager` (i haven't yet released it on atmosphere, please check back)

## Initialization:

```javascript
var manager = new ReactiveVariableManager( optionalConfigObject );
```
it can take an optional config object on creation with optional properties

### Initialization Config Properties:
#### initialize:
  an array of ReactiveVariable config objects (see ReactiveVariable for examples)

#### errorHandler:
  an optional errorHandler function of your choosing.
  your function will recieve one variable  ```errorString``` use it wisely. 

#### example:
```javascript
{ 
  initialize: [
    {
        name: "selectedGame"
        ,defaultValue: 'game1'
        ,dictionary: Session
    },
    {
        name: "selectedRoom"
        ,defaultValue: 'room1'
        ,dictionary: Session
    },
  ],
  errorHandler: function( errorString ){
    console.log( 'this is the error string', errorString );
  }  
}
```

## API:

the api more or less wraps the existing known api for ReactiveVariable so you should probably read that api at some point but for the impatient among you. 

### get( name )

  ```manager.get( 'selectedGame' ); //returns game1```

### set( name, value )

  ```manager.set( 'selectedGame', 'game2' ); //selected game is now 'game2' ```

### has( name )

  ```manager.has( 'selectedGame' ); //returns true```

### baseValue( name )
  this is super handy if you have a hook not firing as expected, you can see what the pre-hook values are

  ```manager.baseValue( 'selectedGame' ); //returns baseValue of ReactiveVariable```


### native( name )
  returns the native ReactiveVariable not just its value. 
  
  ```reactiveVar = manager.native( 'selectedGame' ); //returns the native ReactiveVariable object```

### empty()
  emptys **ALL** the managed ReactiveVariables. this will likely break your whole app, be careful. 
  
  ```manager.empty(); //all your hard work is gone gone gone```
  
### registerReactiveVariable( ReactiveVariableConfigObject )
  creates and registers a new reactive variable 
  
  ```manager.registerReactiveVariable( ReactiveVariableConfigObject );```  
  
### unregisterReactiveVariable( name )
  removes/destroys a managed ReactiveVariable 
  
  ```manager.unregisterReactiveVariable( 'selectedGame' );```  




 
