import '../App.css';
import '../css/side-nav.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

function SideNav() {
    
    function searchPage(){

    }

    return (
      <div className="App">
        <nav className="side-nav">
          <header>
            <h1>VYBZ</h1>
          </header>
          <ul>
            <li className='list-items' id='home'>
              <Link to ="/home" ><HomeIcon className='HomeIcon' fontSize='small'/>Home</Link>
            </li>
            <li className='list-items'>
              <Link to="/search" ><SearchIcon className='SearchIcon' fontSize='small'/>Search</Link>
            </li>
            <li className='list-items'>
              <a href='#'><LibraryMusicIcon className='LibraryMusicIcon' fontSize='small' />Playlist</a>
            </li>
            <li className='list-items'>
              <a href='#'><AlbumIcon className='AlbumIcon' fontSize='small'/>Albums</a>
            </li>
            <li className='list-items'>
              <a href='#'><PersonIcon className='PersonIcon' fontSize='small'/> Artist</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default SideNav;