import React from 'react'
import { createStore } from 'redux'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'

import App from '../../src/components/app'
import Reducer from '../../src/reducers'

let store
let wrapper

const fillin = (byCssSelector, text) => {
  wrapper.find(byCssSelector).simulate('change', {target: {value:text}})
}

beforeEach( () => {
  store = createStore(Reducer)
  wrapper = mount (
    <Provider store={store}>
    <App />
    </Provider>
  )
})

describe('User journey', ()=> {
  describe('user input a string in the field', ()=> {
    it('should display inputed name', ()=> {
      fillin('#userName', 'Han mei 妹@')
      expect(wrapper.find('#userInput').text()).toContain('Han mei 妹@')
    })
  })

  describe('click submit button', ()=> {
    it('should show welcome page, and original view disappear', ()=> {
      fillin('#userName', '李磊@_@')
      wrapper.find('form').simulate('submit')
      expect(wrapper.find('#welcome').text()).toContain('李磊@_@')
      expect(wrapper.find('#userInput').exists()).toBeFalsy()
    })
  })

  describe('click footer to back', ()=> {
    it('should show welcome page, and original view disappear', ()=> {
      fillin('#userName', 'linTao123')
      wrapper.find('form').simulate('submit')
      wrapper.find('a').simulate('click')
      expect(wrapper.find('#userInput').exists()).toBeTruthy()
    })
  })
})
