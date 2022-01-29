import React from 'react'
import './styles/home.css'

export default function home() {
    return (
        <>
            <section className ="header">
                <div className="text-box">
                    <h1>KLE TECHNOLOGICAL UNIVERSITY</h1>
                </div>   
            </section>
            <section className = "course">
                <h1>ABOUT US</h1>
                <p> KLE Technological University (KLE Tech) has its roots in B. V. Bhoomaraddi College of Engineering and Technology, Hubli (BVB), one of the premier engineering institutions of Karnataka. The founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an institution that would lay the foundation of modern engineering education in northern region of Karnataka.</p>
                <div className="row">
                    <div className="course-col">
                        <h3>EMERGENCE</h3>
                        <p>KLE Technological University (KLE Tech) has its roots in one of the premier engineering institutions of Karnataka, B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious engineering college in Hubli. The founding organization KLE Society, Belgaum, established BVB college in 1947 with an aspiration of creating an institution that would lay the foundation of modern engineering education in northern region of Karnataka. Over the years, it evolved to reach and hold a unique position of pride in the technical education system of India. As we entered into the 21st century, the college undertook comprehensive reform process to adapt to the challenging global engineering education scenario. In pursuit of academic excellence, the college attained academic autonomy from University Grant Commission (UGC) in the year 2007. As an autonomous the college, BVB established its distinctive character in the academic space through its curriculum and outstanding student experience. </p>
                    </div>
                    <div className="course-col">
                        <h3>CAMPUS LIFE</h3>
                        <p>KLE Technological University is committed to providing every student with full potential in capability and skill enhancement in Personality development, technical skills, and technical fields.  University arranges many programs yearly in this regard.  The below tables give the particulars of different categories of such programs conducted & the title of the programs </p>
                    </div>
                    <div className="course-col">
                        <h3>RESEARCH HIGHLIGHTS</h3>
                        <p> Nano additives in diesel ,Biofeul and its application for internal combustion engines, Nanocomposites for structural applications </p>
                    </div>
                </div>
            </section>
        </>
    )
}
