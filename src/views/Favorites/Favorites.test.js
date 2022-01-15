import Favorites from 'views/Favorites/Favorites';
import { fireEvent, render, waitFor } from 'test-utils';
import '@testing-library/jest-dom';
import axios from 'axios';
import { setAppElement } from 'react-modal';

describe('Favorites page', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([123])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    axios.get.mockResolvedValue({
      data: {
        id: 123,
        title: 'Test Title',
        url: 'https://google.com',
        imageUrl: 'https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg',
        newsSite: 'SpaceNews',
        summary:
          'The upcoming unscrewed test flight of the Orion spacecraft will include a payload to see how a voice recognition technology widely available to consumers today could be used to assist astronauts on future missions.',
        publishedAt: '2022-01-05T13:06:44.000Z',
      },
    });
  });

  afterEach(() => {
    axios.get.mockClear();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("renders info when fetching article's data went wrong", async () => {
    axios.get.mockRejectedValueOnce(new Error('network error'));
    const { getByText } = render(<Favorites />);

    await waitFor(() => {
      expect(getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('renders info when there are no favorites', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
      },
    });

    const { getByText } = render(<Favorites />);
    expect(getByText(/No favorites/i)).toBeInTheDocument();
  });

  it('renders favorite articles', async () => {
    const { getByText } = render(<Favorites />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(getByText(/Test Title/i)).toBeInTheDocument();
    });
  });

  it('scrolls down after load', async () => {
    window.scrollTo = jest.fn();
    render(<Favorites />);

    await waitFor(() => {
      expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 0, top: 150 });
    });
  });

  it('opens the modal on click', async () => {
    const { getByText } = render(<Favorites />);

    await waitFor(() => {
      setAppElement('body');
      fireEvent.click(getByText(/next-svgrepo-com.svg/i));
    });

    await waitFor(() => {
      expect(getByText(/The upcoming/i)).toBeInTheDocument();
    });
  });
});
