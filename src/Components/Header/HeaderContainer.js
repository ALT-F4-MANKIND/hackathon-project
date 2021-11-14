import React from 'react'
import './Header.css'
import { Button, Breadcrumb, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header () {
    return(
        <Row className="header">
        {/* // <header> */}
            HealthCheck
            <Breadcrumb>
                <Breadcrumb.Item>Make an entry</Breadcrumb.Item>
                <Breadcrumb.Item>Analysis</Breadcrumb.Item>
            </Breadcrumb>
        {/* </header> */}
        </Row>
    )
}

export default Header