import React, { useState } from 'react';
import Cover from '../../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const{ category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu();
   
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
           <Helmet>
             <title>Yoga school | Order Class</title>
            </Helmet> 
            <Cover img={`https://img.freepik.com/free-photo/group-young-people-smiling-happy-training-yoga-sport-center_839833-7403.jpg?size=626&ext=jpg&ga=GA1.2.919864537.1687618236&semt=ais`} title={"Order Class"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex (index)}>
          <TabList>
        <Tab>Vinysa</Tab>
        <Tab>Kundalini</Tab>
        <Tab>Restoractive</Tab>
        <Tab>Asthanga</Tab>
        <Tab>Power</Tab>
      </TabList>
      <TabPanel>
       <OrderTab items={salad}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={soup}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={desserts}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks}></OrderTab>
      </TabPanel>
    </Tabs>
        </div>
    );
};


export default Order;