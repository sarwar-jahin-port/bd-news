import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BanglaNewspapers = () => {
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
      data = data.filter(d => d.category === "bd-newspapers")
      console.log(data);
      setPapers(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    }); 
    },[])

  return (
    <section className='w-4/5 lg:w-9/12 mx-auto'>
      <h1 className='text-3xl my-4'><span>| </span>All Bangla Newspapers</h1>
      <div className='border grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
        {papers && papers.map((p, i) =>(
            <div key={i} className='border flex flex-col flex-wrap justify-center items-center py-5 relative'>
                <Link to={p.link} target='_blank'>
                  <img className='max-w-36' src={p.image} alt="" />
                </Link>
                <p className='text-sm absolute bottom-0'>{p.name}</p>
            </div>
        ))

        }
      </div>
    </section>
  )
}

export default BanglaNewspapers