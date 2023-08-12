import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Button from './Button';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 10px 50px 30px;
  background-color: #f6f6f6;
  border-top: #ebebeb solid 1px;
`

const Footer = ({ setStartDate, deleteEvent, selectedElement }) => {
    const goToDate = () => {
        setStartDate(moment().startOf('isoWeek').clone().add(0, 'days'));
    }

    return (
        <>
            <FooterWrapper>
                <Button onClick={goToDate}>Today</Button>
                {selectedElement.isEvent && (
                    <Button onClick={() => deleteEvent(selectedElement.currentDate, selectedElement.hour)}>
                        Delete
                    </Button>
                )}
            </FooterWrapper>
        </>
    );
};

export default Footer;