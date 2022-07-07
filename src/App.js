import './App.css';
import { Route, Routes } from 'react-router-dom';
import BlogsPage from './Pages/Blogs';
import { useState } from 'react';
import { useEffect } from 'react';

const urlEndpoint = "http://localhost:4000";


function App() {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState('title');
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState('title');
  const [filterValue, setFilterValue] = useState('');
  const [limit, setLimit] = useState(Number(10));
  const [page, setPage] = useState(Number(1));


  // code to copy and add in
  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      console.log("url", url);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);


  return (
    <div className="App">
      <Routes>
        <Route path="/blogs"
          element={<BlogsPage
            blogs={serverJSON.message}
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            filterField={filterField}
            setFilterField={setFilterField}
            filterValua={filterValue}
            setFilterValue={setFilterValue}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
          />}></Route>
        )
      </Routes>

    </div>
  );
}

// original code to start assignment
// useEffect(() => {
//   const fetchData = async () => {
//     const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
//     const apiJSON = await apiResponse.json();
//     setServerJSON(apiJSON);
//     return;
//   };
//   fetchData();
// }, []);


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


export default App;
