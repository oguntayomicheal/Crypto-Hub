/* eslint-disable */
import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import styles from './css/coinDetails.module.css';

const coinDetails = () => {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  return (
    <div className={styles.coinDet}>
      <Link to="/" className={styles.icon}>
        <i className="fa fa-arrow-circle-o-left" />
      </Link>
      <div className={styles.allDet}>
        <img className={styles.img} src={state.image} alt="img" />
        <span>
          {` ${state.name} `}
          [
          {`${state.symbol.toUpperCase()}`}
          ]
        </span>

        <span className={styles.eachDet}>
          <p>Market cap:</p>
          <p>{` ${Number(state.market_cap).toLocaleString('en-US')}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p>price:</p>
          <p>{` ${Number(state.current_price).toLocaleString('en-US')}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p> ATH:</p>
          <p>{` ${state.ath.toLocaleString()}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p>Circulating Supply:</p>
          <p>{` ${state.circulating_supply.toLocaleString()}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p> Cap Rank:</p>
          <p>
            {' '}
            {` ${state.market_cap_rank.toLocaleString()}`}
          </p>
        </span>
        <span className={styles.eachDet}>
          <p>High 24hr:</p>
          <p>{` ${state.high_24h.toLocaleString()}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p>Low 24hr:</p>
          <p>{` ${state.low_24h.toLocaleString()}`}</p>
        </span>
        <span className={styles.eachDet}>
          <p>Price Change 24hr:</p>
          <p>{` ${state.price_change_24h.toLocaleString()}`}</p>
        </span>
      </div>
    </div>
  );
};

export default coinDetails;
