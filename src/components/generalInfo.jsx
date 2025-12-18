import React, { useState } from "react";

function GeneralInfo({ profile, setProfile }) { // function first letter must be caps

     const handleChange = (e) => {
      const { name, value } = e.target;
      // Gets the name of the input, "fullName" and then the value of the input "Alan Liu"
      setProfile(prev => ({ ...prev, [name]: value }));
      // Sets the previous values and gets the name of the input and input value
    }

    return (
        <div>
            <h3>General Info</h3>

            <div className="info-inputs">
                <label>
                Name: 
                <input name="fullName" value={profile.fullName || ''} onChange={handleChange}/>
                </label>

                <label>
                Email: 
                <input name="email" value={profile.email || ''} onChange={handleChange}/>
                </label>

                <label>
                Phone Number: 
                <input name="phone" value={profile.phone || ''} onChange={handleChange}/>
                </label>
            </div>
        
        </div>
    )
}

export default GeneralInfo;