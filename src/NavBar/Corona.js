import React from 'react'
import Content from './content'
import corona from '../Images/corona.jpg'
function Corona() {
  return (
    <div>
        <Content
        head="Corona Updates"
        imgsrc={corona}
        para="The recent spike in Covid-19 cases in South and Central Asia has shone a harsh light on the 
        lack of medical infrastructure for mountain communities. Tens of thousands of people in the Hindu 
        Kush Himalayan region have been displaced in the name of development, but they have not benefitted. 
        Infrastructure is costlier to build in the mountains, which is why healthcare infrastructure – in 
        particular – should have been a priority. Unfortunately, the 250 million people living in these areas 
        are poorer than their counterparts at lower altitudes. This means that their concerns are often ignored 
        in policymaking. Few recent events have exposed this neglect as much as the Covid-19 pandemic.
        The disconnect between the government and the people all over the Himalayas has become stark in the 
        current Covid-19 wave. Across the region, the authorities’ default option has been to impose lockdowns 
        with varying degrees of severity. They ignore the hardship this forces on people dependent on lorries 
        carrying food, fuel and other necessities up the mountain roads. Worse, these methods are likely 
        ineffective in controlling the spread of the virus. People live in close proximity, and they depend 
        on social networks for their daily needs. With no alternative arrangements provided by governments, 
        people are more likely to break the rules if the alternative option is to starve."
        />
    </div>
  )
}

export default Corona