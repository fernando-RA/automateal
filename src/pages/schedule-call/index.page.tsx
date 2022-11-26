import { Calendar } from '@/components/calendar';
import LandingPage from '@/components/layouts/landingPage/LandingPage';
import { useState } from 'react';
import { NextPageWithLayout } from '../../@types/page';

const ScheduleCall: NextPageWithLayout = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(null);

  return (
    <Calendar
      onDateSelected={function (date: Date): void {
        throw new Error('Function not implemented.');
      }}
    ></Calendar>
  );
};

export default ScheduleCall;

ScheduleCall.getLayout = (page) => {
  return <LandingPage>{page}</LandingPage>;
};

// interface CalendarStepProps {
//   onSelectedDateTime: (dateTime: Date) => void;
// }

// export function CalendarStep({ onSelectedDateTime }: CalendarStepProps) {
//   const [selectedDate, setSelectedDate] = useState<Date>(null);
//   const router = useRouter();

//   const { username } = router.query;

//   function handleSelectHour(hour: number) {
//     const dateTime = dayjs(selectedDate).set('hour', hour).startOf('hour');

//     onSelectedDateTime(dateTime.toDate());
//   }

//   const selectedDateWithoutTime = useMemo(() => {
//     if (!selectedDate) {
//       return null;
//     }

//     return dayjs(selectedDate).format('YYYY-MM-DD');
//   }, [selectedDate]);

//   const { data: availabilityResponse } = useQuery(
//     ['availability', selectedDateWithoutTime],
//     async () => {
//       const response = await api.get(`/users/${username}/availability`, {
//         params: {
//           date: selectedDateWithoutTime,
//         },
//       });

//       return response.data;
//     },
//     {
//       enabled: !!username && !!selectedDateWithoutTime,
//     }
//   );

//   const isTimePickerOpen = !!selectedDate;

//   return (
//     <Container isTimePickerOpen={isTimePickerOpen}>
//       <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

//       {isTimePickerOpen && (
//         <TimePicker>
//           <TimePickerHeader>
//             terça-feira <span>20 de Setembro</span>
//           </TimePickerHeader>

//           <TimePickerList>
//             {availabilityResponse?.possibleTimes.map((hour: number) => {
//               return (
//                 <TimeItem
//                   key={hour}
//                   onClick={() => handleSelectHour(hour)}
//                   disabled={!availabilityResponse.availableTimes.includes(hour)}
//                 >
//                   {String(hour).padStart(2, '0')}:00h
//                 </TimeItem>
//               );
//             })}
//           </TimePickerList>
//         </TimePicker>
//       )}
//     </Container>
//   );
// }
