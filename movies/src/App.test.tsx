import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import Watched from './components/pages/Watched';
import WantToWatch from './components/pages/WantToWatch';

test('renders Home page for the root URL path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/wanttowatch' element={<WantToWatch />} />
      </Routes>
    </MemoryRouter>
  );
});

test('renders Watched page for the "/watched" path', () => {
  render(
    <MemoryRouter initialEntries={['/watched']}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/wanttowatch' element={<WantToWatch />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/Watched/i)).toBeInTheDocument();
});

test('renders WantToWatch page for the "/wanttowatch" path', () => {
  render(
    <MemoryRouter initialEntries={['/wanttowatch']}>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/wanttowatch' element={<WantToWatch />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(/Want to Watch/i)).toBeInTheDocument();
});