import {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../includes/Header'
import spotlightimage from '../../assets/images/hero_endframe__cvklg0xk3w6e_large 2.jpg';
import iphone from '../../assets/images/1200px-Apple_gray_logo 1.svg';
import {faArrowRight as rightArrow} from '@fortawesome/free-solid-svg-icons';
import Delivery from'../../assets/images/icon-delivery.svg';
import service from '../../assets/images/Icon-Customer service (1).svg';
import secure from '../../assets/images/Icon-secure.svg';
import '../includes/product.css'
import Footer from '../includes/Footer';
import categoriesData from '../../assets/data/categories.json';
import productsData from '../../assets/data/products.json';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [categories,setCategories] = useState([]);
  const [products,setProducts] = useState([]);
  const [hoveredindex,setHoveredindex] =useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedcategory,setselectedcatogory]=useState(null)
  useEffect(() => {
    setCategories(categoriesData);
    setProducts(productsData);
  }, []); 
  const rendercategories = ()=>{
    return categories.map((category, index) => (
      <div className='category' key={index} onClick={()=>setselectedcatogory(category.title)}>
        <img className='categoryIcon' src={`${process.env.PUBLIC_URL}/${category.imageurl}`} alt={`${category.title} icon`} />
        <p className='categoryName'>{category.title}</p>
      </div>
    ));
  }

  const renderProducts=()=>{
    let filtered = selectedcategory ? products.filter(product => product.category === selectedcategory): products;

  if (searchQuery.trim() !== "") {
    filtered = filtered.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filtered.map((product, index) => (
      
      <div className='productcontainer'key={index} onMouseEnter={()=>setHoveredindex(index)}
      onMouseLeave={()=>setHoveredindex(null)}
      >
              <div className='productimagecontainer'>
              <Link to={`/products/${product.id}`}>
                <div className='productimage'>
                  <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.title}className='productimage'/>
                </div></Link>
                <div className='icons'>
                  <div className='icon'>
                    <img className='like' src={`${process.env.PUBLIC_URL}/${product.wishicon}`} alt='wishIcon'/>
                  </div>
                  <div className='icon'>
                    <img className='quickview'src={`${process.env.PUBLIC_URL}/${product.quickview}`} alt='QuickView'/>
                  </div>
                  
                </div>
                
                {product.isNew && <span className='label'>NEW</span> }
                {hoveredindex === index && (<a href='/'><button className='addtocart'>Add To Cart</button></a>)}
                
                
              </div>
              <div className='productdetails'>
                <p className='ptitle'>{product.title}</p>
                <div className='pricediv'><span className='price'>{product.price} </span><img src={`${process.env.PUBLIC_URL}/${product.rating}`} alt='rating'/><span className='comments'>({product.comments})</span></div>
                <div className='colordiv'>
                  {product.color.map((col,index)=>(
                    index === 0 ? <div className='whitedive' key={index}><div
                    className="color-circle" style={{backgroundColor:col}}
                  ></div></div>:<div
                    key={index}
                    className="alternativecolor"
                    style={{ backgroundColor: col}}
                  ></div>
                    
                  ))}
                </div>
              </div>
            </div>
    ))
  }
  return (
    <>
    <Helmet>
      <title>Exclusive</title>
    </Helmet>
    <Header onSearchChange={setSearchQuery} />
      <div className='body'>
        <div className='spotlight'>
          <div className='spotcontent'>
            <div className='spottop'>
              <img src={iphone} alt='iphoneIcon'/>
              <span>iPhone 14 series</span>
            </div>
            <h1 className='spothead'>Up to 10% off Voucher</h1>
            <div className='spotdown'>
              <div className='snow'>
                 <a href='products'><span>Shop Now</span> </a>
              </div>
           
            <FontAwesomeIcon  icon={rightArrow} alt='rightArrow'/>
            </div>
            
          </div>
          <div className='spotlightimage'>
            <img src={spotlightimage} alt='spotlightImage'/>
          </div>
          
        </div>

        <div className='categorydiv'>
          <div className='subheading'>
            <div className='reddiv'></div>
            <h4 className='subhead'>Categories</h4>
          </div>
          <h1 className='heading'>Browse By Category</h1>
          <div id='categories'>
          {rendercategories()}

          </div>
        </div>

        <div className='productsdiv'>
          <div className='productsgrid'>
            {renderProducts()}
          </div>

          <hr className='gridHr'/>
          <div className='viewdiv'><Link to='/products'style={{textDecoration:'none'}}><button className='viewAllProducts'>View All Products</button></Link></div>
          
        </div>
        <div className='helpdesk'>
          <div className='services'>
            <div className='graydiv'>
              <div className='blackdiv'>
                <img src={Delivery} alt='Delivery'className='srvicon'/>
              </div>
            </div>
            <div className='servicedescription'>
              <h5>FREE AND FAST DELIVERY</h5>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className='services'>
            <div className='graydiv'>
              <div className='blackdiv'>
                <img src={service} alt='customer service'className='srvicon'/>
              </div>
            </div>
            <div className='servicedescription'>
              <h5>24/7 CUSTOMER SERVICE</h5>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className='services'>
          <div className='graydiv'>
              <div className='blackdiv'>
                <img src={secure} alt='secure'className='srvicon'/>
              </div>
            </div>
            <div className='servicedescription'>
              <h5>MONEY BACK GUARANTEE</h5>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>


      </div>

      <Footer/>
    </>
  )
}
