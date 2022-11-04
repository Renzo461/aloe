import { useState } from "react";
import { DAYS, MONTHS } from "./conts";
import { CalendarHead, ClenderBody, HeadDay, SevenColGrid, StyledDay, StyledEvent, StyledposEvent, Wrapper } from "./styled";
import { areDatestheSame, getDateObj, getDaysInMonth, getSortedDays, range } from "./utils";

export const Calender = ({startingDate, eventsArr, posArr}) => {
    const [currentMonth,setCurrentMonth] = useState(10);
    const [currentYear,setCurrentYear] = useState(2022);
    const DAYSINAMONTH = getDaysInMonth(currentMonth,currentYear);
    return (
    <Wrapper>
        <CalendarHead>
            <p>A continuación se muestra el calendario de cortes programados del servicio de agua, tomar precauciones:</p>
        </CalendarHead>
        <SevenColGrid>
            {getSortedDays(currentMonth,currentYear).map((day) => (
            <HeadDay>{day}</HeadDay>
            ))}
        </SevenColGrid>
        <ClenderBody fourCol={DAYSINAMONTH===28}>
            {range(DAYSINAMONTH).map((day) => (
                <StyledDay active={
                    areDatestheSame(new Date(), getDateObj(day, currentMonth, 2021))}
                    >
                        <p>{day}</p>
                        {eventsArr.map((ev) => (
                            areDatestheSame(getDateObj(day,currentMonth,currentYear), ev.date) &&
                            <StyledEvent>{ev.title}</StyledEvent>
                        ))}
                        {posArr.map((ev) => (
                            areDatestheSame(getDateObj(day,currentMonth,currentYear), ev.date) &&
                            <StyledposEvent>{ev.title}</StyledposEvent>
                        ))}
                    </StyledDay>
            ))}
        </ClenderBody>
    </Wrapper>
    );
};
