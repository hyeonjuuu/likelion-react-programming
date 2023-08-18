import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const Home = () => <div>Home</div>;
const Products = () => <div>Products</div>;
const Contact = () => <div>Contact</div>;

// router  길 안내자
// route 길
const router = createBrowserRouter([
  // Router Object = 객체

  // 경로(path)에 어떤 요소(element <- <Component />)를 화면에 렌더링 할 건가요?
  // { path: '/', element: <RootLayout /> },
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/contact', element: <Contact /> },
]);

console.log(router);

function App() {
  return <div className="App"></div>;
}

export default App;
