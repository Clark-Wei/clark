import React, {useEffect, useState, useRef} from 'react'
import "./style.scss"
import {CaretRightOutlined} from '@ant-design/icons';
import heroImg from '../../../components/img/airplaneImgs/hero.png';
import bulletImg from '../../../components/img/airplaneImgs/bullet.png';
import enemyImg from '../../../components/img/airplaneImgs/enemy.png';

const ImgArr = []
for (let i = 1; i < 20; i++) {
    ImgArr.push('explosion' + i)
}
const ticks = ImgArr.map(item => require('../../../components/img/airplaneImgs/' + item + '.png'))


function Airplane(props) {

    const MOVE_RATE = 70   // 移动速率
    const BULLET_RATE = 100   // 子弹发射频率
    const BULLET_RISE_RATE = 20   // 子弹上升速度
    const ENEMY_RATE = 2000   // 敌机刷新速度
    const ENEMY_DOWN_RATE = 100   // 敌机下降速度

    let hero = useRef(null) // 我机
    let bg = useRef(null) // 背景

    let [game, setGame] = useState({     // 游戏类
        start: false,   // 游戏开始
        point: 0,   // 积分
        moveTimer: null,   // 我机移动定时器
        bulletTimer: null,   // 子弹发射定时器
        bulletRiseTimer: null,   // 子弹上升定时器
        enemyTimer: null,   // 敌机出现定时器
        enemyDownTimer: null,   // 敌机下降定时器
    })
    let [mine, setMine] = useState({     // 我机类
        x: 0,
        y: 0,
    })
    let [enemyPlane, setEnemyPlane] = useState({     // 敌机类
        width: 90,
        height: 60,
        list: []
    })
    let [bullet, setBullet] = useState({     // 子弹类
        width: 30,
        height: 52,
        list: []
    })
    let [blowUp, setBlowUp] = useState({     // 爆炸类
        width: 300,
        height: 300,
        list: []
    })
    let [downKeys, setDownKeys] = useState([])  // 被按下的key


    useEffect(() => {
        // ticks.forEach((item) => {
        //     blowUp.list.push(item.default)
        // })
        // setBlowUp({...blowUp})
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
        // 左移
        let moveLeft = () => {
            if (checkmargin('x', '-')) mine.x -= 20
        }
        // 上移
        let moveTop = () => {
            if (checkmargin('y', '-')) mine.y -= 20
        }
        // 右移
        let moveRight = () => {
            if (checkmargin('x', '+')) mine.x += 20
        }
        // 下移
        let moveDown = () => {
            if (checkmargin('y', '+')) mine.y += 20
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
            let handleRise = (value, obj, key) => {
                value -= 20
                obj.y = value
                enemyPlane.list.forEach((item, index) => {
                    if (
                        obj.x + bullet.width >= item.x &&
                        obj.x <= item.x + enemyPlane.width &&
                        obj.y <= item.y + enemyPlane.height &&
                        obj.y >= item.y
                    ) {
                        enemyPlane.list.splice(index, 1)
                        setEnemyPlane({...enemyPlane})
                        bullet.list.splice(key, 1)
                        game.point++
                        setGame({...game})
                        blowUp.list.push({
                            img: ticks[0].default,
                            x: obj.x,
                            y: obj.y,
                        })
                        setBlowUp({...blowUp})
                        console.log(blowUp)
                    }
                })
            }
            bullet.list.push({
                id: new Date().getTime(),
                x: mine.x + hero.current.scrollWidth / 2 - bullet.width / 2,
                y: mine.y - hero.current.height / 2
            })
            setBullet({...bullet})
            // 子弹上升
            if (!game.bulletRiseTimer) {
                game.bulletRiseTimer = setInterval(() => {
                    bullet.list.forEach((item, index) => {
                        if (item.y >= 0 - bullet.height) {
                            handleRise(item.y, item, index)
                        } else {
                            bullet.list.splice(index, 1)
                        }
                        setBullet({...bullet})
                    })
                }, BULLET_RISE_RATE)
            }
        }

        // 创造敌机
        let madeEnemy = () => {
            // 敌机下降
            let handleDown = (value, obj) => {
                value += 20
                obj.y = value
            }

            enemyPlane.list.push({
                id: new Date().getTime(),
                x: Math.floor(Math.random() * (bg.current.scrollWidth - enemyPlane.width)),
                y: 0
            })
            setEnemyPlane({...enemyPlane})

            // 敌机下降
            if (!game.enemyDownTimer) {
                game.enemyDownTimer = setInterval(() => {
                    enemyPlane.list.forEach((item, index) => {
                        if (item.y < bg.current.scrollHeight - enemyPlane.height) {
                            handleDown(item.y, item)
                        } else {
                            enemyPlane.list.splice(index, 1)
                        }
                        setEnemyPlane({...enemyPlane})
                    })
                }, ENEMY_DOWN_RATE)
            }
        }

        // 移动速率
        game.moveTimer = setInterval(() => {
            let strDown = downKeys.join()
            if (strDown.indexOf('37') > -1) moveLeft()
            if (strDown.indexOf('38') > -1) moveTop()
            if (strDown.indexOf('39') > -1) moveRight()
            if (strDown.indexOf('40') > -1) moveDown()
            if (strDown.indexOf('37') > -1 || strDown.indexOf('38') > -1 || strDown.indexOf('39') > -1 || strDown.indexOf('40') > -1) setMine({...mine})
        }, MOVE_RATE)

        // 子弹发射频率
        game.bulletTimer = setInterval(() => {
            if (downKeys.join().indexOf('32') > -1) {
                riseBullet()
                setBullet({...bullet})
            }
        }, BULLET_RATE)

        // 敌机出现频率
        game.enemyTimer = setInterval(() => {
            madeEnemy()
        }, ENEMY_RATE)

        setGame({...game})

        window.addEventListener('keydown', (e) => {
            e.preventDefault()
            downKeys.indexOf(e.keyCode) < 0 && downKeys.push(e.keyCode);
            downKeys.sort((a, b) => a - b)
            setDownKeys([...downKeys])
        })
        window.addEventListener('keyup', (e) => {
            downKeys.splice(downKeys.indexOf(e.keyCode), 1)
        })
    }

    return (
        <div className="Airplane" ref={bg}>
            <div className="point-div">
                分数:
                <span className="point-num number">{game.point}</span>
            </div>
            {!game.start ? (
                <div className="start-button" onClick={start}>
                    <CaretRightOutlined/>
                </div>
            ) : ''}

            <img src={heroImg}
                 style={{top: mine.y, left: mine.x}}
                 className={'hero-img ' + (game.start ? 'show' : '')} ref={hero}/>

            {bullet.list.map((item) => {
                return (
                    <img key={item.id}
                         src={bulletImg}
                         className='bullet'
                         style={{top: item.y, left: item.x, width: bullet.width, height: bullet.height}}
                    />
                )
            })}

            {enemyPlane.list.map((item) => {
                return (
                    <img key={item.id}
                         src={enemyImg}
                         className='enemy'
                         style={{top: item.y, left: item.x, width: enemyPlane.width, height: enemyPlane.height}}
                    />
                )
            })}

            {blowUp.list.map((item) => {
                return (
                    <img key={item.img}
                         src={item.img}
                         className='blowUp'
                         style={{top: item.y, left: item.x, width: blowUp.width, height: blowUp.height}}
                    />
                )
            })}


        </div>
    );
}

export default Airplane
