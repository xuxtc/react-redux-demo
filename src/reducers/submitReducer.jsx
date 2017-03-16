import _ from 'lodash'
import * as SubmitActions from '../actions/submitActions'

const initialState = {
  submitted: false,
  user: ''
}

const submit = (state = initialState, action) => {
  switch (action.type) {
    case SubmitActions.DISPLAY_NAME: {
      return { ...state, user: action.payload}
    }
    case SubmitActions.SUBMIT_FORM_SUCCESSFUL: {
      return { ...state, submitted: action.payload}
    }
    default:
      return state;
  }
}

export default submit
