import { Layout, Menu } from "antd";
import { UserOutlined } from '@ant-design/icons';


const SideBar = ()=>{

    const{Content,Sider}=Layout;
    const { SubMenu } = Menu;


    return(
        <>
         <Layout>
         <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '100px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 260 }}>Content</Content>
        </Layout>
      </Content>
         </Layout>
        </>
    );

}

export default SideBar;