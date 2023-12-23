"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [maintask, setMaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMaintask([...maintask, {title, desc}])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i, 1)
    setMaintask(copyTask)
  }

  let renderTask = <h2>"No Task Available"</h2>

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-4 w-2/3'>
            <h5 className='text-bold font-semibold'>{t.title}</h5>
            <h6 className='text-l font-medium'>{t.desc}</h6>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }
          } className='font-l rounded-xl bg-red-400 p-1 mb-4'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white text-5xl font-bold text-center px-5 py-5'> My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-5 px-5 py-2'
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-5 px-5 py-2'
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />

        <button className=' bg-black text-white px-3 py-2 font-semibold rounded-xl'>Add Task</button>
      </form>

      <hr />
      
      <div className='p-8 bg-slate-200'>
          {renderTask}
      </div>
    </>
  )
}

export default page