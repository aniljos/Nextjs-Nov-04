import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ViewCustomers } from './page';

// Mock the global fetch function
beforeEach(() => {
  fetchMock.resetMocks();
});

describe('ListCustomers Component', () => {
  test('renders a list of customers after fetching', async () => {
    // Mock the fetch API response
    const mockCustomers = [
      { id: 1, name: 'Customer 1', location: "Mumbai" },
      { id: 2, name: 'Customer 2' },
    ];
    fetchMock.mockResponseOnce(
      JSON.stringify(mockCustomers)
    );

    // Render the server component
    render(await ViewCustomers({interval: 1}));

    // Check if the product heading is rendered
    expect(screen.getByText('List Customers')).toBeInTheDocument();

    // Check if the product names are rendered
    expect(screen.getByText('Mumbai')).toBeInTheDocument();
    expect(screen.getByText('Customer 2')).toBeInTheDocument();

   
    
  });

  
});
