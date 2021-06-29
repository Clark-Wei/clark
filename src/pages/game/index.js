import React, {useEffect, useState} from 'react'
import "./style.scss"
import {Carousel, Comment, Avatar} from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

function Game(props) {

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
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }

    return (
        <div className="Game">
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>


            <ExampleComment>
                <ExampleComment>
                    <ExampleComment/>
                    <ExampleComment/>
                </ExampleComment>
            </ExampleComment>
        </div>
    );
}

export default Game
