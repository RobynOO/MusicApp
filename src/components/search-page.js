import SideNav from "./side-nav";
import "../css/search-page.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import axios from "axios";
import App from "../App"


function Searchpage(){
    const client_id = '6f0017dcdabc41438fa281c906e6ce93';


    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    
    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization : `Bearer ${token}`
            }, 

            params: {
                q: searchKey,
                type: "artist",
            }, 
        })
        return setArtists(data.artists.items)
    }

    // const renderArtists = () => {
    //     return artists.map(artist => (
    //         <div key={artist.id}>
    //             {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
    //             {artist.name}
    //         </div>
    //     ))
    // }


    return(
        <div>
            <SideNav />
            {!token ? 
            <form onSubmit={searchArtists}>
                <input type="text" className="search-bar" onChange={e => setSearchKey(e.target.value)} ></input>
                <button><SearchIcon className='SearchIcon' fontSize='small' type={"submit"} /></button>
            </form>
            : <h1>please login</h1>}
        </div>
    )
}

export default Searchpage;