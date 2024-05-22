import styled from "styled-components";

const StyledFooter = styled.p`
    background-color: white;
    text-align: center;
    width: 100%;
    font-size: 20px;

`;

export default function Footer() {
    return (
        <StyledFooter className="text-lg text-white text-center bg-black bottom-0 w-full">
            &copy; {new Date().getFullYear()} Made by Lawrence Li.
        </StyledFooter>
    );
}