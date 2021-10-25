import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetCryptoDataQuery } from '../Services/cryptoApi';
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input } from 'antd';



const Cryptocurrencies = ({limited}) => {
    const count = limited?10:100;
    const {data:crytoList,isFetching} = useGetCryptoDataQuery(count);
    const [cryptos,setCryptos] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    useEffect(()=>{
        const filterSearch = crytoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm))
        setCryptos(filterSearch);
    },[crytoList,searchTerm]);

    console.log(cryptos);   
    if(isFetching) return "Loading..."
    return (
      <>
        {!limited && (
          <div className="search-crypto">
            <Input
              placeholder="Search CryptoCurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.id}
            >
              <Link to={`./crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" alt="icon" src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
}

export default Cryptocurrencies;
