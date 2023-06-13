import { render, screen, cleanup} from "@testing-library/react";
import TodoInput  from "../TodoInput.component";
test('render the Todo input component', () => {
    render(<TodoInput />)
    const inputelement = screen.getByText((content, element) => element.tagName.toLowerCase() == 'input')
    expect(inputelement).toBeInTheDocument()
})