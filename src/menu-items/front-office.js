// assets
import { IconBriefcase } from '@tabler/icons-react';

// constant
const icons = {
  IconBriefcase
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const frontOffice = {
  id: 'frontOffice',
  title: '',
  caption: '',
  type: 'group',
  children: [
    {
      id: 'frontOffice',
      title: 'Front Office',
      type: 'collapse',
      icon: icons.IconBriefcase,
      children: [
        {
          id: 'AdmissionEnquiry',
          title: 'Admission Enquiry',
          type: 'item',
          url: '/AdmissionEnquiry',
          target: false
        },
        {
          id: 'VisitorsBook',
          title: 'Visitors Book',
          type: 'item',
          url: '/VisitorsBook',
          target: false
        },
        {
          id: 'PostalDispatch',
          title: 'Postal Dispatch',
          type: 'item',
          url: '/PostalDispatch',
          target: false
        },
        {
          id: 'PostalReceive',
          title: 'Postal Receive',
          type: 'item',
          url: '/PostalReceive',
          target: false
        },
        {
          id: 'Complain',
          title: 'Complain',
          type: 'item',
          url: '/Complain',
          target: false
        },
        {
          id: 'SetupFrontOffice',
          title: 'Setup Front Office',
          type: 'item',
          url: '/SetupFrontOffice',
          target: false
        }
      ]
    }
  ]
};

export default frontOffice;
