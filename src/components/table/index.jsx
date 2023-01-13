import React, { useState,useEffect } from "react";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import TableHeadBar from "./components/TableHeadBar";
import { columnListDaily, columnListMonthly, DailyData, MonthlyData } from './components/TableData';
import * as api from '../../api';



const DataTable = ({ pathname, date, month, HandlePopup }) => {
  const [ searchKeyWord, setSearchKeyWord ] = useState('Keenan');
  const [ tableFilterRole, setTableFilterRole ] = useState('students');
  const [ dailyData, setDailyData ]  = useState([]);
  const [ monthlyData, setMonthlyData ] = useState([]);

  
  useEffect(() => {
    if(pathname === '/datas'){

    api.TableDayData({
      role : tableFilterRole,
      date
    })
    .then(resp => {
      const { data } = resp.data;

      if(data ==='There is no data!'){
        setDailyData({ message : data})
      }
      else{
        setDailyData(data.filterByDate)
      }
    })
    .catch(err => console.log(err))
          
  }
  }, [ tableFilterRole,date ]);

  const DateMonth = async (searchData) => {
    await api.TableMonthData(searchData)
    .then( resp => {
      const { data } = resp.data;
        setMonthlyData(data.filterByRole)
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
      if( pathname === '/datas/month'){
        DateMonth({ 
          role : tableFilterRole,
          month
        })
    }
    }, [ month, tableFilterRole ]);

    const filterResult = () =>{
      if(dailyData.length > 0){
       const f = dailyData.filter(d => d.name.toLowerCase().includes(searchKeyWord.toLowerCase()))

       setDailyData(f)
      }
    };


    useEffect(() =>{
      filterResult()
    }, [searchKeyWord])

   return (
    <div className="w-full rounded overflow-hidden">
      
    <TableHeadBar 
    pathname={pathname} 
    date={date} 
    tableFilterRole={tableFilterRole}
    setTableFilterRole={setTableFilterRole}
    setSearchKeyWord={setSearchKeyWord}
    />

    <Table
    columnList={
      pathname === '/datas' ? 
      columnListDaily :
      columnListMonthly
    }
     data={
        pathname === '/datas' ? dailyData 
        :
         pathname ==='/datas/month' && monthlyData
     } 
     pathname={pathname}
     searchDate ={date}
     HandlePopup={HandlePopup}
     />
       
       {/* to do */}
    <Pagination curPage = {1} pagination={5} />

    </div>
  )
}

export default DataTable