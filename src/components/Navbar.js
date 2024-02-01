import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return ( 
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/windikite">GitHub</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
     );
}

export default Navbar;