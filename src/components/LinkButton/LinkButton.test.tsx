import { render, screen, fireEvent } from '@testing-library/react';
import LinkButton from './LinkButton';
 
describe("<LinkButton />", () => {
 
  test('Linkbutton rendered', () => {
    render(<LinkButton />);
  });
 
});