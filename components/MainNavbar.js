import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
function MainNavbar(props) {
    return (
        <div className="root">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="insurdinary logo"
                        src="/logo.png"
                        className="d-inline-block align-top"
                        height="30"
                        width="120"
                    />{' '}
                    Life Insurance Advice
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default MainNavbar
