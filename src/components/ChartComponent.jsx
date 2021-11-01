import React from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Typography} from 'antd'

const ChartComponent = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
  
    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#62dab4',
          borderColor: '#62dab4',
        },
      ],
    };
  
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    return (
        <>
            <Row className="chart-header">
                <Typography.Title level={2} className="chart-title">{coinName} Price chart</Typography.Title>
                <Col className="price-container">
                <Typography.Title level={5} className="price-change">{coinHistory?.data?.change}%</Typography.Title>
                <Typography.Title level={5} className="current-price">Current {coinName} Price: {currentPrice}</Typography.Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    )
}

export default ChartComponent;
