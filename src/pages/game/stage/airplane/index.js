import React, {useEffect, useState, useRef} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';
import heroImg from '../../../components/img/airplaneImgs/hero.png';

function Airplane(props) {
    let hero = useRef(null) // 我机

    let [game, setGame] = useState({     // 游戏类
        start: false,   // 游戏开始
        point: 0,   // 积分
    })
    let [mine, setMine] = useState({     // 我机类
        img: heroImg
    })
    let [enemyPlane, setEnemyPlane] = useState({     // 敌机类
    })
    let [bullet, setBullet] = useState({     // 子弹类
    })
    let [blowUp, setBlowUp] = useState({     // 爆炸类
    })


    useEffect(() => {
        console.log(hero)
    }, [])

    // 游戏开始
    let start = () => {
        game.start = true
        setGame({...game})

        setTimeout(() => {
            window.addEventListener('keydown', (e) => {
                console.log(e.keyCode)
                switch (e.keyCode) {
                    case 37:
                        keyMove('left');
                        break
                    case 38:
                        keyMove('top');
                        break
                    case 39:
                        keyMove('right');
                        break
                    case 40:
                        keyMove('bottom');
                        break
                }
            })
        }, 1000)
    }
    let keyMove = (type) => {
        console.log(hero.current)
    }

    return (
        <div className="Airplane">
            <div className="point-div">分数: <span className="point-num">{game.point}</span></div>
            {!game.start ? (
                <div className="start-button" onClick={start}>
                    <CaretRightOutlined/>
                </div>
            ) : ''}
            <img src={mine.img} className={'hero-img ' + (game.start ? 'show' : '')} ref={hero}/>
        </div>
    );
}

export default Airplane
