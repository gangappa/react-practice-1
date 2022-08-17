import {useState} from 'react'

export default function ObjectUpdate() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
        owner: {
            name: "Gangappa",
            placeOfPurchase: "Bidar"
        }
    });

    let updateCar = (colorName) => {
        setCar(lastState => {
            return { ...lastState, color: colorName }
        })
    }
    
    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                It is a <b style={{
                    color: car.color,
                    textTransform: 'uppercase'
                }}>{car.color}</b> {car.model} from {car.year} owned at place {car.owner.placeOfPurchase}
            </p>

            <button onClick={() => {updateCar('blue')}}>Change BLUE</button>
            <button onClick={() => {updateCar('red')}}>Change RED</button>
            <button onClick={() => {updateCar('black')}}>Change BLACK</button>
        </div>
    )
}