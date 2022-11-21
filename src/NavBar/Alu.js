import React from 'react'
import Content from './content'
import alu from '../Images/aalu.jpg'
function Alu() {
  return (
    <div>
        <Content
        head="Alu kauli ko tarkari"
        imgsrc={alu}
        para="Nepali cuisine has always relied heavily on locally grown produce and grains due the lack of infrastructure and outside trade until only recently. 
        Most households do not store fruits and vegetables, since they are bought fresh every day at 
        vegetable markets. While asparagus is considered the king of vegetables in Nepal, cauliflower is 
        also one of its most beloved, especially in north central Nepal. Similar to its Indian counterpart, 
        aloo gobi, alu kauli ko tarkari (potato and cauliflower curry) is a staple dish in Nepal.
        In Nepal, curried vegetables are traditionally served with dhal and/or rice. While the preparation 
        is simple, there are hundreds of variations, and the components are often cooked separately to 
        ensure that the texture remains consistent. You might find a spartan version at Lali Guras, on 
        76th Street, or a more filling version nearby at Himalayan Yak.
        "
        />
    </div>
  )
}

export default Alu