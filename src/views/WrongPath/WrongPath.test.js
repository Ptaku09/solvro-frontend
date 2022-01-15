import WrongPath from 'views/WrongPath/WrongPath';
import { render, waitFor } from 'test-utils';
import '@testing-library/jest-dom';

describe('Wrong path page', () => {
  it('renders the wrong path page', async () => {
    const { getByText } = render(<WrongPath />);

    await waitFor(() => {
      expect(getByText(/404/i)).toBeInTheDocument();
    });
  });

  it('scrolls down after load', async () => {
    window.scrollTo = jest.fn();
    render(<WrongPath />);

    await waitFor(() => {
      expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 0, top: 150 });
    });
  });
});
