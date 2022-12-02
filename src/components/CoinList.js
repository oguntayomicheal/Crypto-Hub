import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './css/HomePage.module.css';

const CoinList = ({
  name, price, symbol, img, details,
}) => (
  <section>

    <img className={style.coinImg} src={img} alt={`${name}icon`} />
    <p className={style.paraAlign}>
      {name}
      {' '}
      [
      {symbol}
      ]
    </p>
    <div className={style.price}>
      <p>
        $
        {price}
      </p>
      <Link to="/Det" state={details} className={style.icon}>
        <i className="fa fa-arrow-circle-o-right" />
      </Link>
    </div>

  </section>
);

export default CoinList;

CoinList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
