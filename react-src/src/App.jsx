import { useState, useEffect } from 'react';
import Web3 from 'web3';
import contract from '@truffle/contract';

import TodoList from './TodoList.json'

export default function App() {
  const [account, setAccount] = useState();
  const [contactList, setContactList] = useState();
  const [contacts, setContacts] = useState([]);

  const [taskName, setTaskName] = useState("");
  
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      web3.eth.defaultAccount = accounts[0];
      
      setAccount(accounts[0]);

      const todo = contract(TodoList);
      
      todo.setProvider(web3.currentProvider);

      var _contactList = await todo.deployed();

      setContactList(_contactList);

      const counter = (await _contactList.taskCount()).toNumber();

      for (var i = 1; i <= counter; i++) {
        const contact = await _contactList.tasks(i);
        setContacts((contacts) => [...contacts, contact]);
      }
    }
    
    load();
   }, []);

   return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <form>
        <p className='mb-6'><i>Your account is: {account}</i></p>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='task'>
            Task
          </label>
          <input value={taskName} onChange={(e) => setTaskName(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='task' type='text' placeholder='task' />
        </div>
        <button onClick={() => contactList.createTask(taskName, {from: account})} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
          Add
        </button>
      </form>
      <div className='mt-6'>
        <h2 className='text-xl font-semibold'>Tasks</h2>
        <ul>
        {
          Object.keys(contacts).map((contact, index) => (
            <li className='mb-2' key={index}>
              <p>content: {contacts[index].content}</p>
              <p>completed: {contacts[index].completed ? "Yes" : "No"}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
   );
}