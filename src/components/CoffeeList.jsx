
import { useState } from "react"

export default function CoffeeList() {
    const [coffees, setCoffees] = useState()
    const getCoffees = (temperature) => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(res => res.json())
            .then(setCoffees) // (data => setCoffees(datta))
            .catch(alert)

    }
    return (
        <main>
            <div>
                <button onClick={() => getCoffees('hot')}>Hot</button>
                <button onClick={() => getCoffees('iced')}>Iced</button>
            </div>
            <section>
                {coffees &&
                    coffees.map(coffee => (
                        <div key={coffee.id} className='coffee-card'> 
                            <img src={coffee.image} alt={coffee.title} />
                            <h2> {coffee.little} </h2>
                            <p>{coffee.description}</p>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}
