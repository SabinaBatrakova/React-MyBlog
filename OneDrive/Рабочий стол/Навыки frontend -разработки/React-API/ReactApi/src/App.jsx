import { useState,
          useEffect 
        } from 'react';

import './App.css'

function App() {
  /*const [count, setCount] = useState(0);*/

  const [users, setUsers] = useState([null]);
  const [isLoading, setIsLoading] = useState(false)//по умолчанию false будто этого состояния нет, имеется ввиду загрузки
  const [isError, setIsError] = useState(false);

  console.log('component rendered');


 /* useEffect(() => {//способ увидеть как апроисходит синхронизация с внешней системой localstorage
    console.log('вызов useEffect')
    localStorage.setItem('count',count);
  }, [count]); //синхронизация с изменениями в счетчике*/


  useEffect(() =>{
    setIsLoading(true);
    setIsError(false)// делвем перезапрос убираем ошибочное состояние

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        if (!response.ok) {
          console.log('с запросом что-то не так', response);
          throw new Error('ошибка в запросе')
        }

        return response.json()
      } )
      .then(data => {
        console.log(data)
        setUsers([data]);
        setIsLoading(false)
  })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    })
g
  }, [])

  return (
    <div>
      {isError ? 'ошибка запроса': ''}
      {isLoading ? 'загрузка': ''}
      { users ? JSON.stringify(users) : ''}
      
    </div>
    
  )

  /*  return (
      <div className="div">
                 {count}
                 <div>
                  <button onClick={() => setCount(count+1)}>
                    Счетчик++
                  </button>
                 </div>
      </div>
    )*/
  }

  


export default App
