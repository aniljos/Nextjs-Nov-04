import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';


describe("Counter", () => {

    test("render Counter", () => {

        render(<Counter initialValue={5}/>);
        const element = screen.getByText("Counter: 5");
        expect(element).toBeInTheDocument();

    })

    test("render Counter and inc counter", () => {

        render(<Counter initialValue={5}/>);
        const element = screen.getByText("Counter: 5");
        expect(element).toBeInTheDocument();
        const btn = screen.getByText("Inc");
        fireEvent.click(btn);

        let updatedElement = screen.getByText("Counter: 6");
        expect(updatedElement).toBeInTheDocument();


        const input = screen.getByPlaceholderText("Counter");
        fireEvent.change(input, {target: {value: 20}});

        updatedElement = screen.getByText("Counter: 20");
        expect(updatedElement).toBeInTheDocument();


    })

})