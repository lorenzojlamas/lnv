import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from '../../pages';

describe('index', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
