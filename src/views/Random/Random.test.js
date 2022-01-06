import Random from 'views/Random/Random';
import { fireEvent, render, waitFor } from 'test-utils';
import axios from 'axios';
import '@testing-library/jest-dom';
import 'jest-location-mock';

describe('Random article page', () => {
  window.scrollTo = jest.fn();

  beforeEach(() => {
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

  it('render a fall back article when fetching articles count went wrong', async () => {
    axios.get.mockRejectedValueOnce(new Error('network error'));
    const { getByText } = render(<Random />);

    await waitFor(() => {
      expect(getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it("render a fall back article when fetching article's data went wrong", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        count: 123,
      },
    });
    axios.get.mockRejectedValueOnce(new Error('network error'));
    const { getByText } = render(<Random />);

    await waitFor(() => {
      expect(getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('renders a random article page', async () => {
    const { getByText } = render(<Random />);

    await waitFor(() => {
      expect(getByText(/Test Title/i)).toBeInTheDocument();
    });
  });

  it('scrolls down after load', async () => {
    jest.useFakeTimers();
    const { getByText } = render(<Random />);
    jest.advanceTimersByTime(250);

    await waitFor(() => {
      expect(getByText(/Spaceflight/i)).toBeInTheDocument();
    });
  });

  it('reloades the page on click', async () => {
    const { getByText } = render(<Random />);

    await waitFor(() => {
      fireEvent.click(getByText(/another/i));
    });

    expect(getByText(/Test title/i)).toBeInTheDocument();
  });
});
