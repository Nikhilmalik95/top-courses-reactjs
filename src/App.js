import './App.css';
import { apiUrl, filterData } from './data'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filter from './components/Filter'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState({})
  const [loading, setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

    }
    catch (error) {
      toast.error("Data not fetched ! Check internet connection");
    }
    setLoading(!loading);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      <div >
        <Navbar></Navbar>
      </div>
      <div className='bg-purple-400'>
      <div>
        <Filter filterData={filterData} category = {category} setCategory = {setCategory}></Filter>
      </div >
      <div className='w-11/12 max-w-[1200px] mx-auto  min-h-[150vh]'>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category = {category} />)
        }
      </div>
      </div>
      

    </div>
  );
}

export default App;
