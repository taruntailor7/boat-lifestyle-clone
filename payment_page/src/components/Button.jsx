import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
const style={
  backgroundColor:"black",width:"290px",
  height:"60px",marginLeft:"50px"
  ,marginRight:"-100px",
  marginTop:"-10px"
}
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" width={200} >
    
      <Button  variant="contained" style={style}>Continue   <span/><EastIcon/> </Button>
      
    </Stack>
  );
}
