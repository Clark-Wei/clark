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
    let [direction, setDirection] = useState({    // 方向
        left: false,
        top: false,
        right: false,
        bottom: false,
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

        // 移动
        move()
    }
    // 移动
    let move = () => {
        // 改变方向
        let changeDirection = (type, state) => {
            direction[type] = state
            setDirection({...direction})
        }
        // 验证距离
        let checkmargin = (type, state) => {
            if (type === 'x')
                if (state === '-')
                    if (mine.x - 20 < 0) {
                        return false
                    } else {
                        return true
                    }
                else {
                    if (mine.x + 20 > bg.current.scrollWidth - hero.current.width) {
                        return false
                    } else {
                        return true
                    }
                }

            if (type === 'y')
                if (state === '-')
                    if (mine.y - 20 < 0) {
                        return false
                    } else {
                        return true
                    }
                else {
                    if (mine.y + 20 > bg.current.scrollHeight - hero.current.height) {
                        return false
                    } else {
                        return true
                    }
                }
        }

        window.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    if (checkmargin('x', '-')) mine.x -= 20
                    if (direction.top && checkmargin('y', '-')) mine.y -= 20
                    if (direction.bottom && checkmargin('y', '+')) mine.y += 20
                    setMine({...mine})
                    changeDirection('left', true)
                    break
                case 38:
                    if (checkmargin('y', '-')) mine.y -= 20
                    if (direction.left && checkmargin('x', '-')) mine.x -= 20
                    if (direction.right && checkmargin('x', '+')) mine.x += 20
                    setMine({...mine})
                    changeDirection('top', true)
                    break
                case 39:
                    if (checkmargin('x', '+')) mine.x += 20
                    if (direction.top && checkmargin('y', '-')) mine.y -= 20
                    if (direction.bottom && checkmargin('y', '+')) mine.y += 20
                    setMine({...mine})
                    changeDirection('right', true)
                    break
                case 40:
                    if (checkmargin('y', '+')) mine.y += 20
                    if (direction.left && checkmargin('x', '-')) mine.x -= 20
                    if (direction.right && checkmargin('x', '+')) mine.x += 20
                    setMine({...mine})
                    changeDirection('bottom', true)
                    break
            }
        })
        window.addEventListener('keyup', (e) => {
            switch (e.keyCode) {
                case 37:
                    changeDirection('left', false)
                    break
                case 38:
                    changeDirection('top', false)
                    break
                case 39:
                    changeDirection('right', false)
                    break
                case 40:
                    changeDirection('bottom', false)
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
