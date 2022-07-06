import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogsPage from './Pages/Blogs';
import { useState } from 'react';
import { useEffect } from 'react';

const urlEndpoint = "http://localhost:4000";


function App() {
  const [serverJSON, setServerJSON] = useState({ message: null });

  // original code
  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);

  // code to copy and add in
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `${urlEndpoint}/blogs/all-blogs`
  //     const apiResponse = await fetch(url);
  //     const apiJSON = await apiResponse.json();
  //     setServerJSON(apiJSON);
  //     return;
  //   };
  //   fetchData();
  // }, []);



  return (
    <div className="App">
      <Routes>
        <Route path="/blogs"
          element={<BlogsPage message={serverJSON.message} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
