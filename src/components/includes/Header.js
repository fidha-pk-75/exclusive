import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import search from '../../assets/images/Search.svg'
import wishList from"../../assets/images/Wishlist (1).svg"
import cart from '../../assets/images/Cart1 with buy.svg';
import down from '../../assets/images/Vector (14).svg';
import'../../components/includes/product.css';
import menu from '../../assets/images/bars-solid.svg'
function Header({ onSearchChange }) {
  const [showList,setShowList] = useState(false);
  const [language,setLanguage] = useState("English");
  const[searchTerm, setSearchTerm] =useState('');
  const[menuOpen,setMenuOpen]=useState(false)
  const Languagess = ['English','Malayalam','Hindi','Arabic'];
  const displayMenuBar=()=>(
    setMenuOpen(!menuOpen)
  )
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const toggleshowlist = ()=>{
    setShowList(!showList);
  };

  const HandleLanguage=(lang)=>{
    setLanguage(lang);
    setShowList(false);
  }

  return (
    <>

          <TopPart className='TopPart'>
            <TopInnerPart className='topPart'>
              <LeftPart className='lp'>
                <OfferText className='offertext'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</OfferText>
                <a href='/products' className='shopnow'><ShopNow className='sn' >ShopNow</ShopNow></a>
              </LeftPart>
              
              <RightPart className='rp'>
                <Languages className='lang'>{language}</Languages>

                <button className='downicon' onClick={toggleshowlist}> <DownIcon className='DownIcon' src={down}/></button>
               {showList && (
                <ul className='languagedrop'>
                  {Languagess.map((lang, i) => (
                    <li className='language' onClick={()=>HandleLanguage(lang)}>{lang}</li>
                  ))}
                  
                </ul>
               )}
               
              </RightPart>
            </TopInnerPart>
          </TopPart>
       

        <div className='HeaderContainer'><div className='withMenuBar'>
          <img className='menubar' src={menu} alt='menubar'onClick={()=> displayMenuBar()}/>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Logo>Exclusive</Logo>
        </Link>
        </div>

        <NavigationUl className={`navigationul ${menuOpen ? 'active' : ''}`}>
          <NavigateLi><a href='/'>Home</a ></NavigateLi>
          <NavigateLi><Link to={'/t'} >Contact</Link></NavigateLi>
          <NavigateLi><Link to={'/'} >About</Link></NavigateLi>
          <NavigateLi><Link to={'/'} >Sign Up</Link></NavigateLi>
        </NavigationUl>


        <Withinputicon className='Hover'>
        <InputPart className='searchdiv'>
        <input className='searchbar' placeholder='What are you looking for?' value={searchTerm} onChange={handleInputChange}/>
        <SearchIcon src={search}/>
        </InputPart>

       
        <ProfileContainer className='profilecontainer'>
          <div className='cartitems'><Link className='cartitems' to={"/wishlist"}><WishList src={wishList}/></Link></div>
          <div className='cartitems'><Link className='cartitems' to={'/cart'}><Cart src={cart}/></Link></div>
          
          
          
        </ProfileContainer>
        </Withinputicon>
      </div>
      <hr/>
    </>
  )
}

const TopPart =styled.div`

`;
const TopInnerPart=styled.div`

`;
const LeftPart = styled.div`

`;
const OfferText = styled.span`

`;
const ShopNow = styled.span`

`;
const RightPart =styled.div`

`;
const Languages =styled.span`

`;
const DownIcon =styled.img`
cursor:pointer;
border:none;
background-color:#000000;
color:#FAFAFA;
`;

const Logo = styled.h1`
 font-family:inter;
 margin:0;
 font-size:24px;
 font-weight:700;
 line-height:24px;
 color:#000000;
text-decoration:none;
 `;
const NavigationUl = styled.ul`

`;
const NavigateLi = styled.li`
`;
const Withinputicon = styled.div`

`;
const InputPart = styled.div`

`;

const SearchIcon = styled.img`
width:24px;
height:24px
`;
const ProfileContainer =styled.div`
display:flex;
gap:16px;
align-items:center;
justify-content:center
`;
const WishList =styled.img`
`;
const Cart = styled.img`
`;


export default Header
