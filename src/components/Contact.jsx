import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #e8e5e4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const StyledHeader = styled.h1`
    font-size: 2.5rem;
    margin-top: 20px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`;

const StyledForm = styled.form`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
        border-color: #666;
        outline: none;
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    resize: vertical;

    &:focus {
        border-color: #666;
        outline: none;
    }
`;

const StyledButton = styled.button`
    background-color: #fa8961;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d21b26;
    }
`;

const ContactInfo = styled.div`
    margin-top: 40px;
    text-align: center;
    color: #333;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const InfoItem = styled.p`
    margin: 5px 0;
`;

export default function Contact() {
    return (
        <StyledDiv>
            <StyledHeader>Contact Us</StyledHeader>
            <StyledForm>
                <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput type="text" id="name" name="name" required />

                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" id="email" name="email" required />

                <StyledLabel htmlFor="message">Message</StyledLabel>
                <StyledTextArea id="message" name="message" rows="5" required />

                <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
            <ContactInfo>
                <InfoItem>Phone: (123) 456-7890</InfoItem>
                <InfoItem>Email: contact@company.com</InfoItem>
                <InfoItem>Address: 123 Main St, City, Country</InfoItem>
            </ContactInfo>
        </StyledDiv>
    );
}
