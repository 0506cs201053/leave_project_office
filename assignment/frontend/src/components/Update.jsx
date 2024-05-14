import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
 
const Update = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        mobileNumber: "",
        email: ""
       
    });
 
    // const location = useLocation();
    const history = useHistory();
 
    // const userId = location.pathname.split("/register")[2];
 
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:4000/register/${id}`)
                .then(res => {
                    setUser(res.data[0]);
                })
                .catch(err => console.log(err));
        }
    }, [id]);
 
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            if (id && user) {
                await axios.put(`http://localhost:4000/register/${id}`, user);
                history.push("/edit");
            }
        } catch (err) {
            console.log(err);
        }
    };
 
  return (
    <div className="container">
            <h1>Edit Form</h1>
            <form>
                <div className="mb-3 mt-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Mobile Number:</label>
                    <input type="number" className="form-control" placeholder="Enter number" name="mobileNumber" value={user.mobileNumber} onChange={handleChange} />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Update</button>
            </form>
            <p ><Link to="/edit">See all users</Link></p>
        </div>
    
  );
};
 
export default Update;