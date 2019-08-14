import React, { Component } from 'react';
import HeaderInfo from '../../componets/headerInfo'
import BodyInfo from '../../componets/bodyInfo'
import BodyInfoContent from '../../componets/bodyInfoContent'


export default class index extends Component {
  constructor(props){
    super(props)
      this.state = {
        infoActive: false
      }
  }
  openInfo = () => {
    const { infoActive } = this.state
    this.setState({
      infoActive: !infoActive
    })
  }
  render() {
    const { infoActive } = this.state;
    return (
    <div>
        <HeaderInfo/>
        <BodyInfo infoActive={infoActive} openInfo={this.openInfo} />
        <BodyInfoContent/>
    </div>
    );
  }
}
