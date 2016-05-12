import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from '../src/components/App.jsx';
import Header from '../src/components/Header/Header.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Home from '../src/components/Home/Home.jsx';

describe('App', ()=> {
  it('works', ()=>{

    let renderer = createRenderer();
    renderer.render(<App />);

    let actualElement = renderer.getRenderOutput();

    expect(actualElement.type).toBe('div');
    expect(actualElement).toIncludeJSX(<Header />);
    expect(actualElement).toIncludeJSX(<Footer />);
  });
});
