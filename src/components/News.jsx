import React, { useState } from "react";
import { useGetCryptoNewsDataQuery } from "../Services/cryptoNews";
import { useGetCryptoDataQuery } from "../Services/cryptoApi";
import moment from "moment";
import { Row, Col, Select, Typography, Card, Avatar } from "antd";
import Spinner from "./Spinner";

const fallbackImg =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const News = ({ limited }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptoDataQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsDataQuery({
    newsCategory,
    count: limited ? 6 : 12,
  });
  console.log(cryptoNews);
  if (!cryptoNews?.value) return <Spinner/>;
  return (
    <Row gutter={[24, 24]}>
      {!limited && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }
          >
            <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
            {/**Map over the crypto APi data and display type of currencies in dropdown menu */}
            {data?.data?.coins.map((coin) => (
              <Select.Option value={coin.name}>{coin.name}</Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {/* Map over the crypto news api and display news data on ant design card */}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || fallbackImg}
                  alt="icon"
                />
              </div>
              <p>
                {/* if news description is greater than 100 char display ... after 100th character */}
                {news.description > 100
                  ? `${news.description.subString(0, 100)}...`
                  : news.description}
              </p>
              {/* footer part of  news card */}
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      fallbackImg
                    }
                    alt="Image"
                  />
                  <Typography.Text className="provider-name">
                    {news.provider[0]?.news}
                  </Typography.Text>
                </div>
                <Typography.Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Typography.Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
