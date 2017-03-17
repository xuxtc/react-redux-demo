import React from 'react'
import * as SubmitActions from '../../src/actions/submitActions'

describe('displayName', ()=> {
  it('should be called, and right action was returned', ()=> {
    const payload = "Hanmeimei"
    const action = SubmitActions.displayName(payload)

    expect(action).toEqual({
      type: 'DISPLAY_NAME',
      payload,
    })
  })
})

describe('submitFormSuccess', ()=> {
    it('should be called, and return true if passes true', ()=> {
      const action = SubmitActions.submitFormSuccess(true)

      expect(action).toEqual({
        type: 'SUBMIT_FORM_SUCCESSFUL',
        payload: true,
      })
    })
})
