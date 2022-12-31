// import * as React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
// import {  } from "react-testing-library";
import "jest-dom/extend-expect";
import axios from 'axios';

// import App from './App';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

describe('sdf', () => {
  it('fetches successfully data from an API', async () => {
    const users = {nsdf: 'dsfds'}
    const resp = {data: users};
    (axios.get as jest.Mock).mockResolvedValue(resp);
    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve());

  });
  it('fetches results from api', () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ results: [] });
    // getAreas('atl').then((response: any) => {
    //   expect(response).toEqual({ results: [] });
    // });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/test/areas/atl');
  });
})



// describe('App', () => {
//   // it('renders App component', () => {
//     render(<App />);
//   // });
// });