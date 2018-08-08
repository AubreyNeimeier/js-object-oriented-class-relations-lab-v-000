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
        return store.passengers.filter(pass =>{
            return pass.driverId === this.id
        })
    }
}


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


}

class Trip{
    constructor(driver, passenger){
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = ++ tripId;

        store.trips.push(this)
    }

    driver(){
        return store.drivers.find(function(driver){
            return driver.tripId === this.id
        })
    }

    passenger(){
        return store.passengers.find(function(pass){
            return pass.tripId === this.id
        })
    }
}