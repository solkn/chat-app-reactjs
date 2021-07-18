import { useHistory  } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Navbar,Nav,Form,FormControl,Button,input } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
          import { 
            MDBContainer,
            MDBNavbar, 
            MDBNavbarBrand, 
            MDBNavbarToggler,
            MDBIcon,
            MDBNavbarNav,
            MDBNavbarItem,
            MDBNavbarLink,
            MDBBtn,
            MDBDropdown,
            MDBDropdownToggle,
            MDBDropdownMenu,
            MDBDropdownItem,
            MDBDropdownLink,
            MDBCollapse
          } from 'mdb-react-ui-kit';


const TopBar = () => {
 
  const [showBasic, setShowBasic] = useState(false);

  let history = useHistory();

  const onHome = () =>{
    history.push("/");


  };

  const onLogin = ()=>{
    history.push("/login");

  };

  const onSignUp =()=>{
      history.push("/signup");
  };

  const onComment =()=>{
    history.push("/signup");
};
  

  
  return(
   <>
  
  <MDBNavbar expand='lg' dark bgColor='primary'>
                <MDBContainer fluid>
                  <MDBNavbarBrand  onClick={onHome}>Home</MDBNavbarBrand>
  
                  <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                  >
                    <MDBIcon icon='bars' fas />
                  </MDBNavbarToggler>
  
                  <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                      
                      <MDBNavbarItem>
                        <MDBNavbarLink onClick={onLogin}>Login</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink onClick={onSignUp}>SignUp</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBDropdown>
                          <MDBDropdownToggle tag='a' className='nav-link'>
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem>
                              <MDBDropdownLink>Gmail</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBDropdownLink>Twitter</MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBDropdownLink>FaceBook</MDBDropdownLink>
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavbarItem>

                    </MDBNavbarNav>
  
                    <Form className='d-flex input-group w-auto'>
                      <input type='search' className='form-control' placeholder='search' aria-label='Search' />
                      <MDBBtn color='primary'>Search</MDBBtn>
                    </Form>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
  
</>
  );

};
export default TopBar;

          
      