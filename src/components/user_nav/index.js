import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { logOut } from "../../store/user/action";
import { useState } from 'react';
          import { 
            MDBContainer,
            MDBNavbar, 
            MDBNavbarBrand, 
            MDBNavbarToggler,
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

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { MDBIcon} from 'mdbreact';


const UserNavBar = () => {

  const [showBasic, setShowBasic] = useState(false);

 
    let dispatch = useDispatch();
    let history = useHistory();

  const onUserHome = () =>{
    history.push("/user");

  };

   
  const onMessenger = () =>{
    history.push("/messenger");
  };

  const onLogOut = () => {
      dispatch(logOut());
      history.push("/login");
   };

  
  return(
    <MDBNavbar expand='lg' dark bgColor='primary'>
    <MDBContainer fluid>
      <MDBNavbarBrand  onClick={onUserHome}>Home</MDBNavbarBrand>

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
            <MDBNavbarLink onClick={onMessenger}>Messenger</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBIcon icon="user-alt" size="2x"/>       
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink>Settings</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={onLogOut}>LogOut</MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>

        </MDBNavbarNav>

        <Form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='search for friends' aria-label='Search' />
          <MDBBtn color='primary'>Search</MDBBtn>
        </Form>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  );

};
export default UserNavBar;