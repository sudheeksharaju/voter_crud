import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VoterList from './VoterList';

const VoterReport = () => {
const navigate = useNavigate();
const [voter, setVoter] = useState([]);

useEffect(() => {
    axios
        .get("http://localhost:3001/voter")
        .then(
            (response) => {
            // console.log(response.data);
            setVoter(response.data);
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
}, [voter]);
  return (
  <>
    <center><h1>Voter_List</h1>
  </center>
          <div className='header'>
            <div>reg_no</div>
            <div>name</div>
            <div>voterid_no</div>
            <div>gender</div>
            <div>date_birth</div>
            <div>address</div>
            <div>imgurl</div>
            <div>adhaarcardno</div>
            <div>id</div>
        </div>

  {voter.map(
  (voter_list) => {
    
    return(  
    <VoterList 
    key={voter_list.id}
    id={voter_list.id}
    reg_no={voter_list.reg_no}
    name={voter_list.name}
    voterid_no={voter_list.voterid_no}
    gender={voter_list.gender}
    date_birth={voter_list.date_birth}
    address={voter_list.address}
    imgurl={voter_list.imgurl}
    adhaarcardno={voter_list.adhaarcardno}
  
   />
  )
     })
    }
              
   <button onClick={()=>{navigate("/Voter")}}>AddData</button>
   <button onClick={()=>{navigate("/")}}>GoBack</button>
    </>
  )
}
export default VoterReport;
