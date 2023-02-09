import './Header.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsBellFill } from 'react-icons/bs';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import Profile from '../assets/AAAABZ2iWyDq0fR9TY_uztNZ4TcwWkPPdS2NdTtUt3EHjC_rkiEAexSxSUfbrAYTaiI5pcHVs5QMIAhgo1tVaDJr67VjRcr_ZCw.png';
import { NavLink } from 'react-router-dom';
import logo from './../assets/flexflix.png'
const Header = () => {
    const searchInput = document.querySelector('.search--input');
    const handleClic = () => {
        //alert('clic');
        if (searchInput.classList.contains('hidden')) {
            console.log(searchInput)
            searchInput.classList.remove('hidden');;
          } else {
            searchInput.classList.add('hidden');
          }
    }
   // console.log(arrow)
  // let test = document.getElementById("test");
    //console.log(test)
   
   
   
    return (
        <div className='header'>
        <nav className='navbar'>
            <div className='navbar--container'>
            <img src={logo} alt="netflix" style={{width: "100px", height: "auto"}}/>
            <ul>
                <li><NavLink to='/'>Accueil</NavLink></li>
                <li><NavLink to='#'>Série</NavLink></li>
                <li><NavLink to='#'>Films</NavLink></li>
                <li><NavLink to='#'>Nouveautés</NavLink></li>
                
            </ul>
            </div>
            <div className='navbar--containerRight'>
            <ul className='navbar--right'>
                <input className='search--input hidden' type="text" placeholder='Titres, personnes, genres' />
                <li><BiSearchAlt2 className='search' style={{fontSize: "30px", fontWeight: "bold", cursor: "pointer"}} onClick={handleClic}/></li>
                <li className='link--right'><NavLink to='#'>Direct</NavLink></li>
                <li className='link--right'><NavLink to='#'>Films</NavLink></li>
                <li><NavLink to='#'><BsBellFill style={{color: "#f1f1f1"}} className='arrow1'/></NavLink></li>
                <li><img id='test' src={Profile} alt="profil" /><MdOutlineArrowDropDown className='arrow' style={{color: "#f1f1f1"}}/></li>
                <div className='handleClicMenu hidden'>
                    <ul>
                        <li>user1</li>
                        <li>user2</li>
                        <li>user3</li>
                        <li>Gérer les profils</li>
                        <li>Compte</li>
                        <li>Centre d'aide</li>
                        <hr />
                        <li>Déconnexion</li>
                    </ul>
                </div>
            </ul>
            </div>
        </nav>
       
        
  </div>
    )
  
};

export default Header;