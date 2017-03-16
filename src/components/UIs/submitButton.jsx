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
    display:'inline-block',
    margin:'5px 0 5px 0',
    verticalAlign: 'middle',
    cursor:'pointer',
    textAlign: 'center'
  },
  div: {
    padding: '20px',
    margin: '0',
  }
}

const SubmitButton = ()=> {
  return (
    <div style={styles.div}>
      <button style={styles.button} id="submit">Submit</button>
    </div>
  )
}

export default SubmitButton
