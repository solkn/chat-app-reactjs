import { Layout, Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';


const SideBar = ()=>{

    const{Content,Sider}=Layout;
    const { SubMenu } = Menu;


    return(
        <>
         <Layout>
         <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '10px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Amharic']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Languages">
                <Menu.Item key="1">Amharic</Menu.Item>
                <Menu.Item key="2">English</Menu.Item>
                <Menu.Item key="3">Arabic</Menu.Item>
                <Menu.Item key="4">French</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{position:"relative"}} >
            <img src="/assets/chat.jpg" alt="" style={{width:1000}}/>
            <div style={{position:"absolute", top:50,left:130,
                 fontSize:30,color:"brown"}}>Abel</div>
                 <div style={{position:"absolute", top:30,left:420,
                 fontSize:30,color:"brown"}}>Chat App</div>
                 <div style={{position:"absolute", top:50,left:830,
                 fontSize:30,color:"brown"}}>Kidist</div>
          </Content>
        </Layout>
      </Content>
         </Layout>
        </>
    );

}

export default SideBar;