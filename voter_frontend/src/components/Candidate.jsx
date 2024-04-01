import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Candidate = () => {
    const [reg_no, setRegNo] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [symbol, setSymbol] = useState('')
    const [imgurl, setImgurl] = useState('')
    const [party_name, setPartyName] = useState('')


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/insert", { reg_no,name,address,symbol,imgurl,party_name })
                .then(
                    response => console.log(response)
                )
                .catch(
                    err => console.log(err)
                )

        } catch (error) {

        }


    }
    return (
        <><div>
            <form onSubmit={handleSubmit}>
            <input placeholder='Enter reg_no' type='number' name='reg_no' value={reg_no} onChange={(e) => setRegNo(e.target.value)} required />
                <input placeholder='Enter Name' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder='Enter address' type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input placeholder='Enter symbol' type='text' name='symbol' value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
                <input placeholder='Enter symbol' type='text' name='imgurl' value={imgurl} onChange={(e) => setImgurl(e.target.value)} required />
                <input placeholder='party_name' type='text' name='party_name' value={party_name} onChange={(e) => setPartyName(e.target.value)} required />
                <input type="submit" value="submit" />
            </form>

        </div>
    <button onClick={() => navigate('/')}>GO BACK</button></>
    )
}
export default Candidate;