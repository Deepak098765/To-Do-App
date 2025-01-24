import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faStar as regularStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import appIcon from './assets/doiticon1.jpg';
import './App.css'

function App() {

  let [toDoList, setToDoList] = useState([]);

  let saveToDoList = (event)=>{

    let toname = event.target.toname.value;
    
    if(!toDoList.includes(toname)){
        let finalDoList = [...toDoList, toname];
        setToDoList(finalDoList);
    }
    else{
      alert("To Do list name already exists!");
    }

    event.preventDefault();
  }

  let list = toDoList.map((value,index)=>{
    return(
      <ToDoListItems value = {value} key={index} indexNumber={index} toDoList={toDoList} setToDoList={setToDoList}/>
    )
    
  })
  
  

  return (
    <>
      <div className='App'>
        <div className='navbar'>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: '10px' }} />
        <img src={appIcon} alt="" style={{width:'80px'}}/>
        </div>
        <form action="" onSubmit={saveToDoList}>
          <input type="text" name='toname' placeholder='Add Task...'/>
          <button style={{backgroundColor:"#2a823a", borderRadius: "5px"}}>ADD TASK</button>
        </form>

        <div className='outerDiv'>
        <ul>
          {list}
        </ul>
        </div>

        


      </div>
    </>
  )
}

export default App

function ToDoListItems({value,indexNumber, toDoList, setToDoList}){

  let [status, setStatus] = useState(false);
  let [isFilled, setIsFilled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLineThrough, setIsLineThrough] = useState(false);

  let deleteRow = ()=>{
    let filterdList = toDoList.filter((v,i)=>i!=indexNumber);
    setToDoList(filterdList);
  }

  let checkStatus = ()=>{
      setStatus(!status);
  }

  let handleClick = ()=>{
    setIsFilled(!isFilled);
  }

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); // Toggle the state
  };


  return(
    <li className={(status)?'completeToDo': ''} onClick={checkStatus}>
      <FontAwesomeIcon
        icon={isChecked ? faCheckSquare : faSquare} 
        size="" 
        color={isChecked ? 'green' : 'green'} 
        onClick={handleCheckboxClick} 
        style={{ cursor: 'pointer',marginRight:'20px' }} 
      />  

      {indexNumber+1}.
    
     {value} 
    
    <span>
      <FontAwesomeIcon 
    icon={isFilled ? solidStar : regularStar} color={isFilled ? 'black' : 'green'} onClick={handleClick} style={{width: '40px' ,marginRight: '90px', cursor: 'pointer'} }/>
    </span>
    <span onClick={deleteRow}><FontAwesomeIcon icon={faTrash} style={{ marginRight: '30px' }} /></span></li>
  )
}
