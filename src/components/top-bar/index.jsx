import { useHistory  } from "react-router-dom";
import { Layout, Menu } from 'antd';


const TopBar = () => {
 
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
  

  const { Header } = Layout;
  
  return(
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{padding:"0 1000px"}} defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick ={onHome}>Home</Menu.Item>
          <Menu.Item key="2" onClick ={onLogin}>Login</Menu.Item>
          <Menu.Item key="3" onClick ={onSignUp}>SignUp</Menu.Item>
        </Menu>
        
      </Header>
    
    </Layout>
  );

};
export default TopBar;