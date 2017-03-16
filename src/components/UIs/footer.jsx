import React from 'react'

const styles = {
  base: {
    fontSize:'1rem',
    width:'60%',
    color:'darkGray',
    float:'right'
  }
}

export default class Footer extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.onClick()
  }

  render(){
    return(
      <div style={styles.base}>
        <footer>
          <a onClick={this.handleClick}>click footer to back</a>
        </footer>
      </div>
      )
  }

}

Footer.propTypes = {
  onClick: React.PropTypes.func.isRequired
}
