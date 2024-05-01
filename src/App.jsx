import './App.css';
import { router } from './routes/route';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';
import { MaterialTailwindControllerProviders } from 'src/pages/admin/context/index.jsx';
import { MaterialTailwindControllerProvider } from 'src/pages/seller/context/index.jsx';
import { MaterialTailwindControllerProvidere } from 'src/pages/broker/context/index.jsx';
const App = () => {
  return (
    <>
      <ThemeProvider>
        <MaterialTailwindControllerProviders>
          <MaterialTailwindControllerProvider>
            <MaterialTailwindControllerProvidere>
              <RouterProvider router={router} />
            </MaterialTailwindControllerProvidere>
          </MaterialTailwindControllerProvider>
        </MaterialTailwindControllerProviders>
      </ThemeProvider>
    </>
  );
};

export default App;
