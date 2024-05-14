import React, { useState } from 'react';
import '../css/LeaveApplicationForm.css'

function LeaveApplicationForm() {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    startDate: '',
    endDate: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, send data to server
    console.log('Leave application data:', formData);
    // You can also reset the form fields here
    // setFormData({
    //   userName: '',
    //   mobileNumber: '',
    //   startDate: '',
    //   endDate: '',
    //   comments: ''
    // });
  };

  return (
    <div className="leave-application-container">
      <h2>Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder='Enter Your Name' required/>
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder='Enter Monile Number' required/>
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required/>
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required/>
        </div>
        <div>
          <label>Comments:</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} required/>
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default LeaveApplicationForm;
