import React, {useEffect, useState, useRef} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';
import heroImg from '../../../components/img/airplaneImgs/hero.png';
import bulletImg from '../../../components/img/airplaneImgs/bullet.png';

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
        bullet: false,
    })
    let [mine, setMine] = useState({     // 我机类
        img: heroImg,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    })
    let [enemyPlane, setEnemyPlane] = useState({     // 敌机类
    })
    let [bullet, setBullet] = useState({     // 子弹类
        img: bulletImg,
        width: 30,
        height: 30 + 22,
        interVal: null,
        list: [
            // {
            //     x: 0,
            //     y: 0,
            //     interVal: null
            // }
        ]
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

        // 确定我方位置
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

        // 子弹上升方法
        let riseBullet = () => {
            // 子弹上升操作
            let handleRise = (value, obj) => {
                value -= 20
                obj.y = value
                setBullet({...bullet})
            }
            if (!bullet.interVal) {
                bullet.interVal = setInterval(() => {
                    bullet.list.forEach((item, index) => {
                        if (item.y >= 0 - bullet.height) {
                            handleRise(item.y, item)
                        } else {
                            bullet.list.splice(index,1)
                            setBullet({...bullet})
                        }
                    })
                }, 50)
                setBullet({...bullet})
            }
        }
        window.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 32:
                    bullet.list.push({
                        id: new Date().getTime(),
                        x: mine.x + hero.current.scrollWidth / 2 - bullet.width / 2,
                        y: mine.y - hero.current.height / 2
                    })
                    setBullet({...bullet})
                    // rise()
                    riseBullet()
                    break
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

            {bullet.list.map((item) => {
                return (
                    <img key={item.id}
                         src={bullet.img}
                         className='bullet'
                         style={{top: item.y, left: item.x, width: bullet.width, height: bullet.height}}
                    />
                )
            })}
        </div>
    );
}

export default Airplane
