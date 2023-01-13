import axios from "axios";

const API = axios.create({
    baseURL: 'https://aligate.teehtwin.org/api'
  });

API.defaults.headers.common['Authorization'] = 'Bearer 10|TCnc4WQheqDNFlvsLbTkotioZZ1l5cB1hZOq4SrR';


export const GenerateQR = qrData => API.post('/generate',qrData);
export const ScanQR = scanData => API.post('/scan', scanData);

//get the table data
export const TableDayData = ( day ) => API.post('/filter/day', day);
export const TableMonthData = ( month ) => API.post('/filter/month', month);