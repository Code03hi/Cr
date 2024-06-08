import { useParams } from 'react-router-dom'
import './Coin.css'
import { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'

const Coin = () => {

  const { curreny } = useContext(CoinContext);
  const { coinId } = useParams()
  const [coinData, setCoinData] = useState({})
  const [coinHistory, setCoinHistory] = useState({})

  const fetchHistory = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-nXHn4yPq3SvvSDZtHiAbPpLE' }
    };

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${curreny.name}&days=${10}&interval=daily`, options)
    const data = await response.json()
    setCoinHistory(data)
  }

  const fetchCoin = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-nXHn4yPq3SvvSDZtHiAbPpLE' }
    };

    const respones = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    const data = await respones.json()
    setCoinData(data)

  }

  useEffect(() => {
    fetchCoin()
    fetchHistory()
  }, [curreny])

  if (coinData && coinData.image && coinHistory) {
    return (
      <div className='coin'>
        <div className='coin-name'>
          <img src={coinData.image.large} alt="" />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className='coin-chart'>
          <LineChart history={coinHistory} />
        </div>
        <div className='coin-info'>
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          {/* <ul>
            <li>Crypto Price</li>
            <li>
              {coinData.symbol} {coinData.market_data.current_price.curreny.toLocaleString()}</li>
          </ul> */}
        </div>
      </div>
    )
  } else {
    return (
      <div className='spinner'>
        <div className='spin'>
        </div>
      </div>
    )
  }

}

export default Coin
