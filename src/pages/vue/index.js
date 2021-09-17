import React from 'react';
import './style.scss';
import {Collapse, Button} from 'antd';

function VueSection(props) {
    const {Panel} = Collapse;

    let callback = (key) => {
        console.log(key);
    }

    const vueText = [
        'vue content 1',
        'vue content 2',
        'vue content 3',
    ]
    const vueHeader = [
        'This is vue header 1',
        'This is vue header 2',
        'This is vue header 3',
    ]

    return (
        <div className="Text">
            <div className="add-button-div">
                <Button type="primary">新增</Button>
            </div>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                {vueText.map((item, key) => {
                    return (
                        <Panel header={item} key={key + 1}>
                            <p>{vueHeader[key]}</p>
                        </Panel>
                    )
                })}
            </Collapse>


        </div>
    );
}

export default VueSection;
