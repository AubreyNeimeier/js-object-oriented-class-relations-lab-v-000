let store = {drivers: [], passengers: [], trips: []}
// initialize store with key of items and users that each point to an empty array
 
let driverId = 0
let passId = 0
let tripId = 0

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
        return this.trips().map(trip => {return trip.driver()
        })
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
        return store.drivers.find(function(driver){
            return driver.id === this.driverId}.bind(this))
    }

    passenger(){
        return store.passengers.find(function(pass){
            return pass.id === this.passengerId}.bind(this))
    }
}