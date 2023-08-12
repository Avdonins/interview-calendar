import React, { useMemo } from 'react';
import styled from 'styled-components';

import { getHours, getWeeksDates, getHoursFromTime } from '../helpers/getHoursAndDates';

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 11% auto;
  grid-gap: 10px;
  overflow-y: auto;
`

const HoursWrapper = styled.div`
  display: flex;
  gap: 26.8px;
  justify-self: end;
  flex-direction: column;
  padding: 41px 0;
`

const Hours = styled.span`
  color: #999999;
  font-size: 18px;
`

const StyledTable = styled.table`
  padding: 25px 0;
  border-collapse: collapse;
`

const StyledTableElement = styled.td.attrs(({ $key, $havingevents, $selected }) => ({
  key: $key.split('-')[0],
  havingevents: $havingevents,
  selected: $selected
}))`
  height: 50px;
  
  border: #e6e6e6 solid 1px;
  padding: 3px;
  border-top: none;
  border-left: none;
  border-bottom: ${({ key }) =>
    key === '23:00' ? 'none' : 'solid 1px #e6e6e6'};
  background-color: ${({ havingevents, selected }) =>
    havingevents === 'true' && selected ? '#b3b7ff' : havingevents === 'true' ? '#ebecff' : 'transparent'};
  cursor: pointer;

  &:last-child {
    border-right: none;
  }
`;

const Table = ({ startDate, events, selectedElement, setSelectedElement }) => {

  const currHours = getHours();
  const currWeekDates = useMemo(() => {
    return getWeeksDates(startDate);
  }, [startDate]);

  return (
    <>
      <TableWrapper>
        <HoursWrapper>
          {currHours.map((item) => (
            <Hours key={item}>{item}</Hours>
          ))}
        </HoursWrapper>
        <StyledTable>
          <tbody>
            {currHours.map((hour) => (
              <tr key={hour}>
                {currWeekDates.map((date, index) => {
                  const currentDate = date.format('DD-MM-YYYY');
                  const allEvents = events[currentDate] || [];
                  const havingEvents = getHoursFromTime(allEvents);
                  const isSelected =
                    selectedElement.currentDate === currentDate &&
                    selectedElement.hour === hour &&
                    selectedElement.index === index

                  return (
                    <StyledTableElement
                      key={`${hour}-${index}`}
                      $key={`${hour}-${index}`}
                      $havingevents={havingEvents.includes(hour).toString()}
                      $selected={isSelected}
                      onClick={() => {
                        setSelectedElement({ currentDate, hour, index, isEvent: havingEvents.includes(hour) });
                      }}
                    />
                  )
                })}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
};

export default Table;