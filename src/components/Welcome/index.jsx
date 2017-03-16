import React, { Component } from 'react'

import style from './style.css'

export default class Welcome extends Component {


  render () {
    	return (
    	<div>
      		<div>
      			<p>Welcome to {this.props.name}</p>
      			<p>Your balance is : $1000000000000000000</p>
      		</div>
    	</div>

    )
  }
}
