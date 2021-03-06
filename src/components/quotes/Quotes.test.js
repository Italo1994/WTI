import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import { Quotes } from './Quotes';

const quote = 'quote';
const country = 'random country';

test('renders received quote, country and a button', () => {
    render(<Quotes quote={quote} country={country} /> );

    const quoteEl = screen.getByText(quote);
    const countryEl = screen.getByText(country);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(countryEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Quotes quote={quote} country={country} onUpdate={callback} />);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(0);
});