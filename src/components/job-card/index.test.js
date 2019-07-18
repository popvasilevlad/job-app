import JobCard from './index.js';
import { mount } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { iconsCategoryMap } from '../../constants/utils';

describe('[job-card] - component', () => {
    const mockData = {
        id: 1,
        title: 'Job Title',
        employment_type: 'Full Time',
        category: 'cooking'
    };


    it('Should render the job card with props', () => {
        const wrapper = mount(
            <Router>
                <JobCard job={mockData}/>
            </Router>
        );
    
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('#job-card').hostNodes().length).toBe(1);

        expect(wrapper.find('#job-card-icon').hostNodes().length).toBe(1);
        expect(wrapper.find('#job-card-icon').hostNodes().text()).toBe(iconsCategoryMap[mockData.category]);

        expect(wrapper.find('#job-card-title').hostNodes().length).toBe(1);
        expect(wrapper.find('#job-card-title').hostNodes().text()).toBe(mockData.title);
        
        expect(wrapper.find('#job-card-type').hostNodes().length).toBe(1);
        expect(wrapper.find('#job-card-type').hostNodes().text()).toBe(mockData.employment_type);
    });
});