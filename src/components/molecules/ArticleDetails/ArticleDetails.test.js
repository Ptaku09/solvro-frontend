import { renderWithoutTemplate } from 'test-utils';
import ArticleDetails from 'components/molecules/ArticleDetails/ArticleDetails';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

describe('Article details component', () => {
  window.open = jest.fn();

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    const { getByText } = renderWithoutTemplate(
      <ArticleDetails
        imageUrl="https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg"
        title="Test Title"
        publishedAt="2022-01-05T13:06:44.000Z"
        desc="The upcoming unscrewed"
        readMore="https://google.com"
      />
    );

    expect(getByText(/test/i)).toBeInTheDocument();
  });

  it('opens image in new tab on click', () => {
    const { getByAltText } = renderWithoutTemplate(
      <ArticleDetails
        imageUrl="https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg"
        title="Test Title"
        publishedAt="2022-01-05T13:06:44.000Z"
        desc="The upcoming unscrewed"
        readMore="https://google.com"
      />
    );

    fireEvent.click(getByAltText(/test title/i));
    expect(window.open).toHaveBeenCalled();
  });

  it('opens more info on click', () => {
    const { getByText } = renderWithoutTemplate(
      <ArticleDetails
        imageUrl="https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg"
        title="Test Title"
        publishedAt="2022-01-05T13:06:44.000Z"
        desc="The upcoming unscrewed"
        readMore="https://google.com"
      />
    );

    fireEvent.click(getByText(/read more.../i));
    expect(window.open).toHaveBeenCalled();
  });
});
