import React from 'react';
import { Link } from "react-router-dom";

function NavBar(){
        return (
                <ul>
                    <li>
                    <Link to="/">Anasayfa</Link>
                    </li>
                    <li>
                    <Link to="/secim">Hasta Seçim Sayfası</Link>
                    </li>
                    <li>
                    <Link to="/sıra">Hasta Sıra Sayfası</Link>
                    </li>
                    
                </ul>
           
        );
    }


export default NavBar;