import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { APP_NAME } from '../../Constantes';

import './styles.css';

class SingIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar!' });
    } else {
      this.props.history.push('/app');
    }
  };

  render() {
    return (
      <div className="Container">
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <h2>{APP_NAME.toUpperCase()}</h2>
          <label>Digite suas credenciais</label>
          <input
            type="email"
            placeholder="Endereço de email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SingIn);
