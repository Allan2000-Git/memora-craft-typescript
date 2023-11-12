
import { Container, Navbar } from 'react-bootstrap'

const CustomNavbar = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark" style={{height:"80px"}}>
                <Container>
                <Navbar.Brand href="#home">
                    Memora Craft
                </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNavbar