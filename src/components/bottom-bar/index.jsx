import { Layout,Menu} from "antd";
import { useHistory } from "react-router-dom";

const BottomBar =()=>{

    const { Footer } = Layout;

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

    return(
        <>

        <Layout>

        <Footer style={{ textAlign: 'center' }}>

        <Menu theme="dark" mode="horizontal" style={{padding:"0 150px"}} defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Chat App ©Tech Camp MEAR Stack</Menu.Item>
          <Menu.Item key="2" onClick ={onHome}>Home</Menu.Item>
          <Menu.Item key="3" onClick ={onLogin}>Login</Menu.Item>
          <Menu.Item key="4" onClick ={onSignUp}>SignUp</Menu.Item>
        </Menu>
       
       </Footer>

        </Layout>

        </>
    );
}
export default BottomBar;