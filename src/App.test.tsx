// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WeatherPage from './views/WeatherPage';

Enzyme.configure({ adapter: new Adapter() })

let wrapped: ShallowWrapper;

beforeEach((): void => {
  wrapped = shallow(<App />);
});

describe('Test Case For App', () => {

  it('renders the APP component', (): void => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should render weather page div', () => {
    expect(wrapped.find('.bg').length).toEqual(1);
  })
  it('should render weather page', () => {
    expect(wrapped.find(WeatherPage).length).toEqual(1);
  })
})



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
