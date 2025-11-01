import "./NavigationPage.css"
import { useNavigate } from "react-router-dom";
import RoutesConstant from "../../constants/routes.constant";
import { useState } from "react";

const NavigationPage = () =>{

    const navigate = useNavigate();
    const [cardState,setCardState] = useState(0);
    const [isDisabled,setIsDisabled] = useState(true)

    function handleclick () {
        switch(cardState){
            case 1:
                navigate(RoutesConstant.HqLogin);
                break;
            case 2: 
                navigate(RoutesConstant.StoreLogin);
                break;
            case 3:
                navigate(RoutesConstant.CustomerLogin)
        }
    }

    function handleOnChange (cardStateLocal: number){
        setCardState(cardStateLocal);
        setIsDisabled(false);
    }

    return(
        <>
            <input 
                type="radio" 
                id="hqcard" 
                name="cards"
                onChange={() => handleOnChange(1)}
            />
            <label htmlFor="hqcard" className="card menu-cards">
                HQ
            </label>
            <input 
                type="radio" 
                id="storecard" 
                name="cards"
                onChange={() => handleOnChange(2)}
            />
            <label htmlFor="storecard" className="card menu-cards">
                Store
            </label>
            <input 
                type="radio" 
                id="customercard" 
                name="cards"
                onChange={() => handleOnChange(3)}
            />
            <label htmlFor="customercard" className="card menu-cards">
                Customer
            </label>
            <button 
                className="login-btn"
                onClick={handleclick}
                disabled={isDisabled}
            >
                Login
            </button><br/> 
            <hr className="divider"/>
            <div 
                className="homepage-card content"
                onClick={() => navigate(RoutesConstant.HomePage)}
            >
                HomePage
            </div>
        </>
    );
};

export default NavigationPage;