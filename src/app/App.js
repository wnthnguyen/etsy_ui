import { Box, Button, Card, Typography } from '@mui/material';

import { useGetOrders } from '../hooks/queries';

function App() {
  const { data, isFetching } = useGetOrders();

  const handleClick = () => {};

  return (
    <Card
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        m: 3,
        textAlign: 'center',
        width: 1,
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Hello Winnie
      </Typography>
      <Card sx={{ p: 2, width: 0.5, textAlign: 'center' }}>
        <Button onClick={handleClick} sx={{ m: 1 }}>
          Fetch Orders
        </Button>
      </Card>
    </Card>
  );
}

export default App;
