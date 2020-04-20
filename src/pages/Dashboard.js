import React, { useEffect, useState, Fragment } from 'react'
import { Tabs, Button, Typography } from 'antd';
import { logout, getCurrentUser} from '../helpers/auth'
import UploadFile from '../components/Upload';
import TaxPayple from '../components/TaxPayple';
import TaxPayple2 from '../components/TaxPayple2';
const { TabPane } = Tabs;
const { Title } = Typography

const DashBoard = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(getCurrentUser());
  }, [])

  const operations = (
    <Fragment>
      <Title level={4} style={{marginRight: 10 }}>Hi, {user.displayName}</Title>
      <Button onClick={logout}>Logout</Button>
    </Fragment>
  )


  return (
    <Fragment>
      <Title level={1} style={{ textAlign: 'center'}}>FAST <span style={{color: '#1890ff'}}>TAX</span></Title>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tax Payple" key="1">
          {/* <TaxPayple /> */}
          <TaxPayple2 />
        </TabPane>
        <TabPane tab="Upload file" key="2">
          <UploadFile />
        </TabPane>
      </Tabs>
    </Fragment>
    )
}

export default DashBoard
