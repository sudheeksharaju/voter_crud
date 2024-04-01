import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './CandidateCard';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
    const navigate = useNavigate();
    const [CandidateReport, setCandidateReport] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:3001/contacts")
            .then(
                (response) => {
                    // console.log(response.data)
                    setCandidateReport(response.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
    }, [CandidateReport])
    // console.log(contacts);

    return (
        <>
            <center><h3>Contacts</h3></center>
            {
                CandidateReport.map(candidate =>

                    <Card
                        key={candidate.id}
                        id={candidate.id}
                        name={candidate.c_name}
                        address={candidate.address}
                        symbol={candidate.symbol}
                       imgurl={candidate.imgurl}
                        party_name={candidate.party_name}
                    />
                )
            }


            <button onClick={() => navigate('/Candidate')}>INSERT DATA</button>
            <button onClick={() => navigate('/Candidate')}>Go Back</button>

        </>
    )
}

export default Contacts;
