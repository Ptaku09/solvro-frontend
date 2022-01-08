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
  });

  afterAll(() => {
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

  it('opens the modal on click', async () => {
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
      fireEvent.click(getByText(/Test Title/i));
    });

    await waitFor(() => {
      expect(getByText(/The upcoming/i)).toBeInTheDocument();
    });
  });

  it('reloades the page on click', async () => {
    window.location.reload = jest.fn();
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
