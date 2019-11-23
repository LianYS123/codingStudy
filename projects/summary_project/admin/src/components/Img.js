import { Upload, Icon, Modal } from 'antd';
import filelibs from '../libs/filelibs'
import React from 'react'
class Img extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    exist:false
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await filelibs.getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  beforeUpload = file => {
    this.setState({exist:true})
    this.props.beforeUpload(file)
    return false
  }
  handleRemove= () =>{
    this.setState({exist:false})
  }
  render() {
    const { previewVisible, previewImage, exist } = this.state;
    return (
      <div className="clearfix">
        <Upload
          listType="picture-card"
          beforeUpload={this.beforeUpload} //返回false取消上传
          onPreview={this.handlePreview}  //返回要上传的文件,当预览按钮点击时触发
          onRemove={this.handleRemove}
        >
          {exist ? null : <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
          </div>}  
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="img" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default Img