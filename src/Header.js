import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';



function Header(){
    let user = JSON.parse(localStorage.getItem("user-info"))
    const navigate = useNavigate()
    function logout(){
      localStorage.clear()
      navigate('/login')
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">E-comm</Navbar.Brand>
            <Nav className="me-auto navbar-wrapper">
              {
              localStorage.getItem("user-info") ? 
                <>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">Update Product</Link>
                </>
               : 
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              }
            </Nav>
            {
              user? 
            
                <Nav>
                  <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                : null
            }
          </Container>
        </Navbar>
      </div>
    );
}

export default Header