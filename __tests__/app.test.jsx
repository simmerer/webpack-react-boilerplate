import React from 'react';
import { mount } from 'enzyme';

import App from '../src/js/App';
import HelloWorld from '../src/js/components/hello-world';

describe('<App />', () => {
  const wrap = mount(<App />);

  it('renders', () => {
    expect(wrap.find(App).exists()).toBe(true);
  });

  it('contains HelloWorld component', () => {
    expect(wrap.find(HelloWorld).exists()).toBe(true);
  });
});
