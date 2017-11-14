import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../notif/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({ errors });
      if(Object.keys(errors).length == 0) {
        this.props.submit(this.state.data);
      }
  }

  validate = (data) => {
    const errors = {}
      if(!Validator.isEmail(data.email)) errors.email = "Input Email Harus Benar"
      if(!data.password) errors.password = "Password Tidak Boleh Kosong"
    return errors;
  }

  render() {
    const { data, errors } = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlfor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input Email"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={ errors.email } />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlfor="Password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Input Password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={ errors.password } />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm
