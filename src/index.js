import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes , } from 'react-router-dom';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path={process.env.PUBLIC_URL} element={<App/>}></Route>
                <Route path='/product/:title/:price/imgs/:imgsrc/:languages/:category' element={<Product/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
);
