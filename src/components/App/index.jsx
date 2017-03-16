	import React, { Component } from 'react'

	import style from './style.css'
	import Welcome from '../Welcome'
	export default class App extends Component {

		state = {
			name : '',
			textvalue : ''
		}

		showText (){
			this.setState({
				textvalue: this.state.name
			})
		}

		handleChange (evt){
			this.setState({
				name: evt.target.value
			})
			console.log(this.state.name)
		}

	  	render () {
	    	return (
	    	<div>
	      		<h1 className={style.title}>Hello {this.state.name}</h1>
	      		<input type='text' onChange={::this.handleChange} />
	      		<span className={style.btn} onClick={::this.showText}>Click</span>
	  			<Welcome name={this.state.name}/>
	    	</div>

	    )
	  }
	}
