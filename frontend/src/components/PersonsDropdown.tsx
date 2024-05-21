
import React, { useState,FC, useEffect } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space,Button } from 'antd';
import { Context } from './StateContext';
const PersonsDropdown: FC<{data?:any }> = ({data}) => {
    console.log("data in test",data)
    const [open, setOpen] = useState(false);

    const {adults, setAdults}:any= Context()
    const {child, setChild}:any = Context()
    const {infant, setInfant}:any = Context()
    const {travelers, setTravelers}:any = Context()

    useEffect(()=>{

        // setAdults(parseInt(data?.adults)) ;
        // setChild(parseInt(data?.child) );
        // setInfant(parseInt(data?.infant) );
        // setTravelers(parseInt(data?.travelers));
        

    },[])
    const handleIncreaseAdults = () => {
        if (adults < 9) {
            setAdults(adults+ 1);
            setTravelers(travelers + 1);
        }
    };

    const handleDecreaseAdults = () => {
        if (adults > 0) {
            setAdults(adults - 1);
            setTravelers(travelers - 1);
        }
    };
    const handleIncreasechild = () => {
        if (child < 9) {
            setChild(child + 1);
            setTravelers(travelers + 1);
        }
    };

    const handleDecreasechild = () => {
        if (child > 0) {
            setChild(child - 1);
            setTravelers(travelers - 1);
        }
    };
    const handleIncreaseInfant = () => {
        if (infant < 9) {
            setInfant(infant + 1);
            setTravelers(travelers + 1);
        }
    };
    const handleDecreaseInfant = () => {
        if (infant > 0) {
            setInfant(infant - 1);
            setTravelers(travelers - 1);
        }
    };


 
   
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '4') {
            setOpen(false);
        }
    };

    const handleOpenChange = (flag: boolean) => {
        setOpen(flag);
    };

    const items: MenuProps['items'] = [
        {
            label: (
                <div style={{ display: 'flex', alignItems: 'center',marginRight:'15px' }}>
                    <div style={{ flex:1}}>  <h1 >Adults</h1>  </div>
                    <div>
                  

                     
                    <Button shape='circle' onClick={handleDecreaseAdults} style={{borderColor: "gray" }}>
                        -
                    </Button>
                    <span style={{ margin: '0 8px', fontWeight: '600' }}> {adults}</span>
                    <Button shape='circle' onClick={handleIncreaseAdults} style={{borderColor: "gray" }}>
                        +
                    </Button>
                </div>
                </div>),
            key: '1',
        },
        {
            label: (
        
                    <div style={{ display: 'flex', alignItems: 'center' ,marginRight:'15px' }}>
                    <div style={{ flex:1}}>  <h1>child</h1>  </div>
                    <div>


                    <Button shape='circle' onClick={handleDecreasechild} style={{borderColor: "gray" }}>
                        -
                    </Button >
                    <span style={{ margin: '0 8px', fontWeight: '600' }}> {child}</span>
                    <Button shape='circle' onClick={handleIncreasechild} style={{borderColor: "gray" }}>
                        +
                    </Button>
                </div>
                </div>),
            key: '2',
        },
        {
            label: (
                <div style={{ display: 'flex', alignItems: 'center', marginRight:'15px' }}>
                    <div style={{ flex:1}}>  <h1>Infant</h1>  </div>
                    <div >
                    <Button shape='circle' onClick={handleDecreaseInfant} style={{borderColor: "gray" }}>
                        -
                    </Button >
                    <span style={{ margin: '0 8px', fontWeight: '600' }}> {infant}</span>
                    <Button shape='circle' onClick={handleIncreaseInfant} style={{borderColor: "gray" }}>
                        +
                    </Button>
                </div>
                </div>),
            key: '3',
        },
        {
            label: (
                <div>
                    <Button type="primary" block icon={<SearchOutlined />} className='bg-secondarycolor'>
                        Search
                    </Button>
                </div>
            ),
            key: '4',
        },
       
    ];

    return (
 
        <Dropdown overlayStyle={{ minWidth: '350px',height:'50%' } } 
            menu={{
                items,
                onClick: handleMenuClick,
            }}
            onOpenChange={handleOpenChange}
            open={open}
            placement="bottomLeft"  // Add this line to set the placement to "bottomLeft"
            getPopupContainer={(trigger:any) => trigger.parentNode} // Add this line to set the popup container
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space className="text-white bg-secondarycolor  hover:bg-tertiarycolor focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center  mb-2" >
                    {`${travelers}Persons`}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    );
};

export default PersonsDropdown;