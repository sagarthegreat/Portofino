export default function HeroSection()
{
    return (
        <section className="hero--section--bg">
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Sagar</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">I <s>love</s> live to learn</span>{" "}
                        <br/>
                    </h1>
                    <p className="hero--section-description">
                        Live as if you were to die tomorrow.<br/> Learn as if you were to live forever.<br/>-Mahatma Gandhi
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch :)</button>
            </div>
            <div className="hero--section--img">
                <img src = "./logo512.png" alt ="hsec"/>
            </div>
        </section>
        </section>
    )
}