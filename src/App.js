
import React from "react";
import {Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {Navbar,News,Cryptocurrency,CryptoDetails,Homepage} from "./Components";
import './App.css'

const App = () =>{
    return(
        <div className="app"> Hey Div Show something
            <div className="navbar"><Navbar/></div>
            <div className="main">
                <Layout> 
                    <div className="routes">
                    <Routes>
                        <Route exact path="/" element={<Homepage />}> </Route>
                        <Route exact path="/Cryptocurrency" element={<Cryptocurrency/>}> </Route>
                        <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}> </Route>
                        {/* <Route exact path="/exchange" element={<Exchange/>}> </Route> */}
                        <Route exact path="/news" element={<News/>}> </Route>
                    </Routes >
                    </div>
                </Layout>
            
            <div className="footer">
                <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
                    Crypto Mars<br/>
                    None of the rights are reserved
                </Typography.Title>
                <Space>
                <Link to= '/'>Homepage</Link>
                <Link to= '/news'>News</Link>   
                {/* <Link to= '/exchange'>Exchange</Link> */}
                </Space>
                
            </div>
            </div>
        </div>
    )
}

export default App