import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  const popularProducts = [
    {title : 'Cryptocurrency ' , description : '' , price : '220$', imgsrc : './imgs/quiz.jpg'},
    {title : 'Travel' , description : '' ,price : '100$', imgsrc : './imgs/travel1.jpg'},
    {title : 'languages logos quiz' , description : '' , price : '90$', imgsrc : './imgs/travel.jpg'},
    {title : 'Ye`s Albums ' , description : '', price : '240$' , imgsrc : './imgs/ye.jpg'} 
  ]

  const categories = [
    {title : 'E-commerce' , imgsrc : './imgs/crypto.svg'},
    {title : 'Cryptocurrency' , imgsrc : './imgs/ecommerce.svg'},
    {title : 'management' , imgsrc : './imgs/manager.svg'},
    {title : 'Music' , imgsrc : './imgs/music.svg'},
    {title : 'Mobile' , imgsrc : './imgs/mobile.svg'},
  ]

    return (
      <div className="Home"> 
        <div className='choosingCards'>
          <div className='buyCard'>
            <p className='cardTitle'>Buy</p>
            <p className='cardDescription'>Source Code</p>
          </div>
          <div className='sellCard'>
            <p className='cardTitle'>Sell</p>
            <p className='cardDescription'>Source Code</p>
          </div>
          <div className='requestCard'>
            <p className='cardTitle'>Request</p>
            <p className='cardDescription'>Source Code</p>
          </div>
        </div>
        <p className='productTitle'>Categories</p>
        <div className='categories'>
            {categories.map((category , index) => 
            <div style={{backgroundImage : `url(${category.imgsrc})`, color : 'white', fontWeight : '900'}} key={index} className='category'>
              <p>{category.title}</p>
            </div>
          )}
        </div>
        <div>
          <p className='productTitle'>Most Popular</p>
          <div className='productProducts'>
            {popularProducts.map((product , index) => 
            <div className='productProduct'>
              <img style={{borderRadius : "5px"}} src={product.imgsrc} width={"250px"}></img>
              <p style={{fontSize : '23px' , fontWeight : "800", margin : "10px 5px"}}>{product.title}</p>
              <p style={{fontSize : '18px', fontWeight : "800",margin : "10px 5px 20px 5px" ,color : "#70e000"}}>{product.price}</p>
              <button style={{color : 'white', fontSize : '17px',fontWeight : "800",width : "170px" ,margin : "0px 0px 5px 35px", padding : "10px", borderRadius : "5px" , border : "none", backgroundColor : "#260064"}}>Donwload</button>
            </div>
            )}
          </div >
          <div className='loadMore'>
            <button className='loadBtn'>load more</button>
          </div>
          <p className='productTitle'>Best Selling</p>
          <div className='productProducts'>
            {popularProducts.map((product , index) => 
            <div className='productProduct'>
              <img style={{borderRadius : "5px"}} src={product.imgsrc} width={"250px"}></img>
              <p style={{fontSize : '23px' , fontWeight : "800", margin : "10px 5px"}}>{product.title}</p>
              <p style={{fontSize : '18px', margin : "10px 5px 20px 5px" ,color : "#70e000"}}>{product.price}</p>
              <Link to={`/product/${product.title}/${product.price}/${product.imgsrc}`}><button style={{color : 'white',fontSize : '17px',fontWeight : "800",width : "170px" ,margin : "0px 0px 5px 35px", padding : "10px", borderRadius : "5px" , border : "none", backgroundColor : "#260064"}}>Download</button></Link>
            </div>
            )}
          </div>
          <div className='loadMore'>
            <button className='loadBtn'>load more</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;