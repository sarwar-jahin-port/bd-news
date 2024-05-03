import React, { useEffect, useState } from 'react'
import NewspapersBody from './NewspapersBody';

const CategoryNewspapers = () => {
    const [banglaPapers, setBanglaPapers] = useState([]);
    const [banglaEPapers, setBanglaEPapers] = useState([]);
    const [onlinePapers, setOnlinePapers] = useState([]);
    const [tvChannels, setTvChannels] = useState([]);
    const [localPapers, setLocalPapers] = useState([]);
    const [internationalPapers, setInternationalPapers] = useState([]);
    const [radioChannels, setRadioChannels] = useState([]);
    const [impInternationTVChannels, setImpInternationTVChannels] = useState([])
    const [indianPapers, setIndianPapers] = useState([])
    const [magazines, setMagazines] = useState([])
    const [jobSites, setJobSites] = useState([])
    const [educational, setEducations] = useState([])

    useEffect(()=>{
      fetch("papers.json")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const banglaPapersData = data.filter(d => d.category === "bd-newspapers");
      const banglaEPapersData = data.filter(d =>d.category === "bd-epapers");
      const onlinePapersData = data.filter(d =>d.category === "online-newspapers");
      const tvChannelsData = data.filter(d => d.category === "tv-channels");
      const localPapersData = data.filter(d => d.category === "local-papers");
      const internationalPapersData = data.filter(d => d.category === "international-papers");
      const radioChannelsData = data.filter(d => d.category === "radio-channels");
      const impInternationTVChannelsData = data.filter(d => d.category === "imp-international-tv-channels");
      const indianPapersData = data.filter(d => d.category === "indian-papers");
      const magazinesData = data.filter(d => d.category === "magazines");
      const jobSitesData = data.filter(d => d.category === "job-sites");
      const educationalData = data.filter(d => d.category === "educational");

      console.log(banglaPapersData);
      console.log(banglaEPapersData);
      console.log(onlinePapersData);
      console.log(tvChannelsData);
      console.log(localPapersData);
      console.log(internationalPapersData);
      console.log(radioChannelsData);
      console.log(impInternationTVChannelsData);
      console.log(indianPapersData);
      console.log(magazines);
      console.log(jobSites);
      console.log(educational);

      setBanglaPapers(banglaPapersData);
      setBanglaEPapers(banglaEPapersData);
      setOnlinePapers(onlinePapersData);
      setTvChannels(tvChannelsData);
      setLocalPapers(localPapersData);
      setInternationalPapers(internationalPapersData);
      setRadioChannels(radioChannelsData);
      setImpInternationTVChannels(impInternationTVChannelsData);
      setIndianPapers(indianPapersData);
      setMagazines(magazinesData);
      setJobSites(jobSitesData);
      setEducations(educationalData);

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    }); 
    },[])

  return (
    <section className='w-4/5 lg:w-9/12 mx-auto'>
      <NewspapersBody title="ALL BANGLA NEWSPAPERS" papers={banglaPapers}/>
      <NewspapersBody title="BANGLADESH EPAPERS" papers={banglaEPapers}/>
      <NewspapersBody title="ALL ONLINE NEWSPAPERS" papers={onlinePapers}/>
      <NewspapersBody title="ALL TV CHANNELS" papers={tvChannels}/>
      {/* TODO: NEED TO ADD MORE LOCAL NEWSPAPERS LINKS BELOW */}
      <NewspapersBody title="ALL LOCAL NEWSPAPERS" papers={localPapers}/>
      <NewspapersBody title="INTERNATIONAL NEWSPAPERS" papers={internationalPapers}/>
      <NewspapersBody title="ALL RADIO CHANNELS" papers={radioChannels}/>
      <NewspapersBody title="IMPORTANT INTERNATIONAL TV CHANNELS" papers={impInternationTVChannels}/>
      <NewspapersBody title="POPULAR INDIAN NEWSPAPERS" papers={indianPapers}/>
      <NewspapersBody title="POPULAR MAGAZINES" papers={magazines}/>
      <NewspapersBody title="POPULAR JOB SITES" papers={jobSites}/>
      <NewspapersBody title="POPULAR EDUCATIONAL SITES" papers={educational}/>
    </section>
    //  TODO: All share bazar newspaper link add
  )
}

export default CategoryNewspapers