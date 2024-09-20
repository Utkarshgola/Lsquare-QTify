import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import styles from './Songcard.module.css'
import { Grid2 } from '@mui/material';

function Songcard({song, songsSection}) {

  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'k'; 
    }
    return number.toString(); 
  }

  
  return (
    <Card sx={{ width: '159px',height:'232px', backgroundColor:'black'}}>
      <div className={styles.uppercard}>
        <div className={styles.imagecontainer}>
        <img className={styles.image} src={song.image} alt={song.title} srcset="" />
        </div>
       
         <div className={styles.chip}>
          {songsSection ? (
            <Chip label={`${formatNumber(song.likes)} Likes`} variant="outlined" sx={{backgroundColor:'black', color:'white',ml:'8px',}} />
          ):(
            <Chip label={`${formatNumber(song.follows)} Follows`} variant="outlined" sx={{backgroundColor:'black', color:'white',ml:'8px',}} />
          )}
         
         </div> 
      </div>

        
      <div className={styles.bottomText}>  
        <Typography  sx={{ color: 'white' }}>
          {song.title}
        </Typography>
      </div>

      
    </Card>
  )
}

export default Songcard