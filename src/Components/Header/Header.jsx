
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between p-10 items-center border-b-2'>
             <h1 className='text-5xl font-bold'>Knowledge valley</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;