import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <a href="/" className="hover:text-blue-400">
          Home
        </a>
      </li>
      <li>
        <a href="/products" className="hover:text-blue-400">
          Products
        </a>
      </li>
      <li>
        <a href="/contact" className="hover:text-blue-400">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

const Home = () => (
  <div>
    <Nav />
    <h1 className="text-black text-emerald-500">Home</h1>
  </div>
);
const Products = () => (
  <div>
    <Nav />
    <h1 className="text-black text-emerald-500">Products</h1>
  </div>
);
const Contact = () => (
  <div>
    <Nav />
    <h1 className="text-black text-emerald-500">Contact</h1>
  </div>
);

const router = createBrowserRouter([
  // Router Object
  // 경로(path), 요소(element ← <Component />)
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/contact', element: <Contact /> },
]);

console.log(router);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
