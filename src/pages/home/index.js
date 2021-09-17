import React, {useState, useEffect} from 'react';
import './style.scss';
import {Layout, Menu, Avatar} from 'antd';
import ReactIcon from '../components/icon/reactIcon';
import VueIcon from '../components/icon/vueIcon';
import GameIcon from '../components/icon/gameIcon';
import WorkIcon from '../components/icon/workIcon';
import StatisticIcon from '../components/icon/statisticIcon';
import ReactSection from '../react';
import VueSection from '../vue';
import WorkSection from '../work';
import GameSection from '../game';
import StatisticSection from '../statistic';
import AvatarImg from '../components/img/avatar.jpeg';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {HashRouter, Route, Switch} from "react-router-dom";

function Home(props) {
    const {Header, Sider, Content} = Layout;

    let [collapsed, setCollapsed] = useState(false)        // 关闭打开左侧菜单按钮
    let [selectedKeys, setSelectedKeys] = useState('1')    // 当前选中的菜单项 key 数组
    let menuList = [               // 菜单列表
        {id: '1', push: '/react', name: 'React', icon: <ReactIcon width='20' height='20'/>},
        {id: '2', push: '/vue', name: 'Vue', icon: <VueIcon width='20' height='20'/>},
        {id: '3', push: '/game', name: 'Game', icon: <GameIcon width='20' height='20'/>},
        {id: '4', push: '/work', name: 'Work', icon: <WorkIcon width='20' height='20'/>},
        {id: '5', push: '/statistic', name: 'Statistic', icon: <StatisticIcon width='20' height='20'/>},
    ]


    useEffect(() => {
        for (let i = 0; i < menuList.length; i++) {
            if (props.location.pathname.indexOf(menuList[i].push) !== -1) setSelectedKeys(menuList[i].id)
        }
    }, [props.location.pathname])

    return (
        <div className="Home">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                    <div className="logo"/>
                    <Menu mode="inline" selectedKeys={[selectedKeys]}>
                        {menuList.map((item => {
                            return (
                                <Menu.Item key={item.id}
                                           icon={item.icon}
                                           onClick={() => {
                                               props.history.push(item.push)
                                           }}
                                >
                                    {item.name}
                                </Menu.Item>
                            )
                        }))}
                        {/*<Menu.Item key="2"
                                   icon={<VueIcon width='20' height='20'/>}
                                   onClick={() => {
                                       props.history.push('/vue')
                                   }}
                        >
                            Vue
                        </Menu.Item>
                        <Menu.Item key="3"
                                   icon={<GameIcon width='20' height='20'/>}
                                   onClick={() => {
                                       props.history.push('/game')
                                   }}
                        >
                            Game
                        </Menu.Item>
                        <Menu.Item key="4"
                                   icon={<WorkIcon width='20' height='20'/>}
                                   onClick={() => {
                                       props.history.push('/work')
                                   }}
                        >
                            Work
                        </Menu.Item>
                        <Menu.Item key="5"
                                   icon={<StatisticIcon width='20' height='20'/>}
                                   onClick={() => {
                                       props.history.push('/statistic')
                                   }}
                        >
                            Statistic
                        </Menu.Item>*/}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background site-layout-header" style={{padding: 0}}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => {
                                setCollapsed(!collapsed)
                            },
                        })}
                        <div className="avatar-div">
                            <Avatar size="large" src={AvatarImg}/>
                        </div>
                    </Header>
                    <Content className="site-layout-background site-layout-content">
                        {/*{showContent(selectKey)}*/}
                        <HashRouter>
                            <Switch>
                                <Route path="/react" component={ReactSection}></Route>
                                <Route path="/vue" component={VueSection}></Route>
                                <Route path="/game" component={GameSection}></Route>
                                <Route path="/work" component={WorkSection}></Route>
                                <Route path="/statistic" component={StatisticSection}></Route>
                            </Switch>
                        </HashRouter>
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
}

export default Home;
