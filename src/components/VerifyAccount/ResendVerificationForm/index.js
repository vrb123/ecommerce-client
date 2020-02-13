import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
import "./index.css";

class NormalResendVerificationForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
       
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Resend verification
          </Button>
        </Form.Item>

      </Form>
    );
  }
}

const WrappedNormalResendVerificationForm = Form.create({ name: 'normal_resend_verification' })(NormalResendVerificationForm);

export default WrappedNormalResendVerificationForm;