import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    function handleSubmit(e) {
e.preventDefault();
try {
    axios
        .post("http://localhost:3001/voter1", { email, password,firstname,lastname})
        .then(
            (response) =>{

            console.log(response)
            navigate('/VoterReport')
            })
        .catch(
            error => console.log(error)
        )
} catch (error) {

}
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
    
        <input placeholder='Enter firstname'  name='firstname' type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
        <input placeholder='Enter lastname'  name='lastname' type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} required />
        <input placeholder='Enter email'  name='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder='Enter password'  name='password' type='number' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="submit" value="submit" />
         </form>
</div>

)
}


export default Login