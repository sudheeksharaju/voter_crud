import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CandidateCard(props){ 
  const navigate = useNavigate()
  const handleDelete = () => {
    const id = props.id;
    try {
        axios.post("http://localhost:3001/delete",{id})
        .then((res) => {console.log(res)})
       .catch((err) => {console.log(err)});

    } catch (error) {
        console.log(error);
    }
  }


    return(<div className="card">
           <div className="top">
           <h2 className="name">{props.name}</h2>
           <img
            className="circle-img"
            src={props.symbol}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
        <p className="info">{props.reg_no}</p>
        <p className="info">{props.address}</p>
          <p className="info">{props.party_name}</p>
         
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => {navigate(`/update/${props.id}`)}}>update</button>
        </div>
        </div>
    )
}

export default CandidateCard;
