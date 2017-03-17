import React from 'react'
import { shallow } from 'enzyme'

import UserName from '../../src/components/UIs/userName'

const props = {
  onChange: jest.fn()
}

describe('UserName component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<UserName {...props}/>)
    expect(wrapper.find('input').props().type).toBe('text')
  })
})
