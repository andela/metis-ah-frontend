import React, { Component } from 'react';
import axios from 'axios';
import { parse } from 'query-string';
import TwitterLogin from 'react-twitter-auth';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

class SocialLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: {},
    };
    const { match, history } = this.props;
    const media = match.params.type;
    const code = parse(history.location.search);

    switch (media) {
      case ('twitter'):
        if (code.oauth_token && code.oauth_verifier) {
          instance.get(`users/auth/${media}/redirect?oauth_token=${code.oauth_token}&oauth_verifier=${code.oauth_verifier}`)
            .then((response) => {
              console.log(response);
              this.setState({
                isAuthenticated: true,
                user: response.data.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return;
      default:
        if (code.code) {
          instance.get(`users/auth/${media}/redirect?code=${code.code}`)
            .then((response) => {
              console.log(response);
              this.setState({
                isAuthenticated: true,
                user: response.data.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
  }

  onFailed = (error) => {
    console.log(error);
  };

  onSuccess = (res) => {
    console.log(res);
  }

  render() {
    return (
      <div>
        <a href="http://localhost:3000/api/v1/users/auth/google">
          Google
        </a>
        <a href="http://localhost:3000/api/v1/users/auth/facebook">
          Facebook
        </a>
        <a href="http://localhost:3000/api/v1/users/auth/twitter">
          Twitter
        </a>
        <TwitterLogin
          loginUrl="http://localhost:3000/api/v1/users/auth/twitter"
          onFailure={this.onFailed}
          onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:3000/api/v1/users/auth/twitter/redirect"
        />
      </div>
    );
  }
}

export default SocialLogin;
