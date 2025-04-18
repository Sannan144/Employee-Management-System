import './App.css'; 
import Login from './Login/Login';
import Employee from './Employee/Employee';
import Admin from './Admin/Admin';
import { employees, setLocalStorage, getLocalStorage } from './LocalStorage/LocalStorage';
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState();
  const [empData, setEmpData] = useState('');
  const[isTrue , setIsTrue] = useState(false)
  const [localData, setLocalData] = useState({ admin: null, employees: null });

  let checkData = (email, password) => {
    if (email === 'admin@company.com' && password === '123') {
      setData('admin');
      localStorage.setItem('login', JSON.stringify({role:'admin'}))
    } else {
      const employee = localData.employees?.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        setEmpData(employee)
        setData('employee');
        localStorage.setItem('login', JSON.stringify({role:'employee',email:employee.email}))
      }
    }
  };


  useEffect(() => {
    let storedData = getLocalStorage();
    setLocalData(storedData);
    if(localStorage.getItem('login')){
      let loginData = JSON.parse(localStorage.getItem('login'))
      setData(loginData.role)
      if(loginData.role === 'employee'){
        let employeeData = storedData.employees.find(emp => emp.email == loginData.email)
        setEmpData(employeeData)
      }
    }
  }, [isTrue]);

  useEffect(()=>{
    setLocalStorage()
  },[])

return (
    <>
      {!data && <Login checkData={checkData} />}
      {data === 'admin' && <Admin setData={setData} localData={localData} setIsTrue={setIsTrue} isTrue={isTrue}/>}
      {data === 'employee' && <Employee empData={empData} setData={setData} isTrue={isTrue} setIsTrue={setIsTrue}/>}
    </>
  );
}

export default App;
