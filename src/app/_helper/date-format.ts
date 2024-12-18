import * as moment from 'moment';
export class DateFormat {


    dateFormatter(strDate, format) {
        const theDate = new Date(strDate);
        if (format === 'time') {
            return this.getTimeFromDate(theDate);
        } else {
            const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
            const formattedDate = theDate.toLocaleDateString('en-US', dateOptions);
            if (format === 'date') {
                return formattedDate;
            }
            return formattedDate + ' ' + this.getTimeFromDate(theDate);
        }
    }

    getTimeFromDate(theDate) {
        let sec = theDate.getSeconds();
        if (sec < 10) {
            sec = '0' + sec;
        }
        let min = theDate.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        return theDate.getHours() + ':' + min;
    }

    getTimeSecFromDate(theDate) {
        let sec = theDate.getSeconds();
        if (sec < 10) {
            sec = '0' + sec;
        }
        let min = theDate.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        return theDate.getHours() + ':' + min + ':' + sec;
    }

    getTimeDiff(startDate, startTime, endDate, endTime) {
        // create date format
        const timeStart = new Date(this.dateFormatter(startDate, 'date') + ' ' + this.dateFormatter(startTime, 'time')).getTime();
        const timeEnd = new Date(this.dateFormatter(endDate, 'date') + ' ' + this.dateFormatter(endTime, 'time')).getTime();

        const msec = timeEnd - timeStart;
        const mins = Math.floor(msec / 60000);
        const minutes = mins % 60;
        const hrs = Math.floor(mins / 60);
        const days = Math.floor(hrs / 24);
        const yrs = Math.floor(days / 365);
        const hourDiff = hrs + ' hours, ' + minutes + ' min';
        return hourDiff;
    }

    getYearArray() {
        const array = [];
        let currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        if (currentMonth < 6) {
            currentYear = currentYear - 1;
        }
        array.push(currentYear + '-' + (currentYear + 1));
        for (let i = 0; i < 5; i++) {
            const previousYear = currentYear - 1;
            array.push(previousYear + '-' + currentYear);
            currentYear = currentYear - 1;
        }
        return array;
    }
}

