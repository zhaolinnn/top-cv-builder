import React from 'react';

// ...existing code...
function Experiences({ experiences, setExperiences }) {

  // update the experience at `index`: set `fieldName` to `newValue`
  const updateExperience = (index, fieldName, newValue) => {
    setExperiences(prevList =>
      prevList.map((item, i) =>
        i === index ? { ...item, [fieldName]: newValue } : item
      )
    );
  };

  // returns an onChange handler bound to the given index
  const handleInputChange = (index) => (e) => {
    const { name, value } = e.target; // name should match object key (company, role, ...)
    updateExperience(index, name, value);
  };

  const addExperience = () => {
    const newItem = {
      id: Date.now().toString(),
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setExperiences(prev => [...prev, newItem]);
  };

  const removeExperience = (index) => {
    setExperiences(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Experiences</h3>

      {experiences.map((exp, idx) => (
        <div key={exp.id || idx} className="experience-inputs">
          <label>
            Company:
            <input name="company" value={exp.company || ''} onChange={handleInputChange(idx)} />
          </label>

          <label>
            Role:
            <input name="role" value={exp.role || ''} onChange={handleInputChange(idx)} />
          </label>

          <label>
            Start Date:
            <input name="startDate" value={exp.startDate || ''} onChange={handleInputChange(idx)} />
          </label>

          <label>
            End Date:
            <input name="endDate" value={exp.endDate || ''} onChange={handleInputChange(idx)} />
          </label>

          <label>
            Description:
            <input name="description" value={exp.description || ''} onChange={handleInputChange(idx)} />
          </label>

          <button type="button" onClick={() => removeExperience(idx)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={addExperience}>Add experience</button>
    </div>
  );
}

export default Experiences;