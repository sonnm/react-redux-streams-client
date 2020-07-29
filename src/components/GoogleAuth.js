import React from 'react';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: null };
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '584550819384-86rd7rmr2e3l8ee0c6kc4vgmq5dq39m1.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button className="ui red google button" onClick={this.onSignIn}>
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
