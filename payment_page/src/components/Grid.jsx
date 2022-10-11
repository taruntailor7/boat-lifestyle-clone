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
      <Stack direction="row" spacing={2} height={90}>
        <Item>
            <Box style={{display:"flex"}}>
              <Box>
                <p>₹1200</p>
                <h5>Pay via UPI</h5>

              </Box>
              <Box>
    <GroupAvatars/>
              </Box>
            </Box>
        </Item>
        <Item>
             <Box style={{display:"flex"}}>
              <Box>
                <p>₹1200</p>
                <h5>Pay via Card</h5>

              </Box>
              <Box>
              <GroupAvatar2/>
              </Box>
            </Box>
            </Item>
      
      </Stack>
    </div>
  );
}
