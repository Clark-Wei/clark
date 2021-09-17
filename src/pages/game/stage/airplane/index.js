import React, {useEffect, useState} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';
import heroImg from '../../../components/img/airplaneImgs/hero.png';

function Airplane(props) {
    let [game, setGame] = useState({     // 游戏类
        start: false,   // 游戏开始
        point: 0,   // 积分
    })
    let [mine, setMine] = useState({     // 我机类
        img: <heroImg/>
    })
    let [enemyPlane, setEnemyPlane] = useState({     // 敌机类
    })
    let [bullet, setBullet] = useState({     // 子弹类
    })
    let [blowUp, setBlowUp] = useState({     // 爆炸类
    })

    useEffect(() => {
        console.log(game.start)
    }, [])

    return (
        <div className="Airplane">
            <div className="point-div">分数: <span className="point-num">{game.point}</span></div>
            {!game.start ? (
                <div className="start-button" onClick={() => {
                    game.start = true
                    setGame({...game})
                }}>
                    <CaretRightOutlined/>
                </div>
            ) : ''}
        </div>
    );
}

export default Airplane
