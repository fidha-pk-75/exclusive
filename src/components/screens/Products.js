import { useEffect, useState } from 'react'
import Header from '../includes/Header';
import Footer from '../includes/Footer'
import { Helmet } from 'react-helmet-async';
import '../../components/includes/product.css'
import offeritems from '../../assets/data/merged.json'
import { Link } from 'react-router-dom';

function Products() {
  const [hoveredindex,setHoveredindex] = useState('');
  const[offers,setoffers] = useState([]);
   

  useEffect(()=>{
    setoffers(offeritems);
  },[])

  const renderProducts1 = () => {
  return offers.map((offer, index) => (
    <div className='productcontainer' key={index} onMouseEnter={() => setHoveredindex(index)} onMouseLeave={() => setHoveredindex(null)}>
      <div className='productimagecontainer'>
                <div className='productimage'>
                <Link to={`/products/${offer.id}`}><img src={offer.image} alt={offer.title}/></Link>

                  
                </div>
                <div className='icons'>
                  <div className='icon'>
                    <img className='like' src={offer.wishicon} alt='wishIcon'/>
                  </div>
                  <div className='icon'>
                    <img className='quickview'src={offer.quickview} alt='QuickView'/>
                  </div>
                </div>
                {offer.isNew && <span className='label'>NEW</span> }
                {offer.offer && <span className='offerpercent'>{offer.offerPercent}</span>}
                {hoveredindex === index && (<a href='/'><button className='addtocart'>Add To Cart</button></a>)}
                
                
              </div>
      <div className='productdetails'>
        <p className='ptitle'>{offer.title}</p>

        <div className='pricediv'style={{ gap: offer.actualprice ? '12px' : '8px' }}>
            <span className='price'>{offer.price}</span>
            {offer.actualprice ? (
            
                <span className='actualprice'>{offer.actualprice}</span>
        
            ) : (
              <>
                <img src={offer.rating} alt='rating' />
                <span className='comments'>({offer.comments})</span>
              </>
            )}
          </div>

          {offer.actualprice && (
            <div className='feedback'>
              <img src={offer.rating} alt='rating' />
              <span className='comments'>({offer.comments})</span>
            </div>
          )}
        <div className='colordiv'>
            {offer.color && offer.color.map((col,index)=>(
               index === 0 ? <div className='whitedive' key={index}><div
                
                className="color-circle" style={{backgroundColor:col}}>
                  </div>
                  </div>:
                  <div
                    key={index}
                    className="alternativecolor"
                    style={{ backgroundColor: col}}>  
                  </div>
                    
            ))}
          </div>
      </div>
    </div>
  ));
};



  
  return (
    <>
    <Helmet>
      <title>Exclusive | Products</title>
    </Helmet>
      <Header/>
      <div className='body1'>

        <div className='pagepath'>
          <a href='/' className='homepath'>Home</a> <span className='homepath'>/</span>
           <a href='products'className='currentpage'>Products</a>
        </div>

        <div className ='container'>
          <div className='productsgrid'>
          {renderProducts1()}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products
