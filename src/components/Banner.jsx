import React from 'react'
import banner from '../UI/banner.module.css'
import Box from '@mui/material/Box';
// import { Button } from '@mui/material';

function Banner() {
  return (
    <>
      <Box className={banner.container}>
      <Box className={banner.bigdiv}>
        <Box className={banner.minidiv}>
            <button><a href='#'>New laptop </a></button>
            <h1>Sale up to 50% off</h1>
            <p>12 inch hd display</p>
            <button><a href='#'>Shop now</a></button>
        </Box>

      </Box>
      </Box>
    </>
  )
}

export default Banner