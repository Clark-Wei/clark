import React from 'react';
import './style.scss';
import {Collapse, Button} from 'antd';

function ReactSection(props) {
    const {Panel} = Collapse;

    let callback = (key) => {
        console.log(key);
    }
    const reactText = [
        'react content 1',
        'react content 2',
        'react content 3',
    ]
    const reactHeader = [
        'This is react header 1',
        'This is react header 2',
        'This is react header 3',
    ]


    return (
        <div className="Text">
            <div className="add-button-div">
                <Button type="primary">新增</Button>
            </div>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                {reactText.map((item, key) => {
                    return (
                        <Panel header={item} key={key + 1}>
                            <p>{reactHeader[key]}</p>
                        </Panel>
                    )
                })}
            </Collapse>


        </div>
    );
}

export default ReactSection;
