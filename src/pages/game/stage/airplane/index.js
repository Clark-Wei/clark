import React, {useEffect, useState} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';

function Airplane(props) {
    let [game, setGame] = useState({  // 游戏类
        start: false,   // 游戏开始
    })

    useEffect(() => {
        console.log(game.start)
    }, [])


    return (
        <div className="Airplane">
            <div className="start-button">
                <CaretRightOutlined/>
            </div>
        </div>
    );
}

export default Airplane
