import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import addIcon from '../assets/add.png';
import moment from 'moment';

const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 30px;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

const Header = ({ events, setEvents, setSelectedElement }) => {

  const addEvent = () => {

    setSelectedElement({});

    const newEvent = prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');
    if (newEvent) {
      if (moment(newEvent, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
        const [eventDate, eventTime] = newEvent.split(' ')
        const dateKey = moment(eventDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
        
        if (events[dateKey]) {
          events[dateKey].push(`${eventTime}`);
        } else {
          events[dateKey] = [`${eventTime}`];
        }
        setEvents({ ...events });
      } else {
        alert('Invalid date or time format');
        return;
      }
    } else {
      alert('Form cannot be empty');
      return;
    }
  }

  return (
    <>
      <StyledHeaderWrapper>
        <StyledTitle>Interview Calendar</StyledTitle>
        <Button img={addIcon} onClick={addEvent} />
      </StyledHeaderWrapper>
    </>
  );
};

export default Header;