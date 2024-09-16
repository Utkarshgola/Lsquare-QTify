import React from 'react'
import Songcard from '../Card/Songcard'
import styles from './Section.module.css'
import { Button, Collapse } from '@mui/material'
import axios from 'axios'
import { useState,useEffect} from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../..//assets/rightArrow.svg';


function Section({songsSection}) {
  const [topSongs,setTopSongs] =useState([]);
  const [open, setOpen] = useState(true);
  const [value, setValue] = React.useState("all");
  // const [generes,setGenere] = useState([]);
  const [allSongs,setAllSongs] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredSongs = value === 'all'  //filtering songs basedon genres
  ? allSongs
  : allSongs.filter(song => song.genre.key === value);

  useEffect(() => {
    const fetchData = async () => {
      const TopSongslist = await fetchTopSongs();
      // fetchGeneres();
      fetchSongs();
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

  // const fetchGeneres= async()=>{
  //   const res = await axios.get("https://qtify-backend-labs.crio.do/genres")
  //   setGenere(res.data.data);
  //   console.log(res.data.data);
  // }

  const fetchSongs = async ()=>{
    const response = await axios.get("https://qtify-backend-labs.crio.do/songs")
    console.log(response.data);
    setAllSongs(response.data);
  }
  return (
    
    <div className={styles.body}>
      <div className={styles.header}>
        {songsSection ? //showing songs instead of top albums
        (<h3>Songs</h3>):(<h3>Top Albums</h3>)} 
      

      {!songsSection && (    //hiding showall button for songs dection
      <Button className={styles.collapse} onClick={()=>setOpen(!open)}>
          {open ? 'Show All' : 'Collapse'}
        </Button>
        )}
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

          {songsSection &&(    //creating a tab filter for songs section  
        <Box sx={{ width: '100%',}}>
            <Tabs
              value={value}
              onChange={handleChange}
              
              // textColor="secondary"
              // indicatorColor="secondary"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#34C94B', // Custom indicator color
                },
                '& .MuiTab-root': {
                  // color: 'white', // Default text color
                  '&.Mui-selected': {
                    color: '#34C94B', // Custom selected text color
                    
                  },
                },
              }}
              aria-label="secondary tabs example"
            >

              <Tab  value="all" label="All" sx={{color:'white',fontFamily:'Poppins'}} />
              <Tab  value="jazz" label="jazz" sx={{color:'white',fontFamily:'Poppins'}} />
              <Tab  value="rock" label="Rock" sx={{color:'white',fontFamily:'Poppins'}} />
              <Tab  value="pop" label="Pop" sx={{color:'white',fontFamily:'Poppins'}} />
              <Tab  value="blues" label="Blues" sx={{color:'white',fontFamily:'Poppins'}} />
              {/* {generes.map((song)=>(
                <Tab value={song.key} label={song.label} sx={{color:'white',fontFamily:'Poppins'}} />
              ))} */}
              
            </Tabs>
        </Box>
          )}

          

        
             {!songsSection ? ( open && (        //creating diff carousels for top albums and songs
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
          
        )
  ):
   (
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
  
  {filteredSongs.map((song) => (
        <SwiperSlide>
            <Grid item xs={6} md={4} key={song.id} sx={{m:5}}>
              <Songcard song={song} songsSection={true}/>
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