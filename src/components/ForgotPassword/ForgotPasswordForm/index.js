import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
import  {Link} from 'react-router-dom';
import "./index.css";

class NormalForgotPasswordForm extends React.Component {
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
            Submit
          </Button>
          Or <Link to="/login">login!</Link>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalForgotPasswordForm = Form.create({ name: 'normal_forgot_password' })(NormalForgotPasswordForm);

export default WrappedNormalForgotPasswordForm;