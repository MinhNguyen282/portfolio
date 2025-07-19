import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeContext';

const renderWithThemeProvider = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('ThemeToggle', () => {
  test('renders theme toggle button', () => {
    renderWithThemeProvider(<ThemeToggle />);
    
    const toggleButton = screen.getByRole('switch');
    expect(toggleButton).toBeInTheDocument();
  });

  test('has proper ARIA attributes', () => {
    renderWithThemeProvider(<ThemeToggle />);
    
    const toggleButton = screen.getByRole('switch');
    expect(toggleButton).toHaveAttribute('aria-label');
    expect(toggleButton).toHaveAttribute('aria-checked');
  });

  test('toggles theme when clicked', () => {
    renderWithThemeProvider(<ThemeToggle />);
    
    const toggleButton = screen.getByRole('switch');
    const initialAriaChecked = toggleButton.getAttribute('aria-checked');
    
    fireEvent.click(toggleButton);
    
    const newAriaChecked = toggleButton.getAttribute('aria-checked');
    expect(newAriaChecked).not.toBe(initialAriaChecked);
  });

  test('displays correct icons for light and dark modes', () => {
    renderWithThemeProvider(<ThemeToggle />);
    
    const sunIcon = screen.getByRole('switch').querySelector('svg');
    expect(sunIcon).toBeInTheDocument();
  });
});
