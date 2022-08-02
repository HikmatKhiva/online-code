import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, EditorPage } from './pages/export';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './Context/onlineCodeContext'
function App() {
  return (
    <ContextProvider>
      <div className='code-toast'>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88'
              }
            }
          }}
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
