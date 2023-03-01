import React from "react";
import Card from "./Card";
import Header from "./Header";
import Testimonial from "./Testimonial";

function HomePage() {
    return (
        <main>
            <Header/>
            <section className="section1">
                <div className="leftDiv">
                    <h2>This week's specials !</h2>
                </div>
                <div className="rightDiv">
                    <button type="button">Online Menu</button>
                </div>
                <div className="cards">
                    <Card url={require('./images/greek salad.jpg')} title="Greek Salad" price="$12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                    <Card url={require('./images/bruchetta.jpg')} title="Bruchetta" price="$5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
                    <Card url={require('./images/lemon dessert.jpg')} title="Lemon Dessert" price="$5.00" description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
                </div>
            </section>


            <div className="testimonials">
                <h2 className="heading">Testimonials</h2>
                <div className="body">
                    <Testimonial name="Brad" rating="4.5" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/800px-Brad_Pitt_2019_by_Glenn_Francis.jpg" review="This was good." />
                    <Testimonial name="Angelina" rating="5" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Under_Secretary_Zeya_Meets_With_UNHCR_Special_Envoy_Jolie_%2851942861677%29_%28cropped%29.jpg/800px-Under_Secretary_Zeya_Meets_With_UNHCR_Special_Envoy_Jolie_%2851942861677%29_%28cropped%29.jpg" review="I loved it." />
                    <Testimonial name="Leo" rating="4" url="https://upload.wikimedia.org/wikipedia/commons/2/25/Leonardo_DiCaprio_2014.jpg" review="This is my favorite now." />
                    <Testimonial name="Anne" rating="4.5" url="https://upload.wikimedia.org/wikipedia/commons/b/b3/Anne_Hathaway_for_AHC.png" review="Highly recommended." />
                </div>
            </div>


            <section className="about">
                <h1 className="aboutHeading">Little Lemon</h1>
                <h3 className="aboutSubHeading">Chicago</h3>
                <p className="aboutText">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <div className="aboutImages">
                    <img className="imageB" src={require('./images/Mario and Adrian B.jpg')} alt="Mario and Adrian B" width="150" height="200" />
                    <img className="imageA" src={require('./images/Mario and Adrian A.jpg')} alt="Mario and Adrian A" width="150" height="200" />

                </div>

            </section>
        </main>
        
    );
}

export default HomePage;