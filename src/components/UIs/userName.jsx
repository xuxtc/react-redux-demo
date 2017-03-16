import React from 'react'

const styles = {
  base: {
    fontSize:'1.5rem'
  },
  input: {
    transition: 'box-shadow 0.2s',
    display:'block',
    margin: 'auto',
    width:'80%',
    minWidth: '4em',
    padding:'10px',
    color:'black',
    verticalAlign: 'middle',
    fontSize: '1.008rem',
    border: '1px solid #CDCBC3',
    borderRadius:'4px'
  },
  label: {
    display:'block',
    margin: 'auto',
    width:'80%'
  }
}

export default class UserName extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div style={styles.base}>
        <label style={styles.label}>Submit a name: </label>
        <input style={styles.input}
          type="text" id="userName"
          onChange={this.handleChange}
          />
      </div>
    );
  }
}

UserName.propTypes = {
  onChange: React.PropTypes.func.isRequired
}
