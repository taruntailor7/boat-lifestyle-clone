import React from "react"
import Box from "@mui/material/Box"
import { Input } from "@mui/material"
import '../tab.css'
import BasicButtons from "./Button"

export const Address_page=()=>{
    return <Box >

    <Box style={{display:"flex",justifyContent:"space-between",width:"99%",}}>
  <Box style={{fontSize:"13px"}}><p>Add new address</p></Box>
  <Box style={{fontSize:"10px"}}><p>Mandatory Fields</p></Box>
    </Box>
    <hr/>
    <Box style={{overflowY:"scroll",height:"150px",marginBottom:"60px"}}>
        <label>Pincode</label>
        <Input type="text" placeholder="Pincode" className="Input_boxes"/>
        <Box className="input_box">
            <Box className="baby_input">
                <label>City</label>
                <Input/>
            </Box>

            <Box  className="baby_input">
            <label>State</label>
                <Input/>
            </Box>
           
        </Box>
        <Box >
        <label>Name</label>
        <Input placeholder="ENTER NAME" className="Input_boxes"/>
        </Box>
        <Box >
        <label>Email</label>
            <Input placeholder="ENTER EMAIL ADDRESS"  className="Input_boxes"/>
            </Box>
    </Box>
    <BasicButtons />
    
    </Box>

}