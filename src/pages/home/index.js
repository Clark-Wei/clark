import React, {useState} from 'react';
import './style.scss';
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';


function Home(props) {
    let [collapsed, setCollapsed] = useState(false)    // 关闭打开左侧菜单按钮

    const {Header, Sider, Content} = Layout;

    let toggle = () => {
        setCollapsed(!collapsed)
    };

    return (
        <div className="Home">

            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <div className="logo"/>
                    <Menu mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    <Content className="site-layout-background site-layout-content">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}

export default Home;