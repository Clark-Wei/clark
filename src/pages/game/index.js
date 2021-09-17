import React, {useEffect, useState} from 'react'
import "./style.scss"
import {Carousel, Comment, Avatar, Card, Tooltip} from 'antd';
import airplaneBgImg from '../components/img/airplaneImgs/bg.jpg';
import {Link} from 'react-router-dom'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

function GameSection(props) {
    const {history} = props;

    const {Meta} = Card;

    useEffect(() => {
    }, [])

    let ExampleComment = ({children}) => (
        <Comment
            actions={[<span key="comment-nested-reply-to">Reply to</span>]}
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure).
                </p>
            }
        >
            {children}
        </Comment>
    )

    const contentStyle = {
        height: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }

    return (
        <div className="Game">
            <Carousel autoplay>
                <div className="banner">
                    <img src={airplaneBgImg} alt="" className="img-list"/>
                </div>
                <div className="banner">
                    <h3 style={contentStyle}>2</h3>
                </div>
            </Carousel>

            <div className="content-box">
                <Link to={'/stage'} target={'_blank'}>
                    <Card
                        hoverable
                        className="card-list"
                        cover={<img alt="example" src={airplaneBgImg}/>}
                    >
                        <Meta title="飞机大战"
                              className="meta"
                              description="《飞机大战》这是一款经典飞行射击类游戏，精美绚丽的画面，整体环境主要还是围绕太空为主，高保真的音效，为玩家呈现一场不一样射击体验。简单的触屏操作，触屏按住随意一个地方，左右移动，便可自动攻击敌人，上下移动亦可躲避强敌。在飞机的左下角还有两个道具槽，直接点击就可以发动道具效果，前提是你必须要吃到道具。玩家在游戏中要做的就是驾驶着最新战机，向敌人的总部发起了冲击。除了传承经典的飞行射击类元素之外，同时还加入了商店系统，通过购买相关配件和物品升级武器和飞机。另外还有装备系统，可以让你的飞机变得更强悍，替换相关配件让你火力全开。"
                        />
                    </Card>
                </Link>

            </div>


            <ExampleComment>
                <ExampleComment>
                    <ExampleComment/>
                    <ExampleComment/>
                </ExampleComment>
            </ExampleComment>
        </div>
    );
}

export default GameSection
