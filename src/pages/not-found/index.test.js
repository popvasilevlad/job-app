import { mount } from 'enzyme';
import NotFound from './index';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('[404 page]', () => {
    let container; 
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((redirect) => [redirect, setState] );

    beforeEach(() => {
        container = mount(
            <Router>
                <NotFound />
            </Router>
        );
    });
  
    it('should render page', () => {
        expect(container.length).toBe(1);
    })
    
    it('should update state on click', () => {
        container.find('button').simulate('click');
        expect(useStateSpy).toHaveBeenCalled();
        useStateSpy.mockClear();
    });

    it('Redirect when button is clicked', () => {
        container.find('button').simulate('click');
        expect(container.find('#not-found-page').length).toBe(0);
    });
});