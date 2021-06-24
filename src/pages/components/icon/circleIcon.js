import React, {useEffect, useState} from 'react';

function CircleIcon(props) {
    const {width, height, type, className} = props

    let [color, setColor] = useState('#cccccc')  // icon的颜色

    useEffect(() => {
        switch (type) {
            case 'true':
                setColor('#52c41a');
                break;
            case 'false':
                setColor('#ff4d4f');
                break;
            case 'wait':
                setColor('#faad14');
                break;
        }
    }, [])

    return (
        <span role="img" aria-label="video-camera" className="anticon anticon-video-camera ant-menu-item-icon">
            <svg t="1624548579094" className={"icon " + className ? className : ''} viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1049" width={width ? width : "11"}
                 height={height ? height : '11'}><path
                d="M512 1024c282.763636 0 512-229.236364 512-512S794.763636 0 512 0 0 229.236364 0 512s229.236364 512 512 512z m0-186.181818a325.818182 325.818182 0 1 1 0-651.636364 325.818182 325.818182 0 0 1 0 651.636364z"
                p-id="1050" fill={color}></path></svg>
        </span>
    );
}


export default CircleIcon;
