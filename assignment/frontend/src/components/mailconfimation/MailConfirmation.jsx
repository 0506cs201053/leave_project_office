// // MailConfirmation.js
// import React from 'react';

// const MailConfirmation = ({ formData }) => {
//     if (!formData || Object.keys(formData).length === 0) {
//         return <div>Loading...</div>;
//       }

//   return (
//     <div>
//       <h2>Mail Confirmation</h2>
//       <p>To: {formData && formData.to ? formData.to : 'N/A'}</p>
//       <p>From: {formData && formData.from ? formData.from : 'N/A'}</p>
//       <p>Subject: {formData && formData.subject ? formData.subject : 'N/A'}</p>
//       <p>Start Date: {formData && formData.startDate ? formData.startDate : 'N/A'}</p>
//       <p>End Date: {formData && formData.endDate ? formData.endDate : 'N/A'}</p>
//       <p>Name: {formData && formData.name ? formData.name : 'N/A'}</p>
//       <p>Mobile Number: {formData && formData.mobileNumber ? formData.mobileNumber : 'N/A'}</p>
//       <p>Message: {formData && formData.message ? formData.message : 'N/A'}</p>
//     </div>
//   );
// };

// export default MailConfirmation;
