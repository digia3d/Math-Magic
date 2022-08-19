import React from "react";
import renderer from 'react-test-renderer';
import Home from "../components/Home";
import '@testing-library/jest-dom';

describe('Test of Home page', () => {
  it('test if Home page is rendered', () => {
      const HomeTest = renderer
          .create(<Home />)
          .toJSON();
      expect(HomeTest).toMatchSnapshot();
  });
});