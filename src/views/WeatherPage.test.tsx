// import { render, screen } from '@testing-library/react';
import WeatherPage from './WeatherPage';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../components/Header/Header';
import React from 'react';
import Search from '../components/Search/Search';
import Location from '../components/Location/Location';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import DailyWeather from '../components/DailyWeather/DailyWeather';
import HourlyWeather from '../components/HourlyWeather/HourlyWeather';

Enzyme.configure({ adapter: new Adapter() })

let wrapped: ShallowWrapper;

beforeEach((): void => {
  wrapped = shallow(<WeatherPage />);
});

describe('Test Case For WeatherPage', () => {

  it('renders the WeatherPage component', (): void => {
    expect(wrapped).toMatchSnapshot();
  });

  //loading is true so not render any components
  it('should not render Header', () => {
    expect(wrapped.find(Header).length).toEqual(0);  
})
  it('should not render Search', () => {
    expect(wrapped.find(Search).length).toEqual(0);  
})
  it('should not render Location', () => {
    expect(wrapped.find(Location).length).toEqual(0);  
})
  it('should not render CurrentWeather', () => {
    expect(wrapped.find(CurrentWeather).length).toEqual(0);  
})
  it('should not render DailyWeather', () => {
    expect(wrapped.find(DailyWeather).length).toEqual(0);  
})
  it('should not render HourlyWeather', () => {
    expect(wrapped.find(HourlyWeather).length).toEqual(0);  
})
})
 
// describe('Test Case For Weather Data APIs', () => {
//     const API_ID: string = "e3a4e39f4c824772f7d35bc0b095f245";

//     const LOCATION_API: string = `https://api.openweathermap.org/geo/1.0/reverse?lat=23.04&lon=72.6666&appid=${API_ID}`;
//     const WEATHER_API: string = `https://api.openweathermap.org/data/2.5/onecall?lat=23.04&lon=72.6666&units=metric&appid=${API_ID}`;
//     const LATLON_API: string = `https://api.openweathermap.org/geo/1.0/direct?q=ahmedabad&appid=${API_ID}`;

//     const fetch1 = async () =>
//     {var requestOptions: Object = {
//         method: "GET",
//         redirect: "follow",
//       };
// 	fetch(WEATHER_API, requestOptions)
//         .then((response) => response.json())
//     }

// })

