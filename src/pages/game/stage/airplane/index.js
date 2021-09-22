import React, {useEffect, useState, useRef} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';
import heroImg from '../../../components/img/airplaneImgs/hero.png';

function Airplane(props) {
    let hero = useRef(null) // 我机
    let bg = useRef(null) // 背景

    let [game, setGame] = useState({     // 游戏类
        start: false,   // 游戏开始
        point: 0,   // 积分
    })
    let [mine, setMine] = useState({     // 我机类
        img: heroImg,
        x: 0,
        y: 0,
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
            mine.x = bg.current.scrollWidth / 2 - hero.current.width / 2
            mine.y = bg.current.scrollHeight - hero.current.height
            setMine({...mine})
        }, 0)
    }
    let checkBeyond = (type) => {
        window.addEventListener('keydown', (e) => {
            console.log(e.keyCode)

            switch (e.keyCode) {
                case 37:
                    if (mine.x - 20 < 0) return
                    mine.x -= 20
                    setMine({...mine})
                    break
                case 38:
                    if (mine.y - 20 < 0) return
                    mine.y -= 20
                    setMine({...mine})
                    break
                case 39:
                    if (mine.x + 20 > bg.current.scrollWidth - hero.current.width) return
                    mine.x += 20
                    setMine({...mine})
                    break
                case 40:
                    if (mine.y + 20 > bg.current.scrollHeight - hero.current.height) return
                    mine.y += 20
                    setMine({...mine})
                    break
            }
        })
    }

    return (
        <div className="Airplane" ref={bg}>
            <div className="point-div">分数: <span className="point-num">{game.point}</span></div>
            {!game.start ? (
                <div className="start-button" onClick={start}>
                    <CaretRightOutlined/>
                </div>
            ) : ''}
            <img src={mine.img}
                 style={{top: mine.y, left: mine.x}}
                 className={'hero-img ' + (game.start ? 'show' : '')} ref={hero}/>
        </div>
    );
}

export default Airplane
