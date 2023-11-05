import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../components/Home/Home';

describe('Home Component', () => {
  it('renders the welcome message', () => {
    render(<Home />);
    const welcomeHeader = screen.getByText('Welcome');
    expect(welcomeHeader).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Home />);
    const nameHeader = screen.getByText("I'm Ana Ruy");
    expect(nameHeader).toBeInTheDocument();
  });

  it('renders the developer description', () => {
    render(<Home />);
    const description = screen.getByText('Developer Web');
    expect(description).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<Home />);
    const image = screen.getByAltText('Imagem de Marketing 2');
    expect(image).toBeInTheDocument();
  });
});
