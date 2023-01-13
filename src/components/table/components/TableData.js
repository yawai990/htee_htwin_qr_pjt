import React from 'react';

export const columnListDaily = [
    {
      columnName : 'No',
      width : 'w-1/12'
    },
    {
      columnName : 'Student ID',
      width : 'w-2/12'
    },
    {
      columnName : 'Student\'s Name',
      width : 'w-2/12'
    },
    {
      columnName : 'Status',
      width : 'w-3/12',
      element: (status) => <div className={
             status === 1 ? 'present bg-green-600' :
          status === 2 ?  'absent bg-red-600': 
          status === 3 ?  'late bg-orange-600': 
          'bg-tb-btn'
      }></div>
    },
    {
      columnName : 'Latency',
      width : 'w-2/12'
    },
    {
      columnName : 'Exit Time',
      width : 'w-2/12'
    },
  ];

export const columnListMonthly = [
    {
      columnName : 'No',
      width : 'w-1/12'
    },
    {
      columnName : 'Student ID',
      width : 'w-2/12'
    },
    {
      columnName : 'Student\'s Name',
      width : 'w-3/12'
    },
    {
      columnName : 'Total Late',
      width : 'w-3/12'
    },
    {
      columnName : 'Student\'s Info',
      width : 'w-3/12'
    },
  ];

  export const DailyData = {
    studentData :[{
      id: 98,
      name: "Keenan Housbie",
      status: columnListDaily[3].element(1),
      latency: "00:00"
     },
    {
      id: 43,
      name: "Yvor Quinby",
      status: columnListDaily[3].element(2),
      latency: "Not Attendent"
    },
    {
      id: 22,
      name: "Ibbie Cottisford",
      status: columnListDaily[3].element(3),
      latency: "00:45"
    }, 
    {
      id: 1,
      name: "Bail Mulhall",
      status: columnListDaily[3].element(3),
      latency: "4:23"
    }, {
      id: 97,
      name: "Vin Blaine",
      status: columnListDaily[3].element(3),
      latency: "01:01"
    }, {
      id: 35,
      name: "Edithe Ray",
      status: columnListDaily[3].element(3),
      latency: "00:05"
    }, {
      id: 75,
      name: "Corrie Grinyer",
      status: columnListDaily[3].element(1),
      latency: "0:00"
    }, {
      id: 90,
      name: "Cyndi Vequaud",
      status: columnListDaily[3].element(2),
      latency: "Not Attendant"
    }, {
      id: 95,
      name: "Celene Matyashev",
      status: columnListDaily[3].element(1),
      latency: "0:00"
    },{
      id: 63,
      name: "Serene Bulpitt",
      status:columnListDaily[3].element(1),
      latency: "00:00"
    }],
    cur_page : 5,
    pagination : 15,
  };

  export const MonthlyData = {
    studentData :[{
      id: 98,
      name: "Keenan Housbie",
      totallate: 'none',
     },{
      id: 90,
      name: "Cyndi Vequaud",
      totallate: '00:45',
    }
     ],
     cur_page : 5,
     pagination : 15,
  }