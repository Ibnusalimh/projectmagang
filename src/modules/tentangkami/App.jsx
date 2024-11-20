import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import About from './views/About';
import useFetch from '../../strapiClient';


function TentangKamiApp() {

  const heroUrl = 'http://localhost:1337/api/hero?populate=*';
    const partnersUrl = 'http://localhost:1337/api/partners?populate=*';
    const benefitUrl = 'http://localhost:1337/api/benefit';
    const solutionsUrl = 'http://localhost:1337/api/solutions';
    const featuresUrl = 'http://localhost:1337/api/features';
    const testimonialUrl = 'http://localhost:1337/api/testimonials?populate=*';
    const ctaUrl = 'http://localhost:1337/api/cta';
  
    const { data: heroData, loading: heroLoading, error: heroError } = useFetch(heroUrl);
    const { data: partnersData, loading: partnersLoading, error: partnersError } = useFetch(partnersUrl);
    const { data: benefitData, loading: benefitLoading, error: benefitError } = useFetch(benefitUrl);
    const { data: solutionsData, loading: solutionsLoading, error: solutionsError } = useFetch(solutionsUrl);
    const { data: featuresData, loading: featuresLoading, error: featuresError } = useFetch(featuresUrl);
    const { data: testimonialData, loading: testimonialLoading, error: testimonialError } = useFetch(testimonialUrl);
    const { data: ctaData, loading: ctaLoading, error: ctaError } = useFetch(ctaUrl);
  
    // Handle loading and error states
    if (heroLoading || partnersLoading || benefitLoading || solutionsLoading || featuresLoading || testimonialLoading || ctaLoading) {
      return <p>Loading...</p>;
    }
  
    if (heroError || partnersError || benefitError || solutionsError || featuresError || testimonialError || ctaError) {
      return <p>Error loading data</p>;
    }


    console.log(heroData)


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About dataHero={heroData} 
                                      dataPartners={partnersData} 
                                      dataSolutions={solutionsData} 
                                      dataCTA={ctaData} 
                                      dataBenefit={benefitData} 
                                      dataFeatures={featuresData} 
                                      dataTestimonial={testimonialData}/>} />
      </Route>
    </Routes>
  );
}

export default TentangKamiApp;