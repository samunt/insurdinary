import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { useRouter } from "next/router";

function MainNavbar() {
    const router = useRouter();

    return (
        <div className="root" style={{overflowX: "hidden"}}>
            <Navbar bg="light" variant="light">
                <ArrowLeftCircleFill size={40} onClick={() => {router.back()}}/>
                <Navbar.Brand href="#home" style={{position: 'relative', left: '50px'}}>
                    Insurdinary Insurance Advice
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default MainNavbar
