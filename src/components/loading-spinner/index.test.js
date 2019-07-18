import LoadingSpinner from './index.js';
import { mount } from 'enzyme';
import React from 'react';

describe('[loading-spinner] - component', () => {

    it('Should render the spinner component', () => {
        const wrapper = mount(<LoadingSpinner />);
    
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('#circular-progress').hostNodes().length).toBe(1);
    });
});