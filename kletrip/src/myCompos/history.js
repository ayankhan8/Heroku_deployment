import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function history() {
    return (
        <div>
            <div style={{backgroundColor:"black",color:"gold", fontSize : "40px", paddingLeft : "500px"}}>OUR HISTORY</div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://gdurl.com/9ovf"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div style={{backgroundColor:"black",color:"gold"}}>
                        <h1>1916 The Begnning</h1>
                        <p style={{backgroundColor:"beige",color:"black", fontSize : "25px"}}>The dawn of 13th November 1916 heralded a new chapter in the education history of North Karnataka. Seven highly educated and like minded souls "The Saptarishi" come together to conceive and establish the KLE society.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://gdurl.com/g3n8"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div style={{backgroundColor:"black",color:"gold"}}>
                    <h1>1946 The Donor</h1>
                    <p style={{backgroundColor:"beige",color:"black", fontVariant : "bold"}}>It was a long time wish of the society to have its own technical institute which was amiss in this part of the country. It was on the ay of Lingayat Jayanti in the year 946 that this idea got its patron in the form of Shriman B. V. Bhoomaraddi who offered Rs. 2,00,000 as personal donation which led to the first polytechnic college in the region of Gadag which was then relocated to Hubli into a full-fledged engineering college from 1948. 
948.</p></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://gdurl.com/8Fh6"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div style={{backgroundColor:"black",color:"gold"}}>
                    <h3>1947 The Expansion</h3>
                    <p style={{backgroundColor:"beige",color:"black", fontVariant : "bold"}}>BVBCET expanded his campus by constructing world maker producers, most prestigious and oldest department Civil Engineering department.</p></div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
