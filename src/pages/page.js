import React from 'react'
import ImportingCard from "../components/importing-card"
import Dennebos1 from "../images/Dennebos 1.jpg"
import Dennebos2 from "../images/Dennebos 2.jpg"
import Dennebos3 from "../images/Dennebos 3.jpg"

const Imagepage = () => (
        <div>
            <ImportingCard cardText="Prop Test" supplierLink="https://codesandbox.io/s/4z64wyqnn9/" supplierLinkText="link" closeUp1={Dennebos1} closeUp2={Dennebos2} closeUp3={Dennebos3}/>
        </div>
)

export default Imagepage