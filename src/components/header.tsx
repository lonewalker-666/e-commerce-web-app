import { Col, Grid, Input, Row } from "antd";
import {MENUICON} from '../lib/constants'
import {ShoppingCartOutlined} from '@ant-design/icons'
import { useShowHide } from "../hooks/useShowHide";
import Nav from "./nav";

const Headers = () =>{
    const { useBreakpoint } = Grid
    const screens = useBreakpoint()
    const initial = {
    menu:screens.sm ? true : false,
    cart:false
    }
    const {visible,onHide,onShow} = useShowHide(initial)
    return(        
        <Row gutter={12} className="main-wrapper">
        <Col md={1} xs={2} sm={1} className="Col-1">
        {!screens.sm && <img src={MENUICON} width={20} height={20} onClick={()=>onShow('menu')}></img>}
        </Col>
        <Col md={1} xs={2} sm={1} className="Col-2">
        <img src='/favicon.ico' style={{borderRadius:15}} width={25} height={25}></img>
        </Col>
        <Col md={3} sm={4} xs={18} className="Col-3">
        <h1>E-Kart</h1>
        </Col>
        <Col md={17} sm={17} xs={24} className="Col-4">
          <Input placeholder="Search Your Favourite Brands"/>
        </Col>
        <Col md={2} sm={1} xs={2} className="Col-5">
        <ShoppingCartOutlined style={{fontSize:23}} />
        </Col>
        {visible.menu && <Nav visible={visible} onHide={onHide} closable={screens.sm}/>}
        </Row>
    )
}

export default Headers