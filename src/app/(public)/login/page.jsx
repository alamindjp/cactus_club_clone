import Image from 'next/image';
import bg_img from '../../../assets/image/login_bg.png';
import LoginHeader from './LoginHeader';
import InputField from './InputField';

const page = () => {

    
    return (
        <div className='login_bg'>
            <Image src={bg_img} alt="" />
            <div className='login'>
                <LoginHeader/>
                <h1 className='login_welcome'>Welcome to the Cactus club!</h1>
                <div className='input_wrapper'>
                <InputField 
                key="username"
                name="username"
                type="text"
                />
                <InputField 
                key="password"
                name="password"
                type="password"
                />
                </div>
           

            </div>
            
        </div>
    );
};

export default page;