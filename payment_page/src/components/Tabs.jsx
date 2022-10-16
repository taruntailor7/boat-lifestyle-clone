import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import '../tab.css'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'
import BasicButtons from "./Button"
import { Button, Input } from '@mui/material';
import { Address_page } from './Addresspage';
import {Cardpage} from "./Paythrough_card"
import { style } from '@mui/system';


export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [text,setText]=React.useState("");
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Input_style=
  {
    borderRadius:"4px",height:"40px",marginTop:"30px",width:"250px",fontFamily: "metropolismedium",fontSize: "18px",lineHeight: "30px",fontWeight: "600",
    border:"2px solid black"
  }
  const style=
    {margin:"auto",fontFamily:"sans-serif",fontSize:"24px",fontWeight:"2",color:"#0c111b ",marginLeft:"38px",marginTop:"70px"}
  const handleclick =()=>{
    console.log("button is clicked")
    if(text<10){
      alert("enter 10 digit number")
    }
    if(text>10){
      alert("enter 10 digit")
    }
    
  }
const style2=
{alignContent:"center"  ,margin:"auto",gap:"10px",marginBottom:"40px",fontFamily: "metropolismedium",marginTop:"-30px",textAlign:"center",marginLeft:"-100px"}
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
        
              <Tab label="Mobile" value="1" />
            <Tab label="Address" value="2" />
            <Tab label="Pay" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Box style={style2}>
           
                <h4 style={style}  >Enter Mobile Number</h4 >
               
              <span> <Input placeholder='ENTER NUMBER' style={Input_style } type="number" value={text} onChange={(e)=>setText(e.target.value)}/></span>
                <div>
      <input type="checkbox"  checked style={{marginTop:"15px",marginBottom:"8px"}}/>
      <label>Notify me for orders,updates & offers</label>
    </div>
            </Box>
            <BasicButtons onClick={handleclick}/>

        </TabPanel>
        <TabPanel value="2"><Address_page/></TabPanel>
        <TabPanel value="3"><Cardpage/></TabPanel>
      </TabContext>
    </Box>
  );
}
