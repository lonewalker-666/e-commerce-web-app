import { Col, Layout, Row ,Grid, Card, Empty, Anchor} from 'antd';
import Head from 'next/head'
import { useContext } from 'react';
import Headers from '../src/components/header'
import SideNavigation from '../src/components/sideNavigation';
import { filterContext } from '../src/context/filterContext';
import {get,isEmpty} from 'lodash'
import Styles from '../styles/Home.module.css'

export default function Home() {
  const { Header, Content, Footer } = Layout;
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  const {state} = useContext(filterContext)
  const products = get(state,'products_data',[])
 
 return (
<Layout >
<Anchor className='anchor'>
<Header style={{color:'white',paddingInline:20}}>
<Head>
        <title>E-Commerce App</title>
        <meta name="description" content="E-Commerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Headers />
</Header>
</Anchor>
<Content>
  <Card.Grid>
  <Row>
    {screens.sm && <Col md={6} ><SideNavigation/></Col>}
    <Col md={18}>
      <Row>{!isEmpty(products) ? products.map((record:any)=>{
        return(
          <Col md={6} sm={12} xs={12} key={record.id}>
            <Card key={record.id} className={Styles.card}>
              <span className='p'><img src={record.filePath} width="100%" height="100%"></img></span>
              <span className='p'><p className='h2'>
                {record.name} {record.price}
              </p></span>
            </Card>
          </Col>
        )
      }):<Col md={24} sm={24} xs={24} style={{alignItems:"center",justifyItems:"center",height:"100%",width:"100%"}}><Empty /></Col>}</Row>
    </Col>
  </Row>
  </Card.Grid>
</Content>
</Layout>
    )
}

      
        