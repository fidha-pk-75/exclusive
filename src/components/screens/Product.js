import {useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../includes/Header'
import Footer from '../includes/Footer';
import '../../components/includes/product.css'
import relateditems from '../../assets/data/offers.json'
import Products from '../../assets/data/merged.json';
import { useParams,Link } from 'react-router-dom';
import freeDelivery from '../../assets/images/icon-delivery (1).svg'
import Return from '../../assets/images/Icon-return.svg'

function Product() {
  const[hoveredindex,setHoveredindex] = useState()
  const[items,setItems] = useState([]);
  const[product,setProduct] = useState(null)
  const { id } = useParams();


  useEffect(() => {
    setItems(relateditems);
    const selectedProduct = Products.find(p => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="body">
          <h2 style={{ textAlign: 'center', margin: '50px 0' }}>Product not found.</h2>
        </div>
        <Footer />
      </>
    );
  }
  
  const renderrelateditems = ()=>{
    return items.map((item,index)=>(
      <div className='productcontainer' key={index} onMouseEnter={()=>setHoveredindex(index)} onMouseLeave={()=>setHoveredindex(null)}>
        <div className='productimagecontainer'>
          <div className='productimage'>
          <Link to={`/products/${item.id}`}><img src={item.image} alt={item.title}/></Link>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img className='like' src={item.wishicon} alt='wishIcon'/>
            </div>
            <div className='icon'>
              <img className='quickview'src={item.quickview} alt='QuickView'/>
            </div>   
          </div>

          {item.offerPercent && (<span className='offerpercent'>{item.offerPercent}</span>)}
          {hoveredindex === index &&(<a href='/'><button className='addtocart'>Add To Cart</button></a>)}

        </div>
        <div className='pricedivv'>
          <p className='ptitle'>{item.title}</p>
          <div>
            <span className='price'>{item.price}</span>
            <span className='actualprice'>{item.actualprice}</span>
          </div>
          <div className='feedback'>
                <img src={item.rating} alt='rating' />
                <span className='comments'>({item.comments})</span>
              </div>
        </div>
      </div>
))
  }
  

  return (
    <>
      <Helmet>
        <title>Exclusive | Products | {product.title}</title>
      </Helmet>

      <Header/>

      <div className='body'>

      <div className='pagepath'>
          <Link to='/' className='homepath'>Home</Link> <span className='homepath'>/</span> 
          <Link to='/products'className='homepath'>Products</Link> 
          <span className='homepath'>/</span> 
          <Link to='/products'className='currentpage'>{product.title}</Link>
        </div>

        <div className='productimganddetails'>
          <div className='pimage'>
            <img src={product.image} alt='productimage'className='image'/>
          </div>
          <div className='pdetails'>
            <h5 className='title'>{product.title}</h5>
            <div className='productstatus'>
              <img src={product.rating}alt='img'/>
              <span className='comments'>({product.comments} Reviews)</span>
              <span className='nothing'></span>
              <span className='stock'>
                {product.inStock === true ?  <p className='instock'>In Stock</p>:<p className='outstock'>Out of Stock</p>}
              </span>

            </div>
            <h4 className='pprice'>{product.price}</h4>
            <p className='prdctdscrption'>{product.description}</p>
            <hr/>

            {product.color &&<div className='coloursdiv'>Colours: <div className='clr'>{product.color.map((col,index)=>(
              index === 0 ? <div className='whitedive' key={index}><div
                
              className="color-circle" style={{backgroundColor:col}}>
                </div>
                </div>:
                <div
                  key={index}
                  className="alternativecolor"
                  style={{ backgroundColor: col}}>  
                </div>
            ))}</div></div> }
            
            <div className='Services'>
              <div className='srvs'>
                <img src={freeDelivery} alt='Free Delivery'/>
                <div>
                  <h6>Free Delivery</h6>
                  <p style={{textDecoration:'underline'}}>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr/>
              <div className='srvs'>
                <img src={Return} alt='Return'/>
                <div>
                  <h6>Return Delivery</h6>
                  <p>Free 30 Days Delivery Returns. <span>Details</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>




      <div className='categorydiv'>
          <div className='subheading'>
            <div className='reddiv'></div>
            <h4 className='subhead'>Related Item</h4>
          </div>
          <div className='productsgrid'>
          {renderrelateditems()}

          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Product
