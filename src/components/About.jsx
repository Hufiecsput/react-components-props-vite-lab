function AboutSection({image, about}) {
    return (

         <aside>
        <>
       
        <img src = {image} alt = "blog logo"/>

        <p>{about}</p>
       
        </>
        </aside>

    );
}

export default AboutSection;