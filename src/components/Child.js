export default function Child(props) {
    return (
        <div>
            <p>This is child component</p>
            <button onClick={() => {
                props.data({
                    data: {
                        name: "Gangappa",
                        sirname: "Hugar"
                    }
                })
            }}>click here to send the data to parent</button>
        </div>
    )
}