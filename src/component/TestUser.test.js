import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import TestUser from "./TestUser";
import UserEvent from "@testing-library/user-event";

test ("Counter increased on clicking of increment button", ()=> {
    render(<TestUser/>);

    const counter = screen.getByTestId("counter");
    const incrementButton = screen.getByText("Increment");

    UserEvent.click(incrementButton);
    UserEvent.click(incrementButton);

    expect(counter.textContent).toEqual('2');
});




