let store = {drivers: [], passengers: [], trips: []}
// initialize store with key of items and users that each point to an empty array
 
let driverId = 0

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
            pass.driverId === this.id
        })
    }
}