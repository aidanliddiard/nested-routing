import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('making sure it renders the title and characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/Home/i);
    const link = screen.getByText('View Characters');
    expect(link).toBeInTheDocument();
    userEvent.click(link);

    screen.getByText(/loading/i);

    await screen.findByText(/character list/i);

    await screen.findByText(/rick sanchez/i);
  });
});
