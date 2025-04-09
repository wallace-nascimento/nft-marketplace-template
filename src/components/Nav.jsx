import Button from "./Button";
import Router from "./Router";

import logo from '../assets/logo.svg';
import logo02 from '../assets/logo02.svg';
import user from "../assets/user.svg";


const Nav = () =>{

    return(
        <nav className="w-full h-[100px] flex items-center justify-between pl-8 pr-8 bg-background">
           <div className='h-full flex items-center '>
            <img src={logo} alt="Logo" />
            <img src={logo02} alt="Logo" className='ml-3'/>
            
           </div>
           <ul className='flex items-center font-display font-semibold text-Text text-center text-1g'>

                <Router 
                    to=''
                    name='Marketplace'
                />

                <Router 
                    to=''
                    name='Rankings'
                />

                <Router 
                    to=''
                    name='Connect a Wallet'
                />
            
                <Button imageButton={user}/>
           </ul>
        </nav>
    )
}

export default Nav;