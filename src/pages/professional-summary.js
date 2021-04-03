import React from 'react';
import ProfSummary from "../assets/professionalSummary.png"

const professionalSummary=() =>{
    return (
        <>
        <div style={{background:'coral', height: '80px'}}>
            <h1>Professional Summary</h1>
        </div>

        <img className='w-100' src= { ProfSummary }/>

        </>
    );
}

export default professionalSummary;