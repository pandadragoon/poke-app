import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Home from '../src/components/Home/Home.jsx';

describe('Home', ()=> {
  it('works', ()=>{

    let renderer = createRenderer();
    renderer.render(<Home />);

    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h1>Home</h1>;

    expect(actualElement).toEqualJSX(expectedElement);
  });
});
