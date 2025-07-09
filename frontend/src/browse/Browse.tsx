import React from 'react';
import './Browse.css'

function Browse(): React.JSX.Element{
    return (
    <>
        <div className='header'>
            <h3><input type="text" placeholder='Where to?' style= {{border: '2px solid #317A88'}}/></h3>
            <h3>or</h3> 
            <h3> <button style= {{backgroundColor: '#317A88', color: 'white', border: 'none', borderRadius: '5px', fontSize: '14px'}}>Inspire Me</button> </h3>
        </div>
        <h3 id='Logo'>Logo</h3>
    </>
    );
}

export default Browse;