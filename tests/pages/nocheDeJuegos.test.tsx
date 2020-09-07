import React from 'react';
import renderer from 'react-test-renderer';
import NocheDeJuegos from '../../pages/nocheDeJuegos';

describe('nocheDeJuegos', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<NocheDeJuegos />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
