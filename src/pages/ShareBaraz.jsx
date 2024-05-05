import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';

const ShareBaraz = () => {
    const [businessPaper, setBusinessPaper] = useState([]);
    const [sharePaper, setSharePaper] = useState([]);

    useEffect(() => {
        fetch("papers.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const businessPaperData = data.filter(d => d.category === "business-newspaper");
                const sharePaperData = data.filter(d => d.category === "share-bazar");
                console.log(businessPaperData);
                console.log(sharePaperData);
                setBusinessPaper(businessPaperData);
                setSharePaper(sharePaperData);
            })
            .catch(error => {
                console.error('There was a problem with the share fetch operation:', error);
            });
    }, [])
    return (
        <div>
            <Helmet>
                <title>BD NEWS | SHARE BAZAR</title>
            </Helmet>
            <section className='w-[90%] lg:w-4/5 mx-auto'>
                <h1 className='text-3xl my-2'><span>| </span>ALL SHARE BAZAR NEWSPAPERS OF BANGLADESH</h1>
                <div className="share-bazar-body grid grid-cols-1 lg:grid-cols-6">
                    <div className="left-body border p-5 flex flex-col flex-wrap gap-4 box-content">
                        <button type="button" className='btn bg-orange-300 p-2 rounded'>BOOKMARK US</button>
                        <h2 className='text-xl'>Bangladeshi Business Newspapers</h2>
                        <p className='text-sm'>Here is the latest <span className='font-bold'>Bangaladesh Business</span> and <span className='font-bold'>Share bazar news</span> online from following newspaper websites:</p>
                        {/* Business Newspapers */}
                        {businessPaper && businessPaper.map((p, i) => (
                            <div key={i} className='border flex flex-col flex-wrap justify-center items-center box-content'>
                                <Link to={p.link} target='_blank'>
                                    <img className='max-w-36' src={p.image} alt="" />
                                </Link>
                                <p className='text-sm py-2'>{p.name}</p>
                            </div>
                        ))
                        }
                        <div className="bg-regional-papers">
                            <h3 className='text-xl'>Bangladesh Regional Papers</h3>
                            <Link className='block p-1 border my-1 text-blue-600' target='_blank' to="/chittagong">CHITTAGONG NEWSPAPERS</Link>
                            <Link className='block p-1 border my-1 text-blue-600' target='_blank' to="/sylhet">SYLHET NEWSPAPERS</Link>
                            <Link className='block p-1 border my-1 text-blue-600' target='_blank' to="/khulna">KHULNA NEWSPAPERS</Link>
                            <Link className='block p-1 border my-1 text-blue-600' target='_blank' to="/barisal">BARISAL NEWSPAPERS</Link>
                            <Link className='block p-1 border my-1 text-blue-600' target='_blank' to="/comilla">COMILLA NEWSPAPERS</Link>
                        </div>
                    </div>
                    <div className="middle-body border col-span-4 grid grid-cols-3 gap-5">
                       {sharePaper && sharePaper.map((p,i) =>(
                        <div key={i} className='share-paper border flex flex-col flex-wrap justify-center items-center box-content'>
                        <Link to={p.link} target='_blank'>
                          <img className='max-w-36' src={p.image} alt="" />
                        </Link>
                        <p className='text-sm py-2'>{p.name}</p>
                    </div>
                       ))
                       }
                       <p>SEO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure et provident deserunt nam saepe, earum dolore, ex laborum nemo, maiores eos sequi commodi at aliquid natus corporis quos eum assumenda consequuntur? Repellat, nihil cumque dolore, tenetur deserunt vel numquam temporibus omnis, labore possimus aut voluptate sequi minima! Voluptatibus dolor suscipit iusto, deleniti perspiciatis eos at ab vitae error excepturi eum magni, ratione veritatis blanditiis debitis repellat quidem autem dicta culpa ea consequuntur? Facilis deserunt iure expedita dignissimos vero quibusdam aspernatur in, quas, laborum sunt modi eveniet corrupti repellendus dolorem officiis, vitae explicabo repellat ducimus debitis veritatis officia harum aliquam quos.</p>
                    </div>
                    <div className="right-body border">

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShareBaraz