import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    imageLink: '',
    gender: '',
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedSkills = checked
      ? [...formData.skills, name]
      : formData.skills.filter((skill) => skill !== name);

    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);

    setFormData({
      name: '',
      email: '',
      website: '',
      imageLink: '',
      gender: '',
      skills: [],
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      website: '',
      imageLink: '',
      gender: '',
      skills: [],
    });
  };

  return (
    <div>
      <h1 className='heading'>Student Enrollment Form</h1>
      <div className='form' style={{ display: 'flex' }}>
        <div className='reg-form' >
          <form onSubmit={handleSubmit}>
           
            <div className='name'>
            <label>
     <span>  Name:</span> <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            
            </label></div>
            <br />
            <div className='email'>
            <label>
        <span>      Email:</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label></div>
            <br />
           
            <div className='website'>
            <label>
         <span> Website:</span> 
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </label></div>
            <br />

            <div className='img'>
            <label>
             Image link:
              <input
                type="text"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleChange}
              />
            </label>
            </div>

            <br /><div className='gender'>
            <label>
             <span> Gender:</span>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label></div>
            <br /><div className='skills'>
            <label>
              <span>
              Skills:</span>
              <input
                type="checkbox"
                name="Python"
                checked={formData.skills.includes('Python')}
                onChange={handleCheckboxChange}
              />
              Python
              <input
                type="checkbox"
                name="SQL"
                checked={formData.skills.includes('SQL')}
                onChange={handleCheckboxChange}
              />
              SQL
              <input
                type="checkbox"
                name="nodejs"
                checked={formData.skills.includes('Nodejs')}
                onChange={handleCheckboxChange}
              />
              Node.js
            </label></div>
            <br />
            <br/>
          
            <button className='blue-button' type="submit">Enroll students</button>

            <button  className='red-button' type="button" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>

        <div style={{ flex: 1 }}>
          <h2> Enrolled students</h2>
          <table className='table-style'>
            <thead>
              <tr>
                <th className='first-column'>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='first-column'>
                {formData.name}<br/>
                {formData.email}<br/>
                {formData.website}<br/>
                {formData.gender} <br/>
                {formData.skills.join(', ')}<br/></td>
              
               
               
                <td rowSpan={5}> 
                {formData.imageLink && (
           
              <img
                src={formData.imageLink}
                alt="Profile"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              
           
          )}</td>
           </tr>
         
             
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
