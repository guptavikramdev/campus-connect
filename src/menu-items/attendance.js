// assets
import { IconCalendarMonth } from '@tabler/icons-react';

// constant
const icons = {
  IconCalendarMonth
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const attendance = {
  id: 'Attendance',
  title: '',
  caption: '',
  type: 'group',
  children: [
    {
      id: 'Attendance',
      title: 'Attendance',
      type: 'collapse',
      icon: icons.IconCalendarMonth,
      children: [
        {
          id: 'StudentAttendance',
          title: 'Student Attendance',
          type: 'item',
          url: '/StudentAttendance',
          target: false
        },
        {
          id: 'StudentLeave',
          title: 'Student Leave',
          type: 'item',
          url: '/StudentLeave',
          target: false
        },
        {
          id: 'AttendanceReport',
          title: 'Attendance Report',
          type: 'item',
          url: '/AttendanceReport',
          target: false
        }
      ]
    }
  ]
};

export default attendance;
