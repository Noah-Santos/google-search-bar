// window.open(`http://www.google.com/search?q=${search}`, '_blank')

import {useRef} from 'react';
import { IoMdSearch } from "react-icons/io";

const GoogleSearchBar = () => {
    let input = useRef('');
    
    const search = (e)=>{
        // prevents the page from reloading when the form is submitted
        e.preventDefault();
        // opens the search request in a new google tab
        window.open(`http://www.google.com/search?q=${input.current.value}`, '_blank')
    }
    return (
        <div>
            <form onSubmit={search}>
                {/* ties the input tag to the useRef variable */}
                <input type="text" ref={input} placeholder='Search Google'/>
                <button type='submit'><IoMdSearch /></button>
            </form>
        </div>
    )
}

export default GoogleSearchBar;