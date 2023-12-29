import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
// import logo from './logo.png';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

export default function MainNavbar(){
    return(
        <div className="nav">
        <div className="logo">
        <Link to='/' ><img alt="logo" src={require('./logo.png')} class="p-0"/></Link>
        </div>
            <ul>
                <li><div style={{display:'flex'}}><Link to='/' class="text-black no-underline decoration-1 font-semibold  ">Home</Link></div></li>
                <li> <div><Link to='' class="text-black no-underline font-semibold">Order</Link></div></li>
                <li><div><Link to='/about' class="text-black no-underline font-semibold">About</Link></div></li>
                <li> <div><Link to='/contact' class="text-black no-underline font-semibold">Contact</Link></div></li>
                {/* <li><div><Link to='/signup' class="text-black no-underline font-semibold">SignUp</Link> </div></li> */}
            </ul>
            <div className="right">
            <div class="cart_icon"><Link to='/login' class="text-black no-underline font-semibold "><AccountCircleIcon fontSize='medium'/> </Link></div>
            <div class="cart_icon"><Link to="/cart" class="text-black no-underline"><ShoppingCartIcon/></Link></div>
            <div class="vendor_icon"><Link to="/vendor" class="text-black no-underline"><PostAddIcon/></Link></div>
            </div>

        </div>
    )
}
