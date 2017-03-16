export const SUBMIT_FORM_SUCCESSFUL = 'SUBMIT_FORM_SUCCESSFUL'
export const SUBMIT_NAME = 'SUBMIT_NAME'


export const submitFormSuccess = (payload) => {
  return {
    type: SUBMIT_FORM_SUCCESSFUL,
    payload,
  }
}

export const submitName = (payload) => {
  return {
    type: SUBMIT_NAME,
    payload,
  }
}
