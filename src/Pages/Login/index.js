import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { login } from "../../Services/auth";
import { Grid, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "@material-ui/core/Link";

class SingIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      login(email);
      this.props.history.push("/app");
    }
  };

  render() {
    return (
      <Grid container component="main" className="root">
        <Grid item xs={false} sm={4} md={7} className="image" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="paper">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <label className="title">Digite suas credenciais</label>
            <form onSubmit={this.handleSignIn}>
              {this.state.error && <p>{this.state.error}</p>}
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
                margin="normal"
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
            </form>
            <hr className="line-divisor" />
            <Link className="signup-link" to="/signup">
              Criar conta grátis
            </Link>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(SingIn);
