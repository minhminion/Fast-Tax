import React from 'react'
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadFile = () => {

    const fileList = [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ];

    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
    };



    return (
        <Upload {...props}>
            <Button>
                <UploadOutlined /> Upload
            </Button>
        </Upload>
    )
}

export default UploadFile
