import React, { useState } from "react";
import { auth } from "../FirebaseConfig";
import {useHistory} from 'react-router-dom'

const Login = () => {
  const historial = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const registrarUsuario = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((r) => {
        historial.push('/');
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          setError("Formato de email incorrecto");
        }
        if (e.code === "auth/weak-password") {
          setError("La contraseña debe contener 6 caracteres o mas");
        }
      });
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((r) => {
        historial.push('/');
      })
      .catch((error) => {
        // console.log(error.code)
        if(error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'){
          setError('Usuario o contraseña incorrecta')
        }
      });
  };

  return (
    <div className="row">
      <div className="col-sm-4 mx-auto">
        <form onSubmit={registrarUsuario} action="" className="mt-4">
          <h4 className="text-center mb-4">Registrate</h4>
          <div className="form-group">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <input
            type="submit"
            value="Registrarse"
            className="btn btn-sm btn-info btn-block"
          />
        </form>
        <button onClick={login} className="btn btn-sm btn-primary btn-block mt-2">
          Iniciar sesión
        </button>

        {error != null ? (
          <div className="alert alert-danger mt-2 text-center" role="alert">
            {error}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Login;
