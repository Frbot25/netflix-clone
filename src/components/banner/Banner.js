import './Banner.css';
import { FaPlay } from 'react-icons/fa';
import { RiInformationLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Banner = ({film}) => {
    return (
        <div className='image--container'>
        <img src={film} alt="" />
        <div className="infos--banner">
            <h2>Lorem ipsum</h2>
            <p>Regarder le film maintenant</p>
            <div>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quas laboriosam inventore ullam sunt quisquam et hic</span>
            </div>
            
            <div>
            <NavLink><button className='play'><FaPlay className='play--arrow'/>Lecture</button></NavLink>
            <button className='infos'><RiInformationLine className='play--arrow'/>Plus d'infos</button>
            </div>
            
        </div>
        </div>
    )
};

export default Banner;