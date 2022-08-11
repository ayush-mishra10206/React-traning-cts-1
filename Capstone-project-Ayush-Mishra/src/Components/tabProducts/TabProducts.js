
import { Link } from 'react-router-dom';
import './TabProducts.css';

export default function TabProducts({ data }) {
    return (
        <div data-tesid="tabProduct">
          <Link to={'/product/' + data.id}>
                <img src={data.image} />
                <div className='priceOuterDiv'>
                    Rs. {data.price}
                    <div class-testid="originalPriceId" className='originalPrice'>Rs. 1899</div>
                    <div style={{ color: 'orange', marginLeft: '5px' }}>(55% OFF)</div>
                </div>
           </Link>
        </div>
    )
}