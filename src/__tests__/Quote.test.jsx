import React from "react";
import renderer from 'react-test-renderer';
import Quote from "../components/Quote";
import '@testing-library/jest-dom';

describe('Testing Quote page', () => {
  it('test if Quote page is rendered', () => {
      const quoteTest = renderer
          .create(<Quote />)
          .toJSON();
      expect(quoteTest).toMatchSnapshot();
  });
});
