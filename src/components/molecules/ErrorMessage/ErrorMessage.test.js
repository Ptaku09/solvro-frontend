import { renderWithoutTemplate } from 'test-utils';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import '@testing-library/jest-dom';

describe('Error messsage component', () => {
  it('renders the component', () => {
    const { getByText } = renderWithoutTemplate(<ErrorMessage message="Error message" />);

    expect(getByText(/error message/i)).toBeInTheDocument();
  });
});
