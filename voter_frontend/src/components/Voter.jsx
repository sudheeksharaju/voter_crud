import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Voter = () => {
    const navigate = useNavigate();
    const [reg_no, setRegNo] = useState("")
    const [name, setName] = useState("")
    const [voterid_no, setVoterId] =useState("")
    const [gender, setGender] =useState("")
    const [date_birth, setDateBirth] =useState("")
    const [address, setAddress] =useState("")
    const [imgurl, setImgUrl] =useState("")
    const [adhaarcardno, setAdhaarCard] =useState("")
    const [id, setId] =useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/insert", { reg_no,name,voterid_no,gender,date_birth,address,imgurl,adhaarcardno,id})
                .then(
                    (response) =>{

                    console.log(response)
                    navigate('/')
                    })
                .catch(
                    error => console.log(error)
                )
        } catch (error) {

        }
    }
  return (
    <>
    <div> 
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter id'  name='id' type='id' value={id} onChange={(e) => setId(e.target.value)} required />
            <input placeholder='Enter reg_no'  name='pnumber' type='number' value={reg_no} onChange={(e) => setRegNo(e.target.value)} required />
            <input placeholder='Enter name'  name='km_with_dr' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder='Enter voterid_no'  name='with_rent' type='number' value={voterid_no} onChange={(e) => setVoterId(e.target.value)} required />
            <input placeholder='Enter gender'  name='km_without_dr' type='text' value={gender} onChange={(e) => setGender(e.target.value)} required />
            <input placeholder='Enter date_birth'  name='without_rent' type='number' value={date_birth} onChange={(e) => setDateBirth(e.target.value)} required />
            <input placeholder='Enter address'  name='km_without_dr' type='text' value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input placeholder='Enter imgurl'  name='km_without_dr' type='text' value={imgurl} onChange={(e) => setImgUrl(e.target.value)} required />
            <input placeholder='Enter adhaarcardno'  name='km_without_dr' type='number' value={adhaarcardno} onChange={(e) => setAdhaarCard(e.target.value)} required />
            
           
            
        </form>
    </div>
    <button onClick={() => navigate('/voterReport')}>Go Back</button>
    <button onClick={()=>{navigate("/CandidateReport")}}>submit</button>

    </>
  )
}

export default Voter;

