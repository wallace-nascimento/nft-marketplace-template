import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Button from "./Button";
import Router from "./Router";
import NavMobileItem from './NavMobileItem.jsx';

import logo from '../assets/logo.svg';
import logo02 from '../assets/logo02.svg';
import user from "../assets/user.svg";
import menuImg from "../assets/burgermenu.png";


const Nav = () =>{

    const [menu, setMenu] = useState(true);

    let menuRef = useRef();

    useEffect(()=> {

        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setMenu(true)
            }
        };
        document.addEventListener("mousedown", handler);
    })

    return(
        <nav className="w-full  h-[100px] flex items-center justify-between pl-8 pr-8 bg-background ">
           <div className='w-[200px] flex items-center '>
                
               
                <img src={logo} alt="Logo" /> 
                <img src={logo02} alt="Logo" className='ml-3'/>
               
            
           </div>

           <div className=' lg:hidden w-10'>
            
                   { 
                    menu ? <button onClick={()=> setMenu(!menu)}>
                        <img src={menuImg} alt='menu' />
                        
                    </button>
                    :
                        <> <span className="font-bold text-2xl cursor-pointer text-Text" onClick={()=> setMenu(!menu)}> X </span>
                        
                        </>
                    }
           </div>



           <ul className='hidden lg:flex items-center font-display font-semibold text-Text text-center text-1g '>

                <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to='/nft-marketplace-template'
                        name='Marketplace'
                    />
                </li>

                <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to='/profile'
                        name='Profile'
                    />
                </li>

                <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to='/info'
                        name='Artist Info'
                    />
                </li>


                <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to=''
                        name='Rankings'
                    />
                </li>

                 <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to='/marketplace'
                        name='Marketplace'
                    />
                </li>

                <li className="hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                    <Router
                        to='/connect'
                        name='Connect a Wallet'
                    />
                </li>

                <Link className="ml-2" to='/singup' >
                     <Button
                        imageButton={user}
                        text="Sign Up"
                    />
                </Link>
           </ul>

           {/*Nav Mobile*/}

           {!menu && 
                
               ( <div  className="w-full h-[calc(100h-81px)] fixed top-20 left-0 bg-backgroundSecundary text-Text list-none lg:flex">
                <ul className="flex flex-col items-stretch justify-center" ref={menuRef}>

                    
                    <li className="text-center hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                        <Router
                            to=''
                            name='Marketplace'
                        />
                    </li>

                    <li className="text-center hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                        <Router
                            to=''
                            name='Rankings'
                        />
                    </li>

                    <li className="text-center hover:bg-bgHover hover:rounded-md delay-300 cursor-pointer">
                        <Router
                            to='/connect'
                            name='Connect a Wallet'
                        />
                    </li>
            
                    <li className="ml-2 w-full cursor-pointer">
                        <Button
                            imageButton={user}
                            text="Sign Up"
                            onClick={()=> console.log("Dale Click")}
                        />
                    </li>
                   
                </ul>
            </div>
            )

            
        }


        </nav>
    )
}

export default Nav;