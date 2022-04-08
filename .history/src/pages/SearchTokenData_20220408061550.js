import React,{useState,useEffect} from 'react'
import '../css/WhaleTrades.css'
import '../css/trades.css'
import Ethcoin_icon from '../images/eth.svg'
import PriceTickers from '../components/PriceTickers'
import DashFooter from '../components/DashFooter'
function SearchTokenData() {
    const[resd,setResd]=useState([]);
    const [search,setSearch]=useState()
    const callApi=()=>{
        if(search){

            fetch(`http://localhost:8080/exchange?bcurrency=${search}`).then((resd)=>resd.json().then(re=>{setResd(re)
        }))
}else{
 alert('Good Morning')
}

    }
    return (
        <>
             <section className='bannerAdds_whale_trade'></section>
          <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 mt-3'>
                  <PriceTickers />
                </div>
            </div>
            <div className='col-12'>
            <div className='table_trades'>
                <div className='Trades_search'>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search Token Address'/>
                    <button type="submit" onClick={callApi}>Search</button>
                </div>
                <div className='icons_info'>
                {resd.slice(0,1).map((post,key) =>{
                        return(
                    <div className='img_box'>
                   
                        <img src={Ethcoin_icon}/>
                        <li className='wrapper_name'>{post.quoteCurrency.symbol} / {post.baseCurrency.symbol} </li>
                       
                    </div>
                  )})}
                   {resd.slice(0,1).map((post,key) =>{
                        return(
                    <div className='coin_names'>
                        <li className='value_names'>${(post.maximum_price).slice(0,-)}<li>{post.quoteAmount}</li></li>
                        <span>ETH {post.quotePrice}</span>
                    </div>
                        )})}
                </div>
                {resd.slice(0,1).map((post,key) =>{
                        return(
                <div className='li_pairs'>
                    <li className='li_div'>
                    {post.baseCurrency.name}
                        <li className='inner_li'>Token:{post.baseCurrency.address}</li>
                        <li className='inner_li'>Pair: {post.quoteCurrency.address}</li>
                    </li>
                </div>
                  )})}
              {console.log("post",resd)}      
            <div className='flex_box_table'>
               <h3>Trades</h3>
               {/* <div className='btns_lengends'>
                    <button className='buy'>Buy</button>
                    <button className='sell'>Sale</button>
               </div> */}
            </div>

            {/* ++_-_++  TRADES TABLE DATA  ++_-_++ */}
            <table>
                <thead>
                      <th>Date</th>
                    <th>Type</th>
                    <th>PRICE USDT</th>           
                    <th className='transform'>Price ETH</th>
                    <th className='transform'>Amount WETH</th>
                    <th className='transform'>TOTAL ETH</th>
                    <th>Maker</th>
                </thead>
                <tbody>         
                    {resd.slice(0,10).map((post,key) =>{
                        // if(post.side=="buy"){

                        
                    return(
                        <tr key={key}>
                            <td className='date_table'>{(post.block.timestamp.iso8601).replace('T','..').slice(0, -4)}</td>
                            <td className='red'>{post.side}</td>
                            <td className=''>{post.baseAmount}</td>                  
                            <td className='truncate'>{post.quoteAmount}</td>
                            <td className='truncate'>{post.quotePrice}</td>
                            <td className='truncate'>{(post.baseAmount)}</td>
                            <td className='truncate maker_table'>{(post.maker.address).slice(0, -2)}</td>
                        </tr>
                      
                    )})}
            </tbody>
            </table>        
    </div>
            </div>
          </div>
          <DashFooter/>
        </>
    )
}

export default SearchTokenData
