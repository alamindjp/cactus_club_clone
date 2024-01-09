import Image from 'next/image';
import xIcon from '@/assets/icons/x.svg';
import Link from 'next/link';

const LoginHeader = () => {
    return (
        <>
        <div className='login_header'>
            <h2>CACTUS CLUB</h2>
            <Link href="/"><Image src={xIcon} alt="" /></Link>
        </div>
        <div className='login_title'>
            <h2 className='login_title_border'>LOGIN</h2>
            <div></div>
            <h2>SIGNUP</h2>
        </div>
        </>
    );
};

export default LoginHeader;