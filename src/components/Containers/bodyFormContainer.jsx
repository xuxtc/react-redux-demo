import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as SubmitActions from '../../actions/submitActions'
import UserName from '../UIs/userName'
import SubmitButton from '../UIs/submitButton'
import Footer from '../UIs/footer'

const styles = {
  base: {
    fontSize:'1rem',
    display:'block',
    margin: 'auto',
    width:'80%',
    minWidth: '4em',
    padding:'10px',
    color:'black',
    verticalAlign: 'middle'
  },
  red: {
    fontSize:'1.5rem',
    color:'red'
  }
}

class BodyFormContainer extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(payload) {
    this.props.actions.submitName(payload)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.submitFormSuccess(true)
  }

  handleClick() {
    this.props.actions.submitFormSuccess(false)
  }

  render() {
    const { user, submitted } = this.props
    if(submitted) {
      return (
        <div>
          <div style={styles.base}>Welcome here,
              <strong style={styles.red}> {user} !!!</strong>
          </div>
          <Footer onClick={this.handleClick} />
        </div>
      )
    }
    return(
      <div>
          <form onSubmit={this.handleSubmit}>
            <UserName onChange ={this.handleChange} />
            <SubmitButton />
            <div style={styles.base} id="userInput">
              <div style={styles.red}>{user}</div>
              <div> will come to visit you.</div>
            </div>
          </form>
      </div>
    )
  }
}

BodyFormContainer.propTypes = {
  user: React.PropTypes.string.isRequired,
  submitted: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.shape({
    submitName: React.PropTypes.func.isRequired,
    submitFormSuccess: React.PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  return{
    user: state.submit.user,
    submitted: state.submit.submitted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(SubmitActions, dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(BodyFormContainer)
export {BodyFormContainer as BodyFormContainerTest}
