import Home from 'views/Home/Home';
import { render } from 'test-utils';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home page', () => {
  it('renders the home page', async () => {
    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText(/New articles/i)).toBeInTheDocument();
    });
  });
});
