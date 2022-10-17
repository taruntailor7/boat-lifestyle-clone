import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AddressPage } from './Address'
import "../payment_page1/Mystyle.css"
import { MobilePage } from './Mobile_box'
import { Paymentpage } from './Payment_page'
export const Alltabs=()=>{
    return <>
    <Tabs display={{lg:"block"}}>
  <TabList>
    <Tab className="Tab">Mobile</Tab>
    <Tab className="Tab">Address</Tab>
    <Tab className="Tab">Pay</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <MobilePage/>     
    </TabPanel>
    <TabPanel>
     <AddressPage/>
    </TabPanel>
    <TabPanel>
      
      <Paymentpage/>
    </TabPanel>
  </TabPanels>
</Tabs></>
}