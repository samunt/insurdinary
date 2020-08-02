import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
function MainNavbar() {
    return (
        <div className="root">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    Insurdinary Insurance Advice
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default MainNavbar
