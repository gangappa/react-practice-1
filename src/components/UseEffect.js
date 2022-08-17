import {useState, useEffect} from 'react'
export default function UseEffect() {
    let [timer, setTimer] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            setTimer((timer < 5 ? ++timer : timer))
        }, 1000)

        return () => {}
    }, [timer])
    return (
        <div>
            <p>I have reached {timer} seconds</p>
        </div>
    )
}