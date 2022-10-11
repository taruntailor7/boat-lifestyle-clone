
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LabTabs from "./Tabs"
import SimpleAccordion from "./Right_box"
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height:450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:3,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Box style={{display:"flex",justifyContent:"space-around"}}>
            <Box style={{width:"60%"}}>
                <Box><img style={{width:"60px"}} src="http://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_2_256x256_7343fcda-46a7-4e67-885d-1ad75a441106.png?v=1647426867" alt="logo"/></Box>
                <Box >
                    <LabTabs/>
                </Box>
            </Box>
            <Box style={{width:"40%",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <SimpleAccordion/>
            </Box>
          </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


