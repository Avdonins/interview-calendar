import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Header from './components/Header';
import AppWrapper from './components/AppWrapper';
import Calendar from './components/Calendar';
import Table from './components/Table';
import Footer from './components/Footer';
import { useResize } from './helpers/useResize.js';


const App = () => {
  const width = useResize();
  const [startDate, setStartDate] = useState(moment().startOf('isoWeek').add(0, 'day'))
  const [events, setEvents] = useState({})
  const [selectedElement, setSelectedElement] = useState({});

  const deleteEvent = (dateEvent, timeEvent) => {
    setEvents({
      ...events,
      [dateEvent]: events[dateEvent].filter(time => time.split(':')[0] !== timeEvent.split(':')[0])
    })
  }

  useEffect(() => {
    const savedEvents = localStorage.getItem('events')
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  return (
    <>
      <AppWrapper width={width}>
        <Header
          events={events}
          setEvents={setEvents}
          setSelectedElement={setSelectedElement}
        />
        <Calendar
          startDate={startDate}
          setStartDate={setStartDate}
          setSelectedElement={setSelectedElement}
        />
        <Table
          startDate={startDate}
          events={events}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
        <Footer setStartDate={setStartDate} selectedElement={selectedElement} deleteEvent={deleteEvent} />
      </AppWrapper>
    </>
  );
};

export default App;