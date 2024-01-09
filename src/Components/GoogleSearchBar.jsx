// window.open(`http://www.google.com/search?q=${search}`, '_blank')

import {useRef} from 'react'

const GoogleSearchBar = () => {
    function search(){

    }
    return (
        <div>
            <form action={search}></form>
        </div>
    )
}

export default GoogleSearchBar;