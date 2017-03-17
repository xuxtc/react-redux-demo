import React from 'react'

import SubmitReducer from '../../src/reducers/submitReducer'
import * as SubmitActions from '../../src/actions/submitActions'

const initialState = {
  submitted: false,
  user: ''
}

describe('reducers should return the new state after applying the action to the previous state', () => {
  describe('handle unexpected situations', () => {
    it('should return the initial state', () => {
      const action = 'unknown'
      const newState = SubmitReducer(undefined, action)
      expect(newState).toEqual(initialState)
    })
  })

  describe('handle expected actions', () => {
    it('should return new state after applying displayName', () => {
      const action = {
        type: SubmitActions.DISPLAY_NAME,
        payload:'LiLei',
      }
      const newState = SubmitReducer(initialState, action)

      expect(newState.user).toEqual('LiLei')
    })

    it('should return true after applying submitFormSuccess == true', () => {
      const action = {
        type: SubmitActions.SUBMIT_FORM_SUCCESSFUL,
        payload:true,
      }
      const newState = SubmitReducer(initialState, action)

      expect(newState.submitted).toBeTruthy()
    })

    it('should return false after applying submitFormSuccess == false', () => {
      const action = {
        type: SubmitActions.SUBMIT_FORM_SUCCESSFUL,
        payload:false,
      }
      const newState = SubmitReducer(initialState, action)

      expect(newState.submitted).toBeFalsy()
    })
  })
})
