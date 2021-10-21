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
    let [downKeys, setDownKeys] = useState([])  // 被按下的key


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
            let handleRise = (value, obj) => {
                value -= 20
                obj.y = value
            }
            bullet.list.push({
                id: new Date().getTime(),
                x: mine.x + hero.current.scrollWidth / 2 - bullet.width / 2,
                y: mine.y - hero.current.height / 2
            })
            if (!bullet.interVal) {
                bullet.interVal = setInterval(() => {
                    bullet.list.forEach((item, index) => {
                        if (item.y >= 0 - bullet.height) {
                            handleRise(item.y, item)
                        } else {
                            bullet.list.splice(index, 1)
                        }
                        setBullet({...bullet})
                    })
                }, 20)
            }
        }
        // 移动速率
        setInterval(() => {
            let strDown = downKeys.join()
            if (strDown.indexOf('37') > -1) moveLeft()
            if (strDown.indexOf('38') > -1) moveTop()
            if (strDown.indexOf('39') > -1) moveRight()
            if (strDown.indexOf('40') > -1) moveDown()
            if (strDown.indexOf('37') > -1 || strDown.indexOf('38') > -1 || strDown.indexOf('39') > -1 || strDown.indexOf('40') > -1) setMine({...mine})
        }, 70)

        // 子弹发射频率
        setInterval(()=>{
            if (downKeys.join().indexOf('32') > -1) {
                riseBullet()
                setBullet({...bullet})
            }
        },100)

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
