import React from 'react'
import './SearchForm.css'

const SearchForm: React.FC = () => {
    return <div className='searchFormContainer'>
        <button className='searchIcon' type='submit'/>
        <input className='searchForm' type='text' placeholder='Найти...'/>
    </div>
}

export default SearchForm