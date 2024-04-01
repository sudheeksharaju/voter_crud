import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Update = () => {
     const {id} = useParams();
    const navigate = useNavigate();
    const [reg_no, setRegNo] = useState("")
    const [name, setName] = useState("")
    const [voterid_no, setVoterId] =useState("")
    const [gender, setGender] =useState("")
    const [date_birth, setDateBirth] =useState("")
    const [address, setAddress] =useState("")
    const [imgurl, setImgUrl] =useState("")
    const [adhaarcardno, setAdhaarCard] =useState("")
    
    useEffect(() => {
      axios.post("http://localhost:3001/getUpdateData", {id})
              .then(
                  (response) => {
                    setRegNo(response.data.reg_no);
                   setName(response.data.name);
                   setVoterId(response.data.voterid_no);
                   setGender(response.data.gender);
                   setDateBirth(response.data.date_birth);
                   setAddress(response.data.address);
                 
                   setImgUrl(response.data.imgurl);
                   setAdhaarCard(response.data.adhaarcardno);
                 

                  
                  })
              .catch(
                  err =>{console.log(err)},
              )
      },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/Update", {reg_no,name,voterid_no,gender,date_birth,address,imgurl,adhaarcardno})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
      }
  };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter vnr'  name='pnumber' type='number' value={reg_no} onChange={(e) => setRegNo(e.target.value)} required />
            <input placeholder='Enter km_with_dr'  name='km_with_dr' type='number' value={name} onChange={(e) => setName(e.target.value)} required />
            <input placeholder='Enter with_rent'  name='with_rent' type='number' value={voterid_no} onChange={(e) => setVoterId(e.target.value)} required />
            <input placeholder='Enter km_without_dr'  name='km_without_dr' type='number' value={gender} onChange={(e) => setGender(e.target.value)} required />
            <input placeholder='Enter without_rent'  name='without_rent' type='number' value={date_birth} onChange={(e) => setDateBirth(e.target.value)} required />
            <input placeholder='Enter km_without_dr'  name='km_without_dr' type='number' value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input placeholder='Enter km_without_dr'  name='km_without_dr' type='number' value={imgurl} onChange={(e) => setImgUrl(e.target.value)} required />
            <input placeholder='Enter km_without_dr'  name='km_without_dr' type='number' value={adhaarcardno} onChange={(e) => setAdhaarCard(e.target.value)} required />

             <input type="submit" value="Submit" />
             </form>
    </div>
  )
}

export default Update;