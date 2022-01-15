import axios from 'axios';
import { renderWithoutTemplate, waitFor } from 'test-utils';
import FavoriteElement from 'components/molecules/FavoriteElement/FavoriteElement';
import '@testing-library/jest-dom';
import 'jest-location-mock';
import { fireEvent } from '@testing-library/react';

describe('Favorite element component', () => {
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

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify([123])),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  afterEach(() => {
    axios.get.mockClear();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders the component', async () => {
    const { getByText } = renderWithoutTemplate(<FavoriteElement id={123} />);

    await waitFor(() => {
      expect(getByText(/Test Title/i)).toBeInTheDocument();
    });
  });

  it('removes article from favorites', async () => {
    const { getByText } = renderWithoutTemplate(<FavoriteElement id={123} />);

    await waitFor(() => {
      fireEvent.click(getByText('remove-button-svgrepo-com.svg'));
    });
  });
});
