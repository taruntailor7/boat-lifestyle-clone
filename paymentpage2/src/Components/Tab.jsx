import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Summary} from "./Summary"
import {Address} from "./Address"
import {Payment_page} from "./Payment"
export function Mytab(){
    return <>
    <Tabs>
  <TabList>
    <Tab >Summary</Tab>
    <Tab>Address</Tab>
    <Tab>Payment</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Summary/>
    </TabPanel>
    <TabPanel>
     <Address/>
    </TabPanel>
    <TabPanel>
      <Payment_page/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
}