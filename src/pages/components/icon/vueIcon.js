import React from 'react';

function VueIcon(props) {
    const {width, height} = props

    return (
        <span role="img" aria-label="video-camera" className="anticon anticon-video-camera ant-menu-item-icon">
        <svg t="1623994293482" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3136" width={width} height={height}><path
            d="M76.416 164.309333L512 916.096 947.584 167.936v-3.626667H778.24L514.56 617.258667 251.989333 164.352z"
            fill="#41B883" p-id="3137"></path><path
            d="M252.032 164.309333l262.485333 452.992L778.24 164.309333h-158.848L515.584 342.613333 412.16 164.266667z"
            fill="#35495E" p-id="3138"></path></svg>
        </span>
    );
}

export default VueIcon;
