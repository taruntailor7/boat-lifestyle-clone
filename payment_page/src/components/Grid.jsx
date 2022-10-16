import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import GroupAvatars from "./Avatar"
import {GroupAvatar2} from "./Avatar"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={2} height={60}>
         <Box style={{display:"flex",gap:"10px",TextAlign:"center",width:"440px",justifyContent:"space-around",alignItems:"center"}}>
           <h1>Enter card details</h1 >
           <GroupAvatar2/>
           </Box>
        {/* <Item>
              <GroupAvatar2/>
           
            </Item> */}
      
      </Stack>
    </div>
  );
}
