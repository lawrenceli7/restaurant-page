import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logo.jpeg';


const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: white;
    max-width: 100%;
`;

const StyledImg = styled.img`
    max-width: 5%;
`;

const StyledNav = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
    text-decoration: none;
    padding: 15px;
    border-radius: 0.5rem;
    transition: all 0.3s;
    &:hover {
        color: #d21b26;
    }
`;

const StyledInnerDiv = styled.div`
    display: flex;
    align-items:center;
    gap: 5px;
`;

const StyledSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;

`;

export default function Navbar() {
    return (
        <>
            <StyledDiv>
                <StyledInnerDiv>
                    <StyledImg src={logo} alt="logo" />
                    <StyledSpan>Burger Paradise</StyledSpan>
                </StyledInnerDiv>
                <div>
                    <StyledNav to={"/"}>
                        Home
                    </StyledNav>
                    <StyledNav to={"/menu"}>
                        Menu
                    </StyledNav>
                    <StyledNav to={"/contact"}>
                        Contact
                    </StyledNav>
                </div>
            </StyledDiv>
        </>
    );
}