import {Outlet} from "react-router-dom";
import logowhite from '../images/tier_logo_white.png';
import alarm from '../images/bell.png';
import Container from "./Container";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";

const Layout =() => {
    const context = useContext(UserContext);
    const {color} = context;
    return(
        <Container color ={color}>
            <header className="mainhead">
                <div className="logo2">
                    <img src={logowhite} alt="white"/>
                </div>
                <div className="bell">
                    <img src={alarm} alt="alarm"/>
                </div>

            </header>
            <main>
                <Outlet/>    
            </main>

        </Container>
    );

};
export default Layout;