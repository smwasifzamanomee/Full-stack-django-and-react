import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [todos, setTodos] = useState(null)
  const [reload, setReload] = useState(null)
  const [edit, setEdit] = useState(false)
  const [editid, setEditid] = useState('')
  const [add, setAdd] = useState(
    { title: "", text: "", }
  )

  // get all data from api
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/todos/',
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setTodos(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [reload])

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdd({ ...add, [name]: value });
  }

  // handle add todo
  const handleAdd = (e) => {
    e.preventDefault()
   
    const options = {
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/todos/',
      headers: {'Content-Type': 'application/json'},
      data: add
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setReload(response.data)
      setAdd({ title: "", text: "", })
    }).catch(function (error) {
      console.error(error);
    });
  }

  // handle delete todo
  const handleDelete = async(id) => {
    const options = {
      method: 'DELETE',
      url: `http://127.0.0.1:8000/api/todos/${id}/`,
    };

    await axios.request(options).then(function (response) {
      setReload(response)
      console.log(response)
    }).catch(function (error) {
      console.error(error);
    });
  }

  // handle edit todo
  const handleEdit = async(id) => {

    const options = {
      method: 'GET',
      url: `http://127.0.0.1:8000/api/todos/${id}/`,
      headers: {'Content-Type': 'application/json'},
    };
    
    await axios.request(options).then(function (response) {
      
      console.log(response.data);
      setEditid(response.data['id'])
      setAdd({ title: response.data['title'], text: response.data['text'] })
      setEdit(true)
      // setReload(response.data)
    }).catch(function (error) {
      console.error(error);
    }
    );

  }

  // handle update todo
  const handleUpdate = async() => {
    const options = {
      method: 'PATCH',
      url: `http://127.0.0.1:8000/api/todos/${editid}/`,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(add)
    };

    await axios.request(options).then(function (response) {
      console.log(response);
      setReload(response)
      setEdit(false)
      setAdd({ title: "", text: "", })

      
    }).catch(function (error) {
      console.error(error);
    })
  }

  return (
    <div className='container mx-auto'>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Todos</h1>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={add.title} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1" placeholder="title" />
          <label htmlFor="text">Content: </label>
          <input type="text" name="text" value={add.text} onChange={handleInputChange} className="border border-gray-300 rounded-md px-2 py-1" placeholder="content" />
          {
            edit ? <button onClick={() => handleUpdate(add.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button> : <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Todo</button>
          }
        </div>

      </div>
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Date</th>
            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Title</th>
            <th scope="col" className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Content</th>
            <th scope="col" className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Action</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos && todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td className="py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{todo.date}</td>
                <td className="hiddenpy-4 whitespace-nowrap text-center text-sm text-gray-500 sm:table-cell">{todo.title}</td>
                <td className="hiddenpy-4 whitespace-nowrap text-center text-sm text-gray-500 lg:table-cell">{todo.text}</td>
                <td className="py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center items-center gap-4">
                  <button onClick={() => handleEdit(todo.id)} className="bg-yellow-500 text-white w-[100px] rounded">Edit</button>
                  <button onClick={()=> handleDelete(todo.id)} className="bg-red-500 text-white w-[100px] rounded">Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>




      </table>
    </div>
  )
}

export default Home