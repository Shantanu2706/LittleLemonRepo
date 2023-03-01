import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Your Table");
    expect(headingElement).toBeInTheDocument();
})