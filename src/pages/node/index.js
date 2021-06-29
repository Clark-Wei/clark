import React from 'react';
import './style.scss';
import {Collapse, Button} from 'antd';

function Node(props) {
    const {textList, headerList} = props;
    const {Panel} = Collapse;

    let callback = (key) => {
        console.log(key);
    }



    return (
        <div className="Text">
            <div className="add-button-div">
                <Button type="primary">新增</Button>
            </div>
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
