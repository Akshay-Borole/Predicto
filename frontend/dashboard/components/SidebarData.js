import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaIcons.FaUser />
  },

  
  {
    title: 'Strategy',
    path: '/strategy',
    icon: <IoIcons.IoIosStats />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Make Strategy',
        path: '/strategy/makestrategy',
        icon: <IoIcons.IoIosShare />,
        cName: 'sub-nav'
      },
      {
        title: 'Compare Strategy',
        path: '/strategy/comparestrategy',
        icon: <IoIcons.IoIosSwap />,
        cName: 'sub-nav'
      },
      {
        title: 'Buy Strategy',
        path: '/strategy/buystrategy',
        icon: <IoIcons.IoIosCart />
      }
    ]
  },
  
  {
    title: 'Notification',
    path: '/notification',
    icon: <AiIcons.AiFillNotification />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Daily Update',
        path: '/notification/dailyupdate',
        icon: <IoIcons.IoIosGlobe />
      },
      {
        title: 'Payment Receipt',
        path: '/notification/paymentreceipt',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Visualization',
    path: '/visualization',
    icon: <FaIcons.FaChartLine />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Graphical Representation',
        path: '/visualization/graphicalrepresentation',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Numerical Representation',
        path: '/visualization/numericalrepresentation',
        icon: <IoIcons.IoIosAnalytics />
      }
    ]
  },

  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoIosLogOut />
  }
];
