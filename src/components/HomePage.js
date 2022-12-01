import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CoinList from './CoinList';
import fetchProducts from '../redux/Data/Data';
import Navbar from './Navbar';
import style from './css/HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const allCoins = useSelector((state) => state.data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <img src="./cryptoHub.jpg" alt="cryptoHub" className={style.bannerImg} />
      <Navbar />
      <div className={style.inputCtn}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search or filter coins by name or symbol"
          className={style.input}
        />
      </div>

      <div className={style.allCoins}>
        {
          allCoins.filter((searchCoin) => searchCoin.name.toLowerCase()
            .includes(search.toLowerCase())
            || searchCoin.symbol.toLowerCase().includes(search.toLowerCase()))
            .map((coins) => (
              <div key={coins.id} className={style.eachCoin}>
                <CoinList
                  key={coins.id}
                  img={coins.image}
                  id={coins.id.toUpperCase()}
                  name={coins.name}
                  symbol={coins.symbol.toUpperCase()}
                  atl={coins.atl}
                  price={coins.current_price}
                  details={coins}
                />
              </div>
            ))
        }
      </div>

    </>
  );
};

export default HomePage;
