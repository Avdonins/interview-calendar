import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  width: ${props => props.width > 740 ? '740px' : '100vw'};
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`

const AppWrapper = (props) => {
    return (
        <>
            <StyledWrapper {...props} />
        </>
    );
};

export default AppWrapper;