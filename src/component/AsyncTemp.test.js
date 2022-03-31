import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { render, screen } from '@testing-library/react';
import AsyncTemp from './AsyncTemp';

window.fetch = jest.fn(() => {
    const user={name:'Jack', email:'jack@abc.com'}
    return Promise.resolve ({
        json: () => Promise.resolve (user),
    });
})
test ('user name is rendered', async() =>{
    render(<AsyncTemp />);

    const userName = await screen.findByText('Jack');

    expect(userName).toBeInTheDocument();
})

// export default AsyncTemp.test;