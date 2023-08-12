import React from 'react';
import styled from 'styled-components';

const StyledButtonWrapper = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

const ImgBtn = styled.img`
  width: 30%;
`;

const StyledText = styled.p`
  color: red;
  font-size: 28px;
`

const Button = ({ onClick, img, children }) => {
    return (
        <>
            <StyledButtonWrapper onClick={onClick}>
                <ImgBtn src={img} />
                <StyledText>
                    {children}
                </StyledText>
            </StyledButtonWrapper>
        </>
    );
};

export default Button;