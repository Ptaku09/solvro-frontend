import axios from 'axios';
import Articles from 'views/Articles/Articles';
import { fireEvent, render, waitFor } from 'test-utils';
import { setAppElement } from 'react-modal';
import '@testing-library/jest-dom';
import 'jest-location-mock';

describe('Articles page', () => {
  window.scrollTo = jest.fn();

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 123,
          title: 'Test Title',
          url: 'https://google.com',
          imageUrl: 'https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg',
          newsSite: 'SpaceNews',
          summary:
            'The upcoming unscrewed test flight of the Orion spacecraft will include a payload to see how a voice recognition technology widely available to consumers today could be used to assist astronauts on future missions.',
          publishedAt: '2022-01-05T13:06:44.000Z',
        },
      ],
    });
  });

  afterEach(() => {
    axios.get.mockClear();
    jest.clearAllMocks();
  });

  it('renders error information when axios.get failed', async () => {
    axios.get.mockRejectedValueOnce(new Error('network error'));

    const { getByText } = render(<Articles />);

    await waitFor(() => {
      expect(getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('renders the component when axios.get succeeded', async () => {
    const { getByText } = render(<Articles />);

    await waitFor(() => {
      expect(getByText(/Test Title/i)).toBeInTheDocument();
    });
  });

  it('opens/closes the modal on click', async () => {
    const { getByText } = render(<Articles />);
    let desc;

    axios.get.mockResolvedValueOnce({
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

    await waitFor(() => {
      setAppElement('body');
      fireEvent.click(getByText(/Test Title/i));
    });

    await waitFor(() => {
      desc = getByText(/The upcoming/i);
      expect(desc).toBeInTheDocument();
    });

    fireEvent.click(getByText(/close/i));

    await waitFor(() => {
      expect(desc).not.toBeInTheDocument();
    });
  });

  it("opens modal when 'read more' button is clicked", async () => {
    const { getByText } = render(<Articles />);

    axios.get.mockResolvedValueOnce({
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

    await waitFor(() => {
      setAppElement('body');
      fireEvent.click(getByText(/next-svgrepo-com.svg/i));
    });

    await waitFor(() => {
      expect(getByText(/close/i)).toBeInTheDocument();
    });
  });

  it("adds/removes article to favorites when key: 'favorites' does exist", async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([1234])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { getByText } = render(<Articles />);

    await waitFor(() => {
      fireEvent.click(getByText(/add-to-favourites-svgrepo-com.svg/i));
    });

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([1234, 123])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    fireEvent.click(getByText('remove-button-svgrepo-com.svg'));
  });

  it('does not add/remove same article twice to favorites', async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([123])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { getByText } = render(<Articles />);

    await waitFor(() => {
      fireEvent.click(getByText(/add-to-favourites-svgrepo-com.svg/i));
    });

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    fireEvent.click(getByText('remove-button-svgrepo-com.svg'));
  });

  it("adds/removes article to favorites when key: 'favorites' does not exist", async () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const { getByText } = render(<Articles />);

    await waitFor(() => {
      fireEvent.click(getByText(/add-to-favourites-svgrepo-com.svg/i));
    });

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([123])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    fireEvent.click(getByText('remove-button-svgrepo-com.svg'));
  });

  it('reloades the page on click', async () => {
    const { getByText } = render(<Articles />);

    await waitFor(() => {
      fireEvent.click(getByText(/reload-svgrepo-com.svg/i));
    });

    expect(window.location.reload).toHaveBeenCalled();
  });

  it('changes the number of articles', async () => {
    const { getByText } = render(<Articles />);

    await waitFor(() => {
      fireEvent.dragEnter(getByText(/On page:/i));
    });

    await waitFor(() => {
      fireEvent.click(getByText('10'));
      fireEvent.click(getByText(/20/i));
      fireEvent.click(getByText(/30/i));
      fireEvent.click(getByText(/40/i));
      fireEvent.click(getByText(/50/i));
    });

    expect(getByText(/On page: 50/)).toBeInTheDocument();
  });

  it('scrolls down after load', async () => {
    render(<Articles />);

    await waitFor(() => {
      expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 0, top: 150 });
    });
  });
});
