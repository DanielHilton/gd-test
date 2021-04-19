import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App/>);
  const linkElement = screen.getByText(/GitHub RepoItem List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders list of repos', () => {
  const listItem = screen.getByText("I'm a repo");
  expect(listItem).toBeInTheDocument();
});