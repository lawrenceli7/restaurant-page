import { Card } from "antd";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import bigMac from "../assets/big-mac.webp";
import burger from "../assets/burger.png";
import cheeseburger from "../assets/cheeseburger.png";
import hamburger from "../assets/hamburger.webp";


const StyledDiv = styled.div`
    background-color: #e8e5e4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 900px) {
        padding: 10px;
    }
`;

const StyledImg = styled.img`
    max-width: 30%;
    display: block;
    margin: 50px auto 0;
    background-color: #e8e5e4;

    @media (max-width: 900px) {
        max-width: 60%;
        margin-top: 20px;
    }
`;

const StyledInnerDiv = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

const StyledHeaderOne = styled.h1`
    font-size: 55px;
    margin-left: 200px;
    font-family: "Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    @media (max-width: 900px) {
        font-size: 36px;
        margin-left: 0;
    }
`;

const StyledNav = styled(NavLink)`
    background-image: linear-gradient(to right, #fa8961, #d21b26, #fa8961);
    color: white;
    font-weight: bold;
    font-size: 25px;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    transition: background-image 0.3s;
    text-decoration: none;
    margin: 20px 0 10px;

    &:hover {
        background-image: linear-gradient(to right, #d21b26, #fa8961, #fa8961);
    }

    @media (max-width: 900px) {
        font-size: 18px;
        padding: 0.5rem 1rem;
    }
`;

const BurgerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px 200px 0;
    gap: 15px;
    position: relative;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledCard = styled(Card)`
    background-color: #cdcbcc;
    border-radius: 35px;
    width: 250px;
    padding: 20px;
    text-align: center;
    position: relative;

    @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

const StyledText = styled.p`
    margin-bottom: 5px;
    margin-top: 15px;
    font-weight: bold;
`;

const StyledDescription = styled.p`
    color: gray;
    font-size: 14px;
`;

const StyledPrice = styled.p`
    font-weight: bold;
    margin-top: 10px;
`;

const CardImage = styled.img`
    max-width: 100%;
    padding: 5px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background-color: #e8e5e4;

    @media (max-width: 900px) {
        height: 75px;
        top: -40px;
    }
`;

const CardDiv = styled.div`
    position: relative;
    text-align: center;
`;

export default function Home() {

    return (
        <StyledDiv>
            <StyledInnerDiv>
                <StyledHeaderOne>it&apos;s not just a <br />Burger, It&apos;s an <br />Experience.</StyledHeaderOne>
                <StyledImg src={burger} alt="" />
            </StyledInnerDiv>
            <StyledNav to={"/menu"}>View Full Menu</StyledNav>
            <BurgerContainer>
                <CardDiv>
                    <CardImage src={bigMac} alt="Big Mac" />
                    <StyledCard>
                        <StyledText>Big Mac</StyledText>
                        <StyledDescription>With Lettuce & Cheese</StyledDescription>
                        <StyledPrice>$15.00</StyledPrice>
                    </StyledCard>
                </CardDiv>
                <CardDiv>
                    <CardImage src={hamburger} alt="Hamburger" />
                    <StyledCard>
                        <StyledText>Hamburger</StyledText>
                        <StyledDescription>Classic Beef Patty</StyledDescription>
                        <StyledPrice>$18.00</StyledPrice>
                    </StyledCard>
                </CardDiv>
                <CardDiv>
                    <CardImage src={cheeseburger} alt="Cheeseburger" />
                    <StyledCard>
                        <StyledText>Cheeseburger</StyledText>
                        <StyledDescription>With Extra Cheese</StyledDescription>
                        <StyledPrice>$15.00</StyledPrice>
                    </StyledCard>
                </CardDiv>
            </BurgerContainer>
        </StyledDiv >
    );
}
