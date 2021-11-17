import React from 'react'
import {Navbar, Container} from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Props CP</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
