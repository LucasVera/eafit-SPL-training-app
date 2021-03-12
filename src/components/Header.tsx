import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../assets/images/basic-app-logo.jpg';
import logo from '../assets/images/medical-app-logo.png';

interface PropsInterface {
  className?: string,
  user?: string,
}

const defaultProps: PropsInterface = {
  className: '',
  user: '',
};

export default function Header(props: PropsInterface = defaultProps) {
  const {
    className,
    user,
  } = props;
  return (
    <nav className={`${className} navbar navbar-expand navbar-dark bg-info`}>
      <Link to='/'>
        <img src={logo} className="img-fluid rounded-circle navbar-brand" alt="logo" width="75" />
      </Link>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item d-flex flex-column">
          <Link to="/sign-in"><strong>{user || 'Ingresar'}</strong></Link>
          {user &&
          <div className="d-flex flex-column">
            <span className="text-right">[Cliente]</span>
            <small className="text-right">Salir</small>
          </div>}
        </li>
      </ul>
    </nav>
  )
}
