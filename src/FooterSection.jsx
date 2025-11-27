import { FaLinkedin, FaInstagram, FaWhatsapp  } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const  FooterSection = () => {
  return (
    <>
    <div className='bg-[#EAE0D5]'>
        <ul className="flex justify-end gap-6 pr-8 py-2 ">
                <li><a href="#" className="link_nav "><FaLinkedin className='size-9 ' /></a></li>
                <li><a href="#" className="link_nav"><FaSquareXTwitter className='size-9'/></a></li>
                <li><a href="#" className="link_nav"><FaInstagram className='size-9' /></a></li>
                <li><a href="#" className="link_nav"><FaWhatsapp className='size-9' /></a></li>
        </ul>
    </div>
    </>
  )
}

export default FooterSection