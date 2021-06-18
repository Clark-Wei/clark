import React from 'react';
import './style.scss';
import {Collapse} from 'antd';

function Node(props) {
    const {textList, headerList} = props;
    const {Panel} = Collapse;

    let callback = (key) => {
        console.log(key);
    }

    return (
        <div className="Text">
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                {headerList.map((item, key) => {
                    return (
                        <Panel header={item} key={key + 1}>
                            <p>{textList[key]}</p>
                        </Panel>
                    )
                })}
            </Collapse>
        </div>
    );
}

export default Node;
