import { Form, Icon, Input, Button } from 'antd';
import React from 'react';
import "./index.css";

class NormalResetPasswordForm extends React.Component {

    state = {
        confirmDirty: false
    }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter are inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">


        <Form.Item  hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password placeholder="Password" prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} />} />)}
        </Form.Item>

        <Form.Item  hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password 
                    onBlur={this.handleConfirmBlur} 
                    placeholder="Repeat password" 
                    prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />)}
        </Form.Item>
          
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Reset password
          </Button>
        </Form.Item>

      </Form>
    );
  }
}

const WrappedNormalResetPasswordForm = Form.create({ name: 'normal_reset_password' })(NormalResetPasswordForm);

export default WrappedNormalResetPasswordForm;