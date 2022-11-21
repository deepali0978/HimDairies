import React from 'react'
import {Link} from 'react-router-dom'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Facts from './Facts'
import '../App.css'
import mount from '../Images/everest.jpg'
import katmandu from '../Images/katmandu.jpg'
import water from '../Images/water.jpg'
import everesthot from '../Images/everesthot.jpg'
import everesthot1 from '../Images/everesthot1.jpg'
import guru from '../Images/gurudongmarlake.jpg'
import roop from '../Images/roopkund1.jpg'
import tiger from '../Images/tiger nest.jpg'
import gangkhar from '../Images/gangkhar.jpg'
import him from '../Images/Himalayas-Mountains.jpg'
import facts from '../Images/facts.jpg'
import trek from '../Images/trek.jpg'
import animals from '../Images/animals.jpg'
function Home() {
  return (
    <>
    <br></br>
    <Link to="/FactsHimalayas">
    <div className='res'>
     <img src={him} height="100%" width="100%"/>
    </div>
    </Link>
    <div className='facts '>
      <div className='a'>
        <Link to="/FactsHimalayas">
      <Card 
      imgsrc={facts}
      
      />
      </Link>
      </div>
      <div className='b'>
        <div className='f1'>
          <Link to="/Trek">
      <Facts
      imgsrc={trek}
     
      />
      </Link>
      </div>
      
      <div className='f2'>
        <Link to="/Animals">
      <Facts
      imgsrc={animals}
      
      />
      </Link>
      </div>
      </div>
    </div>
    <h1 style={{textAlign:'center',fontStyle:'italic'}}>The Latest</h1>
    <div className='latestdiv'>
      <div>
        <Link to='/Corona'>
      <Card1
      imgsrc={mount}
      title=" Coronavirus Updates"
      sname="Updates from Nepal And Everst Base Camp"
      />
      </Link>
      </div>
      <div>
      <Link to='/Hotel'>
      <Card1
      imgsrc={katmandu}
      title="Booking Hotels!"
      sname="What you need to know from Katmandu"
      />
      </Link>
      </div>
      <div>
      <Link to='/Hydration'>
      <Card1
      imgsrc={water}
      title="Hydration in Himalayas"
      sname="A complete Guide"
      />
      </Link>
      </div>
      </div>
      
      
      <h1>History of Himalayas</h1>
      <div className='history'>
      <Link to='/History'>
      <div className='his'>
        <img src="https://assets.airmail.news/static/photos/article/yXszIX8jU56y.jpeg" height="400px"/>
      </div>
      </Link>
      <div style={{border:'2px dotted white',height:'350px',width:'300px'}} className="advertisment">
        Advertisment
      </div>
      </div>
      <br></br>
      <div className='mandh'>
      <div className='m'>
        <h1>Himalayan Mysteries</h1>
        
      <Card2
      imgsrc={guru}
      head="Gurudongmar Lake"
      title="Source of the mighty Teesta river, this high altitude lake is perched on a plateau by the side of Kanchengyao mountain range. Legends have it that the region was once parched, and the lake remained frozen all year.
       If you visit the lake now, even in winters, you will find a tiny spot that stays unfrozen! As for its mystery, the locals believe that Buddhist Guru Padmasambhava, also a renowned tantric, touched the very spot and blessed it to remain unfrozen to make life easy for the people around. 
       "
      />

      <br></br>
      <Card2
      imgsrc={roop}
      head="Roopkund Lake"
      title="One of the most engaging and beautiful treks in Uttarakhand, Roopkund has a lot to its credit including a thrilling mystery. Numerous photos and visitors accounts are evidence that the trek, right near the lake, is littered with humans remains, including skeletons, bones and skulls perched on rocks. While one theory says that the skeletons belong to WWII soldiers, who were struck by a massive hailstone while on the trek, another theory says that these belong to a king’s family, cursed by a Goddess to die this way. 
      Pick one or the other, we will never be sure of this one."
      />
      <br></br>
      <Card2
      imgsrc={tiger}
      head="Tiger’s Nest Monastery"
      title="An essential in every itinerary for Bhutan, this Buddhist monastery on the side of a steep cliff has a story to tell. At the heart of this monastery, lies a cave and the belief that this is where Guru Padmasambhava meditated for three years, three months, three weeks, three days and three hours. The mystery here is its location, a tough climb even in this age. As per the belief, Guru Padmasambhava flew to this spot from Tibet, on the top of a tigress! One look at its precarious location, and the belief might just seem true as well. 
      The monastery, as it looks today, was built at the meditation spot in 1692, a feat nevertheless."
      />
      <br></br>
      <Card2
      imgsrc={gangkhar}
      head="Gangkhar Puensum"
      title="Gangkhar Puensum is famous as the highest, unclimbed mountain in the world. Located in Bhutan, this mountain has been measured several times yet none of the figures match each other. While that might be human inaccuracy, the fact that it stays unclimbed makes it all the more mysterious. 
      The Bhutanese believe it to be home to mythical creatures, including yetis, and Gods as well. After multiple failed attempts to summit it, the mountains has stayed legendary. Cases and accounts of strange happenings, including unexplained noises, mysterious lights, and apparitions have been reported from those living closest to the mountain."
      />
      <br></br>
      
      </div>
      <div className='h'>
       <h1>What's Hot</h1>
      <Card3
      imgsrc={everesthot}
      text="32 Tips for everest BaseCamp Trek"/>
      <br></br> <br></br>
      <Card3
      imgsrc={everesthot1}
      text="Alternate Trekking Routes To Everest Base Camp"/>
      </div>
      </div>
      
    
    </>
  )
}

export default Home