import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


import './App.css';

function App() {
  

  return (
    <>
   




<Box
  component="ul"
  sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
>
  <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
    <CardCover>
    <iframe
        width="100%"  // Ensure it adapts to card width
        height="315"  // Set height for standard 16:9 ratio
        src="https://www.youtube.com/embed/RDV3Z1KCBvo?autoplay=1&mute=1"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </CardCover>
    <CardContent>
      <Typography
        level="body-lg"
        textColor="#fff"
        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
      >
        YouTube Video
      </Typography>
    </CardContent>
  </Card>
</Box>

  );
}
    </>
  )
}

export default App