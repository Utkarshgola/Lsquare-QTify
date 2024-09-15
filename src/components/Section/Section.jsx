import React from 'react'
import Songcard from '../Card/Songcard'
import styles from './Section.module.css'
import { Button, Collapse } from '@mui/material'
import axios from 'axios'
import { useState,useEffect} from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';




function Section() {
  const [topSongs,setTopSongs] =useState([]);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const TopSongslist = await fetchTopSongs();
    };

    fetchData();
  }, []);

 

  // Function to toggle the collapse state
  // const handleToggle = () => {
  //   setOpen(prevOpen => !prevOpen);
  // };

  const fetchTopSongs = async ()=>{
    const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
    console.log(response.data);
    setTopSongs(response.data);
  }
  return (
    
    <div className={styles.body}>
      <div className={styles.header}>
      <h3>Top Albums</h3>
      <Button className={styles.collapse} onClick={()=>setOpen(!open)}>
          {open ? 'Collapse' : 'Show All'}
        </Button>
      </div>
        
      <Box className="gridBox" sx={{ flexGrow: 1,  }}>
      <Collapse in={open}>
      <Grid container  sx={{ p: 5 }}>
          <Grid item xs={12} >
            <Grid container spacing={2} sx={{display:'flex',justifyContent:'space-between',}}>
              {topSongs.map((song) => (
                <Grid item xs={6} md={4} key={song.id}>
                  <Songcard song={song}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          </Grid>
          </Collapse>

          {!open && (
        <Box p={2} bgcolor="grey.100">
          This content is shown when the collapse is closed.
        </Box>
      )}

      </Box>
   
    </div>
  )
}

export default Section