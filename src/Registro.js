import React from "react";


class Registro extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="form-group">
                    <form action = "./Controller/Controller_usuario.js" method="POST">
                        <small id="emailHelp" className="form-text text-muted">Todos los campos son obligatorios</small>
                        <label htmlFor="nombre" className="mt-2">Nombre</label>
                        <input id="nombre" required type="text" className="form-control" />
                        <label htmlFor="email" className="mt-2">Email</label>
                        <input type="email" className="form-control" required id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" required id="password" />
                        <button className="btn btn-primary mt-2" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Registro;