import { renderWithoutTemplate } from 'test-utils';
import Article from 'components/molecules/Article/Article';
import '@testing-library/jest-dom';

describe('Article component', () => {
  it('renders the component', () => {
    const { getByText } = renderWithoutTemplate(
      <Article
        id={123}
        title="Test Title"
        imgSrc="https://spacenews.com/wp-content/uploads/2022/01/callisto-orion.jpg"
        handleOpenArticleDetails={jest.fn()}
      />
    );

    expect(getByText(/test title/i)).toBeInTheDocument();
  });
});
