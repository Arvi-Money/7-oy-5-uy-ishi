import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';


function App() {
  const forms = useSelector(state => state.form.form)
  const nameRef = useRef();
  const ageRef = useRef();
  const dispatch = useDispatch();

  console.log(forms);

  function handleClick(e) {
    e.preventDefault();
    if (nameRef.current.value && ageRef.current.value) {
      let user = {
        id: Date.now(),
        name: nameRef.current.value,
        age: ageRef.current.value
      }
      dispatch({ type: 'ADD', payload: user })
      nameRef.current.value = "";
      ageRef.current.value = "";
    }
  }

  function handleDelete(id) {
    dispatch({ type: 'REMOVE', payload: id })
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <form>
            <div className='d-flex flex-column'>
              <label htmlFor="name" className='mb-1'>Name</label>
              <input type="text" placeholder='Enter your name...' id='name' className='px-2' ref={nameRef} />
            </div>
            <div className='d-flex flex-column'>
              <label htmlFor="age" className='mb-1'>Age</label>
              <input type="number" placeholder='Enter your age...' id='age' className='px-2' ref={ageRef} />
            </div>
          </form>
          <div className="btn save bg-success" onClick={handleClick}>Save</div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                forms.length > 0 && forms.map((el, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">1</th>
                      <td>{el.name}</td>
                      <td>{el.age }</td>
                      <td className='d-flex gap-3 align-items-center'>
                        <span className='text-info'>Update</span>
                        <span className='text-danger' onClick={() => {handleDelete(el.id)}}>Delete</span>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
