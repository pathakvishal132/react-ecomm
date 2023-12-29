import React from 'react';
import { Link } from 'react-router-dom';

export default function FirstGrid(){
    return(
        <div className ="firstgrid" style={{display: 'inline-block', marginTop:'50px'}}>
            <div className="container">
                 <div className="mobilePhone"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>

                <Link to="/Category" class="text-black no-underline font-semibold"><img  alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Karen-green-160x160_1.png" /></Link>
                <Link to="/Category" class="text-black no-underline font-semibold"><p>Mobile Phones</p></Link>
                </div>

                <div className="earphones"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <Link to="/component/Category" class="text-black no-underline font-semibold"><img alt="timer" src="https://image01-in.oneplus.net/ebp/202207/01/1-m00-3c-27-cpgm7mk-ru-afzmxaam7ntavfjs206_384_384.png" /></Link>
                <Link to="/component/" class="text-black no-underline font-semibold"><p>Earphones</p></Link>
                </div>

                <div className="watches"style={{display: 'inline-block', width:'25%', textAlign:'center',justifyContent:'center'}}>
                <Link to="/component/Component" class="text-black no-underline font-semibold"><img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Wearable.png" /></Link>
                <Link to="/component/Component" class="text-black no-underline font-semibold"><p>Smart Watches</p></Link>
                </div>
                
                <div className="accessories"style={{display: 'inline-block', width:'25%',textAlign:'center',justifyContent:'center'}}>
                <Link to="/component/Component" class="text-black no-underline font-semibold"><img alt="timer" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/new-in/nav-render/Power-Cables.png"/></Link>
                <Link to="/component/Component" class="text-black no-underline font-semibold"><p>Accessories</p></Link>
                </div>
                </div>    
            
        </div>
    )
}