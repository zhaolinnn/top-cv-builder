import React, { useState } from "react";

function GeneralInfo({setFullName, setEmail}) { // function first letter must be caps

    return (
        <div>
            <h3>General Info</h3>

            <div className="info-inputs">
                <label>
                Name: 
                <input name="Name" onChange={e => setFullName(e.target.value)}/>
                </label>

                <label>
                Email: 
                <input name="Email" onChange={e => setEmail(e.target.value)}/>
                </label>

                <label>
                Phone Number: 
                <input name="Number" />
                </label>

            </div>
           

        </div>
    )
}

export default GeneralInfo;