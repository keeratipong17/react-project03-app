import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


export default function NavBar() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>

                    <Link to="/Home" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>Home</Link> |
                    <Link to="/" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>Login</Link> |
                    <Link to="/about" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>เกี่ยวกับ</Link> |
                    <Link to="/wow/Contact" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>ติดต่อเรา</Link> |
                    <Link to="/sau/dti/register" style={{ textDecoration: "none", marginRight: "10px", marginLeft: "10px" }}>ลงทะเบียน</Link>
                </h4>
                <Header />
            </div>
        </>
    )
}
