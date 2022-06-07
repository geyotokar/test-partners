import React from 'react'
import './Header.css'
import SearchForm from './SearchForm/SearchForm'
import logo from '../assets/images/headerLogo.svg'
import user from '../assets/images/user.png'
import userIcon from '../assets/images/userIcon.svg'

const Header: React.FC = () => {
    return <header className='header__container'>
        <div className='header'>
            <div className='header__block'>
                <img className='headerImg' src={logo} alt=''/>
                <div className='header__searchFormContainer'>
                    <SearchForm/>
                </div>
            </div>
            <div className='login__block'>
                <div className='loginName'>Константин</div>
                <img className='headerImg userPhoto' src={user} alt=''/>
                <img className='userIcon' src={userIcon} alt=''/>
            </div>
        </div>
        <div className='line'/>
    </header>
}

export default Header