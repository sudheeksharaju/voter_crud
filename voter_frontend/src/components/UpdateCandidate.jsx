import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

    const { id } = useParams()
    const [reg_no, setRegNo] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [symbol, setSymbol] = useState('')
    const [imgurl, setImgurl] = useState('')
    const [party_name, setPartyName] = useState('')

    useEffect(() => {
        try {
            axios
                .post("http://localhost:3001/getData", { id })
                .then(
                    (response) => {
    
                        console.log(response.data)
                        setRegNo(response.data.reg_no)
                        setName(response.data.name)
                        setAddress(response.data.address)
                        setSymbol(response.data.symbol)
                        setImgurl(response.data.imgurl)
                        setPartyName(response.data.party_name)
    
                    }
                )
                .catch(
                    (err) => console.log(err)
                )
    
    
        } catch (error) {
            console.log(error)
        }
    }, [id])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/update", { id,reg_no,name,address,symbol,imgurl,party_name})
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
        <div>
            <form onSubmit={handleSubmit}>
            <input placeholder='Enter reg_no' type='number' name='number' value={reg_no} onChange={(e) => setRegNo(e.target.value)} required />
                <input placeholder='Enter Name' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder='Enter Address' type='text' name='Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                <input placeholder='Enter symbol' type='text' name='symbol' value={symbol} onChange={(e) => setSymbol(e.target.value)} required />
                <input placeholder='Enter imgurl' type='text' name='imgurl' value={imgurl} onChange={(e) => setImgurl(e.target.value)} required />
                <input placeholder='party_name' type='text' name='party_name' value={party_name} onChange={(e) => setPartyName(e.target.value)} required />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Update