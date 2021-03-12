import React from 'react';
import { Link } from 'react-router-dom';
import BlockButtonWithIcon from '../components/BlockButtonWithIcon';
import Header from '../components/Header';

export default function SignIn() {
  return (
    <div>
      <Header />
      <div className="d-flex full-height align-items-center justify-content-center">
        <div
          className="
            d-flex
            p-3
            "
        >
          <div className="form-group w-100">
            <h3 className="pb-3 text-center">Ingreso</h3>
            <p>Para ingresar debes usar uno de nuestros proveedores autorizados.</p>
            <BlockButtonWithIcon
              text="Google"
              className="btn btn-primary btn-lg"
              iconClass="fab fa-google mr-2"
              onClick={e => console.log('Button clicked')}
              style={{ backgroundColor: '#4285F4' }}
            />
            <hr />

            <BlockButtonWithIcon
              text="Facebook"
              className="btn btn-primary btn-lg"
              iconClass="fab fa-facebook mr-2"
              onClick={e => console.log('Button clicked')}
              style={{ backgroundColor: '#3b5998' }}
            />
            <hr />

            <BlockButtonWithIcon
              text="Instagram"
              className="btn btn-primary btn-lg"
              iconClass="fab fa-instagram mr-2"
              onClick={e => console.log('Button clicked')}
              style={{ backgroundColor: '#E1306C' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
