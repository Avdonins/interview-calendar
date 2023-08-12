import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Button from './Button';
import prevArrow from '../assets/prevArrow.png';
import nextArrow from '../assets/nextArrow.png';

const CalendarWrapper = styled.div`
  padding-left: 5%;
  background-color: #f2f2f2;
  border-top: #ebebeb solid 1px;
  border-bottom: #ebebeb solid 1px;
`

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const DayWrapper = styled.div`
  padding: 10px 0;
  font-weight: bold;
`

const CalendarDays = styled.div`
  display: flex;
  justify-content: center;  
  font-size: 24px;
  background-color: ${({ istoday }) =>
        istoday === 'true' ? 'red' : 'transparent'};
  color: ${({ istoday }) => (istoday === 'true' ? 'white' : 'black')};
  border-radius: 40px;
`

const CalendarDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const TextWrapper = styled.div`
  font-size: 24px;
`

const Calendar = ({ startDate, setStartDate, setSelectedElement }) => {
    const getAllDays = (startDate) => {
        const dates = [];
        const currentDate = moment(startDate);
        for (let i = 0; i < 7; i++) {
            dates.push(moment(currentDate));
            currentDate.add(1, 'day');
        }
        return dates;
    }

    const weekDates = getAllDays(startDate);
    const currentWeekMonth = weekDates[0].format('MMM');
    const currentWeekYear = weekDates[0].format('YYYY');

    const nextWeek = () => {
        setSelectedElement({})
        setStartDate(startDate.clone().add(7, 'days'))
    };
    const prevWeek = () => {
        setSelectedElement({})
        setStartDate(startDate.clone().subtract(7, 'days'))
    };

    return (
        <>
            <CalendarWrapper>
                <DaysWrapper>
                    {weekDates.map((date) => (
                        <DayWrapper key={date.format('ddd')}>
                            {date.format('ddd').charAt(0)}
                        </DayWrapper>
                    ))}
                </DaysWrapper>
                <DaysWrapper>
                    {weekDates.map((date) => (
                        <CalendarDays
                            key={date.date()}
                            istoday={date.isSame(moment(), 'day').toString()}
                        >
                            <CalendarDay>{date.date()}</CalendarDay>
                        </CalendarDays>
                    ))}
                </DaysWrapper>
                <SliderWrapper>
                    <Button img={prevArrow} onClick={prevWeek}/>
                    <TextWrapper>
                        {currentWeekMonth} {currentWeekYear}
                    </TextWrapper>
                    <Button img={nextArrow} onClick={nextWeek}/>
                </SliderWrapper>
            </CalendarWrapper>
        </>
    );
};

export default Calendar;