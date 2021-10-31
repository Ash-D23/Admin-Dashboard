import React from 'react';
import Topbar from '../components/topbar/topbar';
import { Link } from "react-router-dom";
import './home.css';
import Button from '@material-ui/core/Button';

function home() {
    return (
        <div>
            <Topbar /> 
            <div className="container">
                <h2>Admin Dashboard</h2>
                <div className="btn-container">
                    <Link className="Link" to="/newproduct"><Button color="primary" variant="contained"> Create New Product </Button></Link>
                    
                </div>


            </div>
        </div>
    )
}

export default home
