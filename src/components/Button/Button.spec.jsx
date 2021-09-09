import { render, screen } from '@testing-library/react'; // fireEvent can be used instead userEvent
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it("should render the button with the text 'Load more'", () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    // fireEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be a disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });
  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} onClick={fn} />);
    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" disabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
