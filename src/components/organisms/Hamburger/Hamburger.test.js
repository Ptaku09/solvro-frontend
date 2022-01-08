import Hamburger from 'components/organisms/Hamburger/Hamburger';
import { renderWithoutTemplate, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import { setAppElement } from 'react-modal';

describe('Hamburger component', () => {
  beforeAll(() => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'screen', {
      value: {
        width: 800,
      },
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders the component', async () => {
    const { getByLabelText } = renderWithoutTemplate(<Hamburger path="/test" />);

    await waitFor(() => {
      expect(getByLabelText('wrapper')).toBeInTheDocument();
    });
  });

  it("sets display to 'none' on '/'", async () => {
    const { getByLabelText } = renderWithoutTemplate(<Hamburger path="/" />);

    await waitFor(() => {
      expect(getComputedStyle(getByLabelText('wrapper')).display).toBe('none');
    });
  });

  it('opens/closes menu on click', async () => {
    const { getByLabelText } = renderWithoutTemplate(<Hamburger path="/test" />);

    await waitFor(() => {
      setAppElement('body');
      fireEvent.click(getByLabelText('wrapper'));
    });

    expect(document.body.style.overflow).toMatch(/hidden/);

    await waitFor(() => {
      fireEvent.click(getByLabelText('wrapper'));
    });

    expect(document.body.style.overflow).toMatch(/unset/);
  });
});
