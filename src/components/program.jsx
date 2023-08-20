import { useState } from "react";
import activities from "../data1";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Program = () => {
    const [index, setIndex] = useState(0);
    const{ image, title, description} = activities[index];

    const prevBtn = () => {
        setIndex((currentIndex) =>{
            const newIndex = currentIndex - 1;
            return(checkNumber(newIndex));
        })
    }

    const nextBtn = () => {
        setIndex((currentIndex) =>{
            const newIndex = currentIndex + 1;
            return(checkNumber(newIndex));
        })
    }

    const checkNumber = (number) =>{
        if(number > activities.length - 1){
            return 0;
        }
        if(number < 0){
            return activities.length - 1;
        }
        return number;
    }

    return (
        <article>
            <div className="programContainer">
                <h1>Our Program. <span className="desc1">Take a look at our program</span></h1>
            </div>
            <div className="our-program">
                <div className="about-prog">
                    <p>In our NGO, we embark on a comprehensive mission to uplift the lives of the elderly through companionship, nurture the potential of orphans with mentorship, alleviate hunger via monthly ration distributions, provide essential medical aid to underserved communities, and ensure warmth and comfort through blanket drives. Our diverse initiatives stand as a testament to our unwavering dedication to compassion, creating a tapestry of hope where the aged are cherished, orphans are empowered, the hungry are nourished, the ailing find solace, and the cold find warmth, all weaving together a brighter and more inclusive tomorrow.!</p>
                </div>

                <aside className="about-progslides">
                    <h3>{title}</h3>
                    <img src={image} alt={title} />
                    <p>{description}</p>
                    <div className="toggle-btns">
                        <button type="button" onClick={prevBtn}className="prev-btn"><FaChevronLeft /></button><button type="button" onClick={nextBtn} className="next-btn"><FaChevronRight /></button>
                    </div>
                </aside>
            </div>
        </article>
    )
}

export default Program;