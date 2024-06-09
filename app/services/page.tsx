import Card from '@/components/Card'
import React from 'react'

const Services = () => {
  return (
    <div className="mt-32"><h2 className="text-3xl text-center font-bold text-gray-900 sm:text-4xl">Our Services</h2>

    <div className="overflow-x-hidden md:space-x-4 space-y-10 px-4 flex flex-col md:space-y-6 md:grid md:grid-cols-3 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
            <Card imageUrl={'/images/education/e6.jpg'} category={'Education '} date={''} title={'Empowering Minds, Shaping Futures'} description={'Transforming education with Hammad Empire. Our innovative solutions and resources pave the way for lifelong learning and growth.'} learnMoreLink={'/services/education'} url2={'/services/education'}/>
  
            <Card imageUrl={'/images/food/f6.jpg'} category={'Food Commodities & Agricultural Produce'} date={''} title={'Quality You Can Taste'} description={'Indulge in excellence with Hammad Empire. Our diverse range of high-quality food products guarantees satisfaction in every bite.'} learnMoreLink={'/services/foodcom'} url2={'/services/foodcom'} />
  
            <Card imageUrl={'/images/teleco/t1.jpg'} category={'Telecommunication '} date={''} title={'Connecting You to Tomorrow'} description={'Experience seamless connectivity with Hammad Empire. Our cutting-edge telecommunications solutions ensure you stay ahead in the digital era.'} learnMoreLink={'/services/telecom'} url2={'/services/telecom'} />
  
            <Card imageUrl={'/images/energy/en1.jpg'} category={'Energy '} date={''} title={'Powering the Future, Responsibly'} description={'Embrace sustainability with Hammad Empire. Our energy solutions, driven by renewable sources, promise a greener tomorrow.'} learnMoreLink={'/services/energy'} url2={'/services/energy'} />
  
       
            <Card imageUrl={'/images/transport/tr2.jpg'} category={'Transportation '} date={''} title={'Moving Your World, Seamlessly'} description={'Experience efficiency with Hammad Empire. Our transportation services ensure timely and secure deliveries, wherever you need to go.'} learnMoreLink={'/services/transportation'} url2={'/services/transportation'} />
  
       
        </div></div>
  )
}

export default Services