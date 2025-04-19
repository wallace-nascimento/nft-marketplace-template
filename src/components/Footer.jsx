import Input from './Input.jsx';

import logoFooter from '../assets/logoFooter.png';
import discordLogo from '../assets/discordLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import instagramLogo from '../assets/instagramLogo.png';
import divider from '../assets/divider.png';

const Footer = () =>{

    return(
        <footer className='bg-backgroundSecundary font-display '>
            <div className=' w-[61.6875rem] ml-auto mr-auto flex pt-[3rem]'>
                <div className='text-text2'>
                    <div className='pb-6'>
                        <img src={logoFooter} alt='logo' />
                    </div>

                    <div>
                        <div className='text-[.9rem] pb-[1.25rem]'>
                            <p>NFT marketplace UI created <br></br>with Anima for Figma.</p>
                        </div>

                        <div>
                            <div className='text-[.9rem] pb-[5px]'>
                                <p>Join our community</p>
                            </div>
                            <div className='flex'>
                                <div className='mr-2 cursor-pointer'><img src={discordLogo} alt='logo' /></div>
                                <div className='mr-2 cursor-pointer'><img src={youtubeLogo} alt='logo' /></div>
                                <div className='mr-2 cursor-pointer'><img src={twitterLogo} alt='logo' /></div>
                                <div className='cursor-pointer'><img src={instagramLogo} alt='logo' /></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='ml-[5.25rem] pr-[9.0625rem]'>
                    <div className='text-[1.5rem] font-monoSpace font-semibold pb-6'>
                        <h3>Explore</h3>
                    </div>
                    <div className='text-text2 text-[.9rem] '>
                        <div className='cursor-pointer hover:underline decoration-solid'>
                            <p>Marketplace</p>
                        </div>
                        <div className='mt-[20px] mb-[20px] cursor-pointer hover:underline decoration-solid'>
                            <p>Rankings</p>
                        </div>
                        <div className='w-max cursor-pointer hover:underline decoration-solid '>
                            <p>Connect a wallet</p>
                        </div>
                    </div>
                </div>

                <div className=''>

                    <div className='text-[1.5rem] font-monoSpace font-semibold pb-6'>
                        <h3>Join our weekly digest</h3>
                    </div>

                    <div className='w-[29rem]'>
                        <div className='text-text2 text-[.9rem] mb-[20px]'>
                            <p>Get exclusive promotions & updates <br></br>straight to your inbox.</p>
                        </div>
                        <div>
                            <Input />
                        </div>

                    </div>

                </div>
            </div>

            <div className='w-[65.5625rem] mt-[2rem] ml-auto mr-auto'>
                <img src={divider} alt='divider'/>
                <div className='text-text2 text-[.7rem] mt-[1rem] pb-[1rem]'>
                    <p>Ⓒ NFT Market. Use this template freely.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;