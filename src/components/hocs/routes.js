import React from 'react'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { Switch } from 'react-router-dom'
import AuthScreen from '../../pages/AuthScreen'
import Dashboard from '../../pages/Dashboard'
import { Col, Row } from 'antd'

const Routes = ({authenticated}) => {
    return (
        <Row justify="center" align="middle">
            <Col span={20}>
                <Switch>
                    <PrivateRoute path="/dashboard" authenticated={authenticated} component={Dashboard}></PrivateRoute>
                    <PublicRoute authenticated={authenticated} component={AuthScreen}></PublicRoute>
                </Switch>
            </Col>
        </Row>
    )
}

export default Routes
