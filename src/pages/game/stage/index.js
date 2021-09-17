import React, {useEffect, useState} from 'react'
import "./style.scss"
import { Layout } from 'antd';
import Airplane from "./airplane";
import {HashRouter, Route, Switch} from "react-router-dom";

function Stage(props) {
    const { Header, Footer, Content } = Layout;


    useEffect(() => {

    },[])



    return (
        <div className="Stage">

            <Layout className="site-layout">
                <Header className="site-layout-background">Header</Header>
                <Content className="site-layout-content">
                    <div className="content">
                        <HashRouter>
                            <Switch>
                                <Route path="/stage/airplane" component={Airplane}></Route>
                            </Switch>
                        </HashRouter>
                    </div>
                </Content>
                {/*<Footer className="site-layout-background">Footer</Footer>*/}
            </Layout>
        </div>
    );
}

export default Stage
