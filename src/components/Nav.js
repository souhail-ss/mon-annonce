import React from 'react';
import { Link } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography'

const Nav=()=>{
    return(
        <div className='nav-par'>
            <ul className="nav-ul">
                <ul className='ul'>
                    <li className='nav-one'><Link to="/home">
                        <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3515/3515175.png' width={60} height={60} />
                        </Link>
                          Annoncements
                    </li> 
          
                    <li className='nav-two'><Link to="/home">Home</Link></li>
                    <li className='nav-three'><Link to="/offers">Collection</Link></li>
                </ul>
                

                
                

                
               

            </ul>
        </div>
    )
}

export default Nav;