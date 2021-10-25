import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import { useGetCryptoDataQuery } from '../Services/cryptoApi';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';



const HomePage = () => {
    const {data,isFetching}=useGetCryptoDataQuery(10);

    /* ?. is same like changin directory in Linux but here we are using it to react to correct object */
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...';

    console.log(data);
    return (
       <>
       <Typography.Title level={2} className="heading">
           Global Crypto stats
       </Typography.Title>

       <Row>
           <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
           <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
           <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
           <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
           <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
       </Row>
       <div className="home-heading-container">
           <Typography.Title level={2} className="home-title">Top 10 Cryptocurries in the world</Typography.Title>
           <Typography.Title level={3} className="show-more"><Link to="/crytocurrencies">Show More</Link></Typography.Title>

       </div>
       <Cryptocurrencies limited/>
       <div className="home-heading-container">
           <Typography.Title level={2} className="home-title">Latest Crypto News </Typography.Title>
           <Typography.Title level={3} className="show-more"><Link to="/news">Show More</Link></Typography.Title>
       </div>
        <News limited/>
       </>
    )
}

export default HomePage;