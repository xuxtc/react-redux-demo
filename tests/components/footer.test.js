import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../../src/components/UIs/footer'
const props = {
  onClick: jest.fn()
}

describe('Footer component', () => {
  it('should render dom', () => {
    const wrapper = shallow(<Footer {...props}/>)
    expect(wrapper.find('a').text()).toContain('click footer')
  })
})
