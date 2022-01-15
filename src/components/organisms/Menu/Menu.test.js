import '@testing-library/jest-dom';
import { fireEvent, waitFor } from '@testing-library/react';
import Menu from 'components/organisms/Menu/Menu';
import * as reactRedux from 'react-redux';
import { setAppElement } from 'react-modal';
import { renderWithoutTemplate } from 'test-utils';

describe('Menu component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders the component', async () => {
    useSelectorMock.mockReturnValue(true);

    setAppElement('body');
    const { getByText } = renderWithoutTemplate(<Menu path="/test" />);

    await waitFor(() => {
      expect(getByText(/home/i)).toBeInTheDocument();
    });
  });

  it('changes body overflow and toggles menu state', async () => {
    useSelectorMock.mockReturnValue(true);
    useDispatchMock.mockReturnValue(jest.fn());

    setAppElement('body');
    const { getByText } = renderWithoutTemplate(<Menu path="/test" />);

    await waitFor(() => {
      fireEvent.click(getByText(/home/i));
    });

    expect(document.body.style.overflow).toMatch(/unset/);
  });
});
