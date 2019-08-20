import React, { Component } from 'react';
import {
   Container   
} from './style'

export default class index extends Component {
  render() {
    return (
      <Container> 
          <div style={{color: 'white'}}>
              Todos los derechos reservados
          </div>
          <div style={{
             padding: '0 11px',
             color: 'white'
          }}>
            © 2019 
          </div>
      </Container>
    );
  }
}
