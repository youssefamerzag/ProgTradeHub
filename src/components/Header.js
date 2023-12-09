import './Header.css'
function Header() {

    return (
        <header>
            
            <nav>
                <h1>ProgTradeHub</h1>
                <ul className='navbar'>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </nav>

            <div className="Header">
                <p className='headText'>
                    <p className='headTitle'>ProgTradeHub</p>
                    <p className='headDescription'>Welcome to ProgTradeHub – your go-to marketplace for buying and selling top-notch programming codes.</p>
                    <button className='headBtn'>Buy & Sell</button>
                </p>
                <img className='headimg' src='./imgs/headerImg.svg' width={'600px'}></img>
            </div>
        </header>
    );
}

export default Header;