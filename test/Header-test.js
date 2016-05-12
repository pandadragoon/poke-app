import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Header from '../src/components/Header/Header.jsx';

describe('Header', ()=> {
  it('works', ()=>{

    let renderer = createRenderer();
    renderer.render(<Header />);

    let actualElement = renderer.getRenderOutput();
    let expectedElement = <h1>Header</h1>;

    expect(actualElement).toEqualJSX(expectedElement);
  });
});
