import ErrorMessage from './index.js';
import { shallow } from 'enzyme';
import React from 'react';

describe('[error-message] - component', () => {
    it('Should render the error-message component', () => {
        const wrapper = shallow(<ErrorMessage />);
    
        expect(wrapper.length).toBe(1);

    });
});