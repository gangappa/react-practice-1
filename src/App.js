import {useState} from 'react'
import Child from './components/Child'
import Customers from './components/Customers'
import Forms from './components/Forms'
import ObjectUpdate from './components/ObjectUpdate'
import Students from './components/Students'
import UseEffect from './components/UseEffect'
import UseMemo from './components/UseMemo'

function App() {
	const [name, changeName] = useState("Gangappa")
	const [image, showImage] = useState(true)
	
	let clicked = () => {
		changeName("Hugar");
		showImage(!image);
	}

	let students = [
		{
			id: 1, name: "Gangappa"
		}, {
			id: 2, name: "Gabbar"
		}, {
			id: 3, name: "Sahib"
		}
	]

	let show_components = (param = true) => {
		if (param) {
			return <Students data={students} />
		} else {
			return <Customers />
		}
	}

	function showDataFromChildToParent(data) {
		console.log("Data received from child is : ", data);
	}

	return (
		<div>
			<h1>{name}</h1>

			<button onClick={() => {clicked()}}>Clicke me</button>
			<hr />
			{
				image ? <img height={'100'} src="https://www.breezemasti.com/wp-content/uploads/Anupama-Parameswaran-wiki-age-height-family-husband-movies.jpg" alt="" /> : null
			}
			<hr />
			{
				show_components(false)
			}

			{
				(true ? <Students data={students} /> : <Customers />)
			}
			<hr />
			<Forms />
			<hr />
			<ObjectUpdate />
			<hr />
			<UseEffect />
			<hr />
			<h2>Data from child to parent</h2>
			<Child data={showDataFromChildToParent} />
			<hr />
			<UseMemo />
		</div>
	)
}

export default App