import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { useParams, NavLink, useNavigate } from 'react-router-dom';




const Details = () => {


    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);


    const { id } = useParams("");
    console.log(id);

    const history = useNavigate();


    const getdata = async () => {



        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            alert("error");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    },)

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deleteuser);

        if (res2.status === 422 || !deletedata) {
        } else {
            console.log("user deleted");
            history("/");
        }

    }
    return (
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name}</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className='add_btn'>
                        <NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-warning mx-2'><CreateIcon /></button></NavLink>
                        <button className='btn btn-danger' onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                    </div>
                    <div className='row'>
                        <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name: <span >{getuserdata.name}</span></h3>
                            <h3 className='mt-3'>Age:  <span >{getuserdata.age}</span></h3>
                            <p className='mt-3'><MailOutlineIcon />Email: <span >{getuserdata.email}</span></p>
                            <p className='mt-3'><WorkIcon />Occupation: <span>{getuserdata.work}</span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md-6 col-12'>
                            <p className='mt-5'><SmartphoneIcon /> Moblie: <span>{getuserdata.mobile}</span> </p>
                            <p className='mt-3'><LocationSearchingIcon /> Location: <span>{getuserdata.add}</span> </p>
                            <p className='mt-3'>Description: <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details