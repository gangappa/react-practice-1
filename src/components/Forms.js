import {useState} from 'react'
export default function Forms() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let login = (e) => {
        e.preventDefault();

        console.log("Username: ", username);
        console.log("Password: ", password);
    }

    return (
        <div style={
            {
                height: '200px',
                backgroundColor: '#dadada',
                width: '400px',
                border: 'black 1px dotted'
            }
        }>
            <center>
                <h1 style={
                    {
                        textAlign: 'center'
                    }
                }>Logi Here</h1>
                <hr />
                <form onSubmit={login}>
                    <input 
                        type="text" 
                        placeholder='username'
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <input 
                        type="password" 
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <br />
                    <input type="submit" value="LOGIN" />
                </form>
            </center>
        </div>
    )
}