import { render, screen} from "@testing-library/react";
import TodoInput  from "../TodoInput.component";
import { shallow } from "enzyme";
import Adapter from '@cfaester/enzyme-adapter-react-18';
import React, { useState as useStateMock } from 'react';
//Enzyme.configure({ adapter: new Adapter() });
jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn()
}))
describe('Test ToDo Input Component', () => {
    beforeEach(() => {
		jest.spyOn(React, 'useState').mockImplementation(jest.requireActual('react').useState)
	})
    it('render the Todo input component', () => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');
        useStateSpy.mockImplementation((val?: any) => [val, setState]);
        shallow(<TodoInput initialstate={0} statechanger={setState}/>)
        const inputelement = screen.findByTestId('test-1')
        expect(inputelement).toBeInTheDocument()
    })
  
})
