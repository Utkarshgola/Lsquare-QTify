import React from 'react'
import Songcard from '../Card/Songcard'
import styles from './Section.module.css'
import { Button, Collapse } from '@mui/material'
import axios from 'axios'
import { useState,useEffect} from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../..//assets/rightArrow.svg';


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
          {open ? 'Show All' : 'Collapse'}
        </Button>
      </div>
        
      <Box className="gridBox" sx={{ flexGrow: 1,  }}>
      <Collapse in={!open}>
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

          {open && (
            <>
         <div className={styles.swiperContainer}>
            <div className={styles['prevCustomButton']}>
                    <img src={leftArrow} alt="Previous" />
                  </div>
                  <div className={styles['nextCustomButton']} >
                    <img src={rightArrow} alt="Next" />
            </div>
          </div>

        <Swiper
        spacing={5}
        slidesPerView={7}
        spaceBetween={50}
        breakpoints={{
          10: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          540: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          clickable: true,
          prevEl: `.${styles['prevCustomButton']}`,
          nextEl: `.${styles['nextCustomButton']}`,
          
      }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        
      >
        
        {topSongs.map((song) => (
                <SwiperSlide>
                    <Grid item xs={6} md={4} key={song.id} sx={{m:5}}>
                      <Songcard song={song}/>
                    </Grid>
                </SwiperSlide>
              ))}
               
          
      </Swiper>
    </>
        
      )}

      </Box>
   
    </div>
  )
}

export default Section