import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../css/edit.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// import RegistrationPage from './RegistrationPage';
import { Link } from 'react-router-dom';

const Edit= ()=>{
    const [registers, setRegisters]=useState([]);
     useEffect(()=>{
        axios.get('http://localhost:4000/register')
        .then(res =>setRegisters(res.data))
        .catch(err =>console.log(err));

     },[])
     console.log(registers);

     const handleDelete= async (id)=>{
        try{
            await axios.delete(`http://localhost:4000/register/ ${id}`)
        window.location.reload();
        }catch(err){
            console.log(err);

        }
     };
     return(
        <div className="edit">
            <div>
                <h2>Admin data</h2>
                <div>

                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>M.Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            registers.map((register, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{register.id}</td>
                                        <td>{register.name}</td>
                                        <td>{register.mobileNumber}</td>
                                        <td>{register.email}</td>
                                        <td>
                                            <Link to={`/read/${register.id}`} className="btn btn-success mx-2">Read</Link>
                                            <Link to= {`/update/${register.id}`} className="btn btn-info mx-2">edit</Link>
                                            <button onClick={()=>handleDelete(register.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

     )
}

export default Edit;