
// import './App.css'
import Card from './components/Card'
import './components/Card.css'
function App() {
  return (
  <div>
    <h1>Welcome To Montenegro</h1>
    <div className='list-of-cards'>
    <Card  
      img='https://a0.muscache.com/im/pictures/49793800/96a8b967_original.jpg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/44156391/707da2bb_original.jpg?im_w=720'
      favorite='Guest favorite'
      title='Gecko - River House,Ulcinj, Montenegro'
      rating={4.96}
      description='17 km away from the beach'
      date='Apr 1-10'
      price={148}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/miso/Hosting-911607038074066279/original/da32710d-6565-49e3-bfb0-238406347a07.jpeg?im_w=960'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-911607038074066279/original/a0c27365-e712-45d6-88ba-726393bcacde.jpeg?im_w=720'
      favorite='Guest favorite'
      title='Entire rental unit in Rafailovići, Montenegro'
      rating={5}
      description='On the beach'
      date='Apr 1-7'
      price={65}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/hosting/Hosting-1114475493964261918/original/ca80c0a1-ff00-4aa0-8a99-7f54a4e8340d.jpeg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/hosting/Hosting-1114475493964261918/original/1dc5807f-c9d6-4d0b-94c6-de33b8428c41.jpeg?im_w=720'
      title='Entire condo in Veliki Pijesak Beach, Montenegro'
      rating={4.85}
      description='On the beach'
      date='Apr 1-7'
      price={118}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/miso/Hosting-588105108768586887/original/998265bb-0a1b-4685-acd8-db290dfd1030.jpeg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-588105108768586887/original/1aa672e7-a46c-4e9e-b374-2451520a2e0f.jpeg?im_w=720'
      title='Entire rental unit in Kotor, Montenegro'
      rating={4.87}
      description='2,5 km away from the beach'
      date='May 1-5'
      price={174}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/bc6fab5a-d16f-4fc1-9822-225dfe265097.jpg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/ac339578-dd9b-4b17-987d-b1e5ee9f8ab9.jpg?im_w=1200'
      favorite='Guest favorite'
      title='Entire guest suite in Sutomore, Montenegro'
      rating={4.76}
      description='On the beach'
      date='May 1-6'
      price={45}
    />
     <Card  
      img='https://a0.muscache.com/im/pictures/miso/Hosting-50108946/original/3b80a621-1fa5-45cc-ad6f-411c9792390e.jpeg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-50108946/original/0221f63a-365d-436b-9d57-26a6cf9a7854.png?im_w=720'
      favorite='Superhost'
      title='Entire cabin in Lipovska Bistrica, Montenegro'
      rating={4.95}
      description='45 km away from the beach'
      date='April 14-19'
      price={45}
    />
     <Card  
      img='https://a0.muscache.com/im/pictures/6f6cbea9-0b7e-4685-9643-aae21746c763.jpg?im_w=1200'
      hoverImg='https://a0.muscache.com/im/pictures/b3db29b0-a4f8-4fef-ae5d-fc964161b8b6.jpg?im_w=720'
      title='Entire home in Danilovgrad, Montenegro'
      rating={4.93}
      description='78 km away from the beach'
      date='April 1-6'
      price={64}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/miso/Hosting-1050684708757085181/original/b1a8f7bd-86f1-450f-85d4-08edb404f352.jpeg?im_w=720'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-1050684708757085181/original/045fa81f-d5d1-4626-abd3-586393ace88b.jpeg?im_w=720'
      favorite='Guest favorite'
      title='Entire rental unit in Bečići, Montenegro'
      rating={4.64}
      description='On the beach'
      date='May 25-30'
      price={94}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/miso/Hosting-635890285006479618/original/c2fb97ca-f06f-4a1a-96eb-672409c1ea36.jpeg?im_w=1200'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-635890285006479618/original/425b17b2-87e1-4e65-b1af-810383948863.jpeg?im_w=720'
      title='Entire rental unit in Herceg Novi, Montenegro'
      rating={4.86}
      description='On the beach'
      date='April 12-17'
      price={97}
    />
    <Card  
      img='https://a0.muscache.com/im/pictures/28b55feb-a829-4f21-9686-3ac315f1e33f.jpg?im_w=1200'
      hoverImg='https://a0.muscache.com/im/pictures/miso/Hosting-52072555/original/211b67ee-97a2-4ba4-96ed-ebbb07fed157.jpeg?im_w=720'
      favorite='Superhost'
      title='Entire cabin in Donja Brezna, Montenegro'
      rating={4.99}
      description='62 km away from the beach'
      date='April 5-10'
      price={60}
    />
    </div>
  </div>
  )
}

export default App
