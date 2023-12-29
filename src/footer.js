import React from 'react'
//import NewsLetter from './body/newsletter';

const Footer = () => {
  return (
    <div className="main-footer" class="bg-black text-white pt-1 ml-0 mr-0 w-full relative">
    
         <div className="container" class=" flex items-justify flex-col min-w-full mt-3 " >
            <div className="row" class="grid grid-cols-5 grid-rows-1 ">

                {/*column1*/}
                <div className="col" class="text-center ">
                    <h4>Phones</h4>
                    <ul className="list-unstyled">
                        <li>OnePlus 10R</li>
                        <li>OnePlus Nord 2T</li>
                        <li>OnePlus Nord 2</li>
                        <li>OnePlus 10 Pro 5G</li>
                        <li>OnePlus 9RT 5G</li>
                    </ul>
                </div>

                {/* column2 */}
                <div className="col" class="text-center">
                    <h4>Store</h4>
                    <ul className="list-unstyled" >
                        <li>Mobiles</li>
                        <li>Audio</li>
                        <li>Wearables</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                {/* column3 */}
                <div className="col" class="text-center">
                    <h4>Support</h4>
                    <ul className="list-unstyled" >
                        <li>Shopping FAQs</li>
                        <li>User Manuals</li>
                        <li>Service Centers </li>
                    </ul>
                </div>

                {/* column4 */}
                <div className="col" class="text-center">
                    <h4>Explore</h4>
                    <ul className="list-unstyled" >
                        <li>About OnePlus</li>
                        <li>Community</li>
                        <li>Find a store</li>
                        <li>OnePlus Store app</li>
                    </ul>
                </div>

                {/* column5 */}
                <div className="col" class="text-center">
                    <h4>Programs</h4>
                    <ul className="list-unstyled">
                        <li>Exchange Program</li>
                        <li>Red Cable Program</li>
                        <li>Welcome Gift</li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="row">
                <p className="col-sm" class="text-center text-white">
                    &copy;2022 kaimono.com INC | All Rights Reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  )
}
export default Footer;