// window.open(`http://www.google.com/search?q=${search}`, '_blank')

import {useRef} from 'react';
import { IoMdSearch } from "react-icons/io";

const GoogleSearchBar = () => {
    let input = useRef('');
    
    const search = (e)=>{
        e.preventDefault();
        console.log(input.current.value)
        window.open(`http://www.google.com/search?q=${input.current.value}`, '_blank')
    }
    return (
        <div>
            <form onSubmit={search}>
                <input type="text" ref={input} placeholder='Search Google'/>
                <button type='submit'><IoMdSearch /></button>
            </form>
        </div>
    )
}

export default GoogleSearchBar;