import React from 'react'

const styles = {
  base: {
    fontSize:'1rem',
    display:'block',
    margin: 'auto',
    width:'80%',
    minWidth: '4em',
    padding:'10px',
    color:'darkGray',
    verticalAlign: 'middle',
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
      <div>
        <footer style={styles.base}>
          <a onClick={this.handleClick}>click footer to back</a>
        </footer>
      </div>
      )
  }

}

Footer.propTypes = {
  onClick: React.PropTypes.func.isRequired
}
