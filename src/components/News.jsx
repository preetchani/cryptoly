import React from 'react';
import { useGetCryptoNewsDataQuery } from '../Services/cryptoNews';
import moment from 'moment';
import {Row,Col,Select,Typography,Card,Avatar} from 'antd';

const fallbackImg='https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
const News = ({limited}) => {
    const {data:cryptoNews} = useGetCryptoNewsDataQuery({newsCategory:'Cryptocurrency',count:limited?6:12});
    console.log(cryptoNews);
    if(!cryptoNews?.value) return "Loading..."
    return (
        <Row gutter={[24,24]}>
            {cryptoNews.value.map((news,i)=>(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card className="news-card" hoverable>
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Typography.Title className="news-title" level={4}>
                                    {news.name}
                                </Typography.Title>
                                <img style={{maxWidth:'200px',maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || fallbackImg} alt="Image" />
                            </div>
                            <p>
                                {news.description >100 ? `${news.description.subString(0,100)}...`:news.description }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || fallbackImg} alt="Image" />
                                    <Typography.Text className="provider-name">{news.provider[0]?.news}</Typography.Text>
                                </div>
                                <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News;
