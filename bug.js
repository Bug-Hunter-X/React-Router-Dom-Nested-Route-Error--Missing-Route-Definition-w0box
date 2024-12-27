```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Missing Route for nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/about/details">Go to Details</Link>
    </div>
  );
}

function AboutDetails() {
  return (
    <div>
      <h1>About Details Page</h1>
    </div>
  );
}
```