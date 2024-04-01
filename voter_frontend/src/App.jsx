import React from 'react';
import Voter from './components/Voter';
import VoterList from './components/VoterList';
import VoterReport from './components/VoterReport';
import Update from './components/Update';
import Candidate from './components/Candidate';
import CandidateList from './components/CandidateCard';
import CandidateReport from './components/CandidateReport';
import UpdateCandidate from './components/UpdateCandidate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Login" element={<Login />} />
      <Route path="/Voter" element={<Voter />} />
      <Route path="/VoterList" element={<VoterList />} />
      <Route path="/VoterReport" element={<VoterReport />} /> 
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/Candidate" element={<Candidate />} />
      <Route path="/CandidateList" element={<CandidateList />} />
      <Route path="/CandidateReport" element={<CandidateReport />} /> 
      <Route path="/UpdateCandidate/:id" element={<UpdateCandidate />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App