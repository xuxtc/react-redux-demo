import React from 'react'
import { shallow } from 'enzyme'

import SubmitButton from '../../src/components/UIs/submitButton'

describe('SubmitButton component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<SubmitButton />)
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
