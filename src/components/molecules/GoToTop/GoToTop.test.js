import { fireEvent, renderWithoutTemplate, waitFor } from 'test-utils';
import GoToTop from 'components/molecules/GoToTop/GoToTop';
import '@testing-library/jest-dom';
import * as useScrollPosition from 'hooks/useScrollPosition';

describe('Go to top component', () => {
  window.scrollTo = jest.fn();

  beforeEach(() => {
    jest.spyOn(useScrollPosition, 'default').mockReturnValue({
      scrollPosition: 400,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the top component', async () => {
    const { getByText } = renderWithoutTemplate(<GoToTop path="/test" />);

    await waitFor(() => {
      expect(getByText('up-arrow-svgrepo-com.svg')).toBeInTheDocument();
    });
  });

  it("sets display to 'none' on '/'", async () => {
    const { getByLabelText } = renderWithoutTemplate(<GoToTop path="/" />);

    await waitFor(() => {
      expect(getComputedStyle(getByLabelText('wrapper')).display).toBe('none');
    });
  });

  it('goes to top on click', async () => {
    const { getByText } = renderWithoutTemplate(<GoToTop path="/test" />);

    await waitFor(() => {
      fireEvent.click(getByText('up-arrow-svgrepo-com.svg'));
    });

    expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 0, top: 150 });
  });
});
