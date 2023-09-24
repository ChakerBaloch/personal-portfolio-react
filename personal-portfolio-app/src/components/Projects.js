import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import testImage from '../Images/testCard.jpg';

function MultiActionAreaCard() {
  return (
    <Card
    sx={{
      maxWidth: 310,
      p: 0,
      borderRadius: 2,
      bgcolor: 'background.default',
      //display: 'grid',
      //gridTemplateColumns: { md: '0.5fr 0.5fr' },
      //gap: 1,
      transition: 'box-shadow 0.5s, transform 0.5s ease-out', // Add transitions for box-shadow and transform
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)', // Adjust the shadow for hover
        transform: 'scale(1.05)', // Apply a scaling effect on hover
      },
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={testImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}

// function generateCards(count) {
//   const cards = [];
//   for (let i = 0; i < count; i++) {
//     cards.push(<MultiActionAreaCard key={i} />);
//   }
//   return cards;


export { MultiActionAreaCard};
