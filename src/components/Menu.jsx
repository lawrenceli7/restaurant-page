import { Divider } from 'antd';
import styled from 'styled-components';
import bigMacImage from '../assets/big-mac.webp';
import burgerImage from '../assets/burger.png';
import cheeseburgerImage from '../assets/cheeseburger.png';
import chickenBurgerImage from "../assets/chicken-burger.jpeg";
import doubleQuarterImage from "../assets/double-quarter.jpg";
import hamburgerImage from "../assets/hamburger.webp";
import impossibleBurgerImage from "../assets/impossible-burger.webp";
import veganImage from "../assets/vegan-burger.jpeg";

const StyledDiv = styled.div`
    background-color: #e8e5e4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const MenuHeader = styled.h1`
    font-size: 3rem;
    margin: 20px 0;
    color: #333;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`;

const MenuItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const MenuItem = styled.div`
    background-color: white;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const MenuItemImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

const MenuItemDetails = styled.div`
    padding: 15px;
    text-align: center;
`;

const MenuItemName = styled.h2`
    font-size: 1.5rem;
    margin: 10px 0;
    color: #333;
`;

const MenuItemDescription = styled.p`
    color: gray;
    font-size: 1rem;
    margin: 10px 0;
`;

const MenuItemPrice = styled.p`
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
`;

export default function Menu() {
    const menuItems = [
        {
            name: 'Classic Burger',
            description: 'A delicious classic burger with fresh ingredients.',
            price: '$12.00',
            image: burgerImage,
        },
        {
            name: 'Cheeseburger',
            description: 'A juicy cheeseburger with melted cheese and lettuce.',
            price: '$14.00',
            image: cheeseburgerImage,
        },
        {
            name: 'Big Mac',
            description: 'A double-decker burger with pickles and tomatoes.',
            price: '$15.00',
            image: bigMacImage,
        },
        {
            name: 'Hamburger',
            description: 'A classic hamburger with lettuce and tomato.',
            price: '$10.00',
            image: hamburgerImage,
        },
        {
            name: 'Quarter Pounder',
            description: 'A double quarter pounder with onions, tomatoes, cheese, and lettuce.',
            price: '$18.50',
            image: doubleQuarterImage,
        },
        {
            name: 'Impossible Burger',
            description: 'A burger consisting of pickles, onions, lettuce, bacon, and a lot of meat.',
            price: '$20.00',
            image: impossibleBurgerImage,
        },
        {
            name: 'Chicken Burger',
            description: 'A delicious chicken burger with lettuce, tomatoes, and mayo.',
            price: '$11.00',
            image: chickenBurgerImage,
        },
        {
            name: 'Vegan Burger',
            description: 'A delicious vegan burger with fresh ingredients.',
            price: '$10.00',
            image: veganImage,
        }
    ];

    return (
        <StyledDiv>
            <MenuHeader>Our Menu</MenuHeader>
            <MenuItemContainer>
                {menuItems.map((item, index) => (
                    <MenuItem key={index}>
                        <MenuItemImage src={item.image} alt={item.name} />
                        <MenuItemDetails>
                            <MenuItemName>{item.name}</MenuItemName>
                            <Divider />
                            <MenuItemDescription>{item.description}</MenuItemDescription>
                            <MenuItemPrice>{item.price}</MenuItemPrice>
                        </MenuItemDetails>
                    </MenuItem>
                ))}
            </MenuItemContainer>
        </StyledDiv>
    );
}
