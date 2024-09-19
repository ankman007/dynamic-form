import './App.css';
import Form from './components/Form';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#065143', 
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800, 
          padding: 2,
          boxShadow: 3, 
          backgroundColor: '#d8f3dc', 
          borderRadius: 2, 
        }}
      >
        <Form />
      </Box>
    </Box>
  );
}

export default App;
