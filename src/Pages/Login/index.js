import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { APP_NAME } from '../../Constantes';
import Button from '@material-ui/core/Button';
import './styles.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { login } from '../../Services/auth';

class SingIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha e-mail e senha para continuar!' });
    } else {
      login(email);
      this.props.history.push('/app');
    }
  };

  render() {
    return (
      <div className="Container">
        <Paper className="paper">
          <form onSubmit={this.handleSignIn}>
            {this.state.error && <p>{this.state.error}</p>}
            <h2 className="app-name">{APP_NAME.toUpperCase()}</h2>
            <label className="title">Digite suas credenciais</label>
            <TextField
              type="email"
              label="Endereço de email"
              margin="normal"
              variant="outlined"
              fullWidth
              autofocus
              onChange={e => this.setState({ email: e.target.value })}
            />
            <TextField
              type="password"
              label="Senha"
              variant="outlined"
              fullWidth
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button
              type="submit"
              className="submit-button"
              variant="contained"
              color="primary"
              fullWidth
            >
              Entrar
            </Button>
            <hr className="line-divisor" />
            <Link className="signup-link" to="/signup">
              Criar conta grátis
            </Link>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withRouter(SingIn);
