import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
 
describe("<Input />", () => {
 
  test('input rendered', () => {
    render(<Input />);
  });
 
});