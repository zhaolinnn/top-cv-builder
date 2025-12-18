import React, { useState } from "react";

function Education({ education, setEducation }) { // function first letter must be caps

     const handleChange = (e) => {
      const { name, value } = e.target;
      // Gets the name of the input, "fullName" and then the value of the input "Alan Liu"
      setEducation(prev => ({ ...prev, [name]: value }));
      // Sets the previous values and gets the name of the input and input value
    }

    return (
        <div>
            <h3>Education</h3>

            <div className="info-inputs">
                <label>
                School: 
                <input name="school" value={education.school || ''} onChange={handleChange}/>
                </label>

                <label>
                Graduation Date: 
                <input name="gradDate" value={education.gradDate || ''} onChange={handleChange}/>
                </label>

                <label>
                Major: 
                <input name="major" value={education.major || ''} onChange={handleChange}/>
                </label>

                <label>
                GPA: 
                <input name="gpa" value={education.gpa || ''} onChange={handleChange}/>
                </label>

            </div>
           

        </div>
    )
}

export default Education;