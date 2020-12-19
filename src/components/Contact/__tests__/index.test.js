import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup)

describe('Contact renders', () => {
    it('renders',() => {
        render(<ContactForm />);
    });

    if('renders',() => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})