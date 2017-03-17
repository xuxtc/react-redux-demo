import React from 'react'

const styles = {
  button: {
    paddingRight: '38px',
    paddingTop:'0.8em',
    paddingBottom:'0.8em',
    paddingLeft:'38px',
    color: 'green',
    border:'1px solid green',
    float:'right',
    backgroundColor: '#edf2f2',
    fontSize:'100%',
    fontWeight:'bold',
    margin:'auto',
    cursor:'pointer',
    textAlign: 'center'
  },
  div: {
    padding: '20px',
    width:'80%',
    margin: 'auto'
  }
}

export default class SubmitButton extends React.Component {
  render(){
    return (
      <div style={styles.div}>
        <button style={styles.button} id="submit">Submit</button>
      </div>
    )
  }
}
