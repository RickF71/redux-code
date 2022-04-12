import { toBeInTheDocument, toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import AsyncTemp from './AsyncTemp';

window.fetch = jest.fn(() => {
    const user={name:'Jack', email:'jack@abc.com'}
    return Promise.resolve ({
        json: () => Promise.resolve (user),
    });
})
describe("Testing AsyncTemp component", () => {
    test ('user name is rendered', async() =>{
        render(<AsyncTemp />);

        const userName = await screen.findByText('Jack');

        expect(userName).toBeInTheDocument();
    });
});

test("Loading text appearing..", async () => {
    render(<AsyncTemp />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    await waitForElementToBeRemoved(()=>screen.getByText('Loading...'));
});



// export default AsyncTemp.test;