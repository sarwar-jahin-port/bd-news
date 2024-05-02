import React, { useEffect, useState } from 'react'

const DataTester = () => {
  const [papers, setPapers] = useState([]);
  useEffect(()=>{
    fetch("papers.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    setPapers(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 
  },[])
  return (
    <div className='grid grid-cols-6'>
      {papers && 
        papers.map(p => (
          <div className="paper border p-5 m-5">
            <img src={p.image} alt="" />
            <p>{p.link}</p>
          </div>
        ))

      }
    </div>
  )
}

export default DataTester