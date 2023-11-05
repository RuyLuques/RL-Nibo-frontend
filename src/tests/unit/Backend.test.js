/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Backend from '../../components/Backend/Backend';
import { fetchBackendProjects } from '../../services/api';
import { act } from 'react-dom/test-utils'; 

jest.mock('../../services/api', () => ({
  fetchBackendProjects: jest.fn(),
}));

describe('Backend Component', () => {
  it('renders the component', () => {
    render(<Backend />);
    const header = screen.getByText('Backend');
    expect(header).toBeInTheDocument();
  });

  it('fetches and renders projects', async () => {
    fetchBackendProjects.mockResolvedValue([
      {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        link: 'http://localhost:8000/backend',
        image: 'project1.png',
      },
    ]);

    await act(async () => {
      render(<Backend />);
    });
    
    await waitFor(() => {
      const project1 = screen.getByText('Project 1');
      expect(project1).toBeInTheDocument();
    });
  });

  it('handles fetch error', async () => {
    fetchBackendProjects.mockRejectedValue(new Error('Fetch error'));

    await act(async () => {
      render(<Backend />);
    });
  });
});
