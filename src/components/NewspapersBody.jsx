import React from 'react'
import { Link } from 'react-router-dom'

const NewspapersBody = ({title, papers}) => {
  return (
    <div>
        <h1 className='text-3xl my-4'><span>| </span>{title}</h1>
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
      <p className='text-sm'>SEO text here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum veritatis commodi fugit facere beatae hic. Cupiditate vitae incidunt eos nisi laboriosam ut est similique sit aut officiis quibusdam sed ipsam eligendi unde expedita, harum magni? Harum consectetur obcaecati rerum eaque officiis eligendi nisi. Quae, laudantium sit? Nisi, dolore minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus id iste. Eaque, adipisci exercitationem corporis perspiciatis earum repudiandae voluptate voluptatem deleniti veniam eos. Doloribus tenetur at aspernatur et tempore, voluptatibus odio. Possimus obcaecati quasi quos ullam. Asperiores odio harum facere? Ut, incidunt vel nemo veniam quidem a at sunt ipsa aut non totam adipisci voluptatum optio illum quod nobis eos. Beatae voluptate laborum totam sequi obcaecati praesentium, tempore architecto ullam suscipit. Mollitia iusto porro eos eveniet dignissimos nesciunt, recusandae sed ea fugit cum molestias nulla minus neque quod? Est culpa ab, doloremque odio aspernatur nemo ipsum pariatur veniam vel.</p>
    </div>
  )
}

export default NewspapersBody