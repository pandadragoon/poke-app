import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Footer from '../src/components/Footer/Footer.jsx';

describe('Footer', ()=> {
  it('works', ()=>{

    let renderer = createRenderer();
    renderer.render(<Footer />);

    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h1>Footer</h1>;

    expect(actualElement).toEqualJSX(expectedElement);
  });
});
