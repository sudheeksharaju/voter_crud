import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <center>
            <h1>Voting is the right and duty of every citizen</h1>
            <div className='btn'>
            <button onClick={() => { navigate("/Login") }}><h2>Login</h2></button> 
            {/* <button onClick={() => { navigate("/VoterReport") }}><h2>VoterReport</h2></button>
            <button onClick={() => { navigate("/CandidateReport") }}><h2>CandidateReport</h2></button> */}
     </div>
   </center>
 <ul className='photo'>
 <img src='https://tse4.mm.bing.net/th?id=OIP.A8uCO5GfjUKcAe0P40WUjwHaEK&pid=Api&P=0&h=180' />
</ul>
</>  
 ) }
                
export default Home;
