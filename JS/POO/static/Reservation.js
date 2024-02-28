class Reservation{
    constructor(guests,room,days){
        this.guests = guests
        this.room = room
        this.days = days
        //mesma taxa para todas reservas, então damos um atributo estatico
        this.total = `$${days * Reservation.baseFee }`
    }
    //atributo estático
    static baseFee = 150
    //metodo estático
    static showBaseFee(){
        console.log(`Base fee is $${Reservation.baseFee}`)
    }
    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }

}

Reservation.showBaseFee()
console.log(`premium fee is $${Reservation.premiumFee}`)
const r1 = new Reservation(2,'201',5)
console.log(r1)

Reservation.baseFee = 200
const r2 = new Reservation(2,'201',5)
console.log(r2)
console.log(`premium fee is $${Reservation.premiumFee}`)