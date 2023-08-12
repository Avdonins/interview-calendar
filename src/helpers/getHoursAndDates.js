import moment from "moment"

export const getHours = () => {
    const hours = []
    for(let i = 0; i < 24; i++) {
        hours.push(moment().startOf('hour').hour(i).format('HH:00'))
    }
    return hours
}

export const getWeeksDates = (startDate) => {
    const dates = []
    const currentDate = moment(startDate).startOf('isoWeek').clone();
    for (let i = 0; i < 7; i++) {
        dates.push(moment(currentDate));
        currentDate.add(1, 'day');
    }
    return dates;
}

export const getHoursFromTime = (time) => {
    const hours = time.map((item) => {
        return `${item.split(':')[0]}:00`
    })
    return hours
}