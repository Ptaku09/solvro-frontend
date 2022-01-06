import WrongPath from 'views/WrongPath/WrongPath';
import { render, waitFor } from 'test-utils';
import '@testing-library/jest-dom';

describe('Wrong path page', () => {
  window.scrollTo = jest.fn();

  it('renders the wrong path page', async () => {
    const { getByText } = render(<WrongPath />);

    await waitFor(() => {
      expect(getByText(/404/i)).toBeInTheDocument();
    });
  });

  it('scrolls down after load', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<WrongPath />);
    jest.advanceTimersByTime(250);

    await waitFor(() => {
      expect(getByText(/Spaceflight/i)).toBeInTheDocument();
    });
  });
});
