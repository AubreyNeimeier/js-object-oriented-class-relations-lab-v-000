

let store = {drivers: [], passengers: [], trips: []}
// initialize store with key of items and users that each point to an empty array
 
let driverId = 0
let passId = 0
let tripId = 0

// a driver has many trips and HAS MANY passengers THROUGH trips. 
// notice how the passengers methods reveals the passenger through the trips() method. 
// trips is the 'join' table in this case. we use trips to find the passengers and drivers for each other because the driver does not have a passengerId attribute. 
class Driver{
    constructor(name){
        this.name = name;
        this.id = ++ driverId;

        store.drivers.push(this)
    }

    trips(){
        return store.trips.filter(trip => {
            return trip.driverId === this.id
        })
    }


    passengers(){
        return this.trips().map(trip => {return trip.passenger()
        })
    }
}

 /* notice how this logic is EXACTLY the same as trips() above? THis code was close to working except we needed a way to return the passenger on the trip (the trip that matches criteria)   
    passengers(){
        return store.trips.filter(trip => {
            return trip.driverId === this.id
        })
    }

*/

// passengers has many trips
// and HAS MANY drivers THROUGH trips

class Passenger{
    constructor(name){
        this.name = name;
        this.id = ++ passId;
    
        store.passengers.push(this)
    }
    trips(){
        return store.trips.filter(trip => {
            return trip.passengerId = this.id
        })
    }

    drivers(){
        return this.trips().map(trip => {return trip.driver()})
    }


}

class Trip{
    constructor(driver, passenger){
        this.id = ++ tripId;

        if(driver){
            this.driverId = driver.id;
        }

        if(passenger){
            this.passengerId = passenger.id;
        }

        store.trips.push(this)
    }

    driver(){
        return store.drivers.find(driver => {
            return driver.id === this.driverId
        });
    }

    passenger(){
        return store.passengers.find(passenger => {
            return passenger.id === this.passengerId;
          });
    }

    //callback function with old school way (this is global), thus we use bind.
    /* 
    passenger() {
        return store.passengers.find(function(passenger){
          return passenger.id === this.passengerId}.bind(this))
      }




    using this arrow function :
    An arrow function does not have its own this; the this value of the enclosing execution context is 
    used. Thus, in the following code, the this within the function that is passed to setInterval has 
    the same value as this in the enclosing function:
    */
}