import React from "react";
import AboutGrid from "./AboutGrid";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-introduction">
          <h2 className="about-heading">Introduction</h2>
          <div className="divider-container">
            <div className="line"></div>
            <div className="middle"></div>
            <div className="line"></div>
          </div>
          <div className="about-underline"></div>
          <p>
            Indian Institute of Technology Delhi is one of the 23 IITs created
            to be Centres of Excellence for training, research and development
            in science, engineering, and technology in India.
          </p>
          <p>
            Established as College of Engineering in 1961, the Institute was
            later declared as an Institution of National Importance under the
            “Institutes of Technology (Amendment) Act, 1963” and was renamed as
            “Indian Institute of Technology Delhi”. It was then accorded the
            status of a Deemed University with powers to decide its own academic
            policy, to conduct its own examinations, and to award its own
            degrees.
          </p>
          <p>
            Since its inception, over 60,000 have graduated from IIT Delhi in
            various disciplines including Engineering, Physical Sciences,
            Management and Humanities & Social Sciences. Of these, nearly 5,070
            received Ph.D. degrees. The number of students who graduated with
            B.Tech. degree is over 15,738. The rest obtained Master’s Degree in
            Engineering, Sciences and Business Administration. These alumni
            today work as scientists, technologists, business managers, and
            entrepreneurs. There are several alumni who have moved away from
            their original disciplines and have taken to administrative
            services, active politics or are with NGOs. In doing so, they have
            contributed significantly to building of this nation, and to
            industrialization around the world.
          </p>
        </div>

        <AboutGrid />
        <div className="about-introduction">
          <h2 className="about-heading">History</h2>
          <div className="history-divider-container">
            <div className="history-line"></div>
            <div className="history-middle"></div>
            <div className="history-line"></div>
          </div>
          <div className="about-underline"></div>
          <p>
            The concept of the IITs was first introduced in a report in the year
            1945 by Sh. N.M.Sircar, then member of Education on Vicerory’s
            Executive Council. Following his recommendations, the first Indian
            Institute of Technology was established in the year 1950 in
            Kharagpur. In his report, Shri Sircar had suggested that such
            Institutes should also be started in different parts of the country.
            The Government having accepted these recommendations of the Sircar
            Committee decided to establish more Institutes of Technology with
            the assistance of friendly countries who were prepared to help. The
            first offer of help came from USSR who agreed to collaborate in the
            establishment of an Institute through UNESCO at Bombay. This was
            followed by the Institutes of Technology at Madras, Kanpur and Delhi
            with collaborations with West Germany, USA and UK respectively.
            Indian Institute of Technology, Guwahati was established in 1995 and
            the University of Roorkee was converted into an IIT in 2001.
          </p>
          <p>
            The Government of India negotiated with the British Government for
            collaboration in setting up an Institute of Technology at Delhi. The
            British Government agreed in principle to such a collaboration, but
            were inclined initially to start in a modest way. It was therefore
            agreed that a College of Engineering & Technology should be
            established at Delhi with their assistance. A trust called the Delhi
            Engineering College Trust was established with the help of the UK
            Government and the Federation of British Industries in London. Later
            H.R.H. Prince Philips, Duke of Edinburgh, during his visit to India,
            laid the foundation stone of the College at Hauz Khas on January
            28,1959
          </p>
          <p>
            The College of Engineering & Technology was registered as a Society
            on 14th June 1960 under the Societies Registration Act No. XXI of
            1860 (Registration No.S1663 of 1960-61). The first admissions were
            made in 1961. The students were asked to report at the College on
            16th August 1961 and the College was formally inaugurated on 17th of
            August 1961 by Prof. Humayun Kabir, Minister of Scientific Research
            & Cultural Affairs. The College was affiliated to the University of
            Delhi.
          </p>
          <p>
            According to Section 4 of the Act, each of the Institutes shall be a
            body corporate having perpetual succession and a common seal and
            shall, by its name, sue and be sued. The body corporate constituting
            each of the Institutes, shall consist of a Chairman, a Director and
            other members of the Board for the time being of the Institute. IIT
            Delhi is an autonomous statutory organisation functioning in terms
            of the Institutes of Technology Act, 1961 amended vide the
            Institutes of Technology (Amendment) Act, 1963 and the Statutes
            framed thereunder. Responsibility for the general superintendence,
            direction and control of the affairs of the Institute is vested in
            the Board of Governors. The Board of Governors functions through its
            Standing Committees - Finance Committee, Building & Works Committee
            and such other adhoc committees which are constituted by it from
            time to time to consider specific issues. The control and general
            regulation for the maintenance of standards of instruction,
            education and examination in the Institute vests in the Senate. The
            Senate is responsible for formulation of the academic policies and
            to design curricula, the courses of studies and the system of
            examination. The Senate functions through its Standing
            Boards/Committees and Sub-committees that may be constituted by it
            to look into the specific matters arising from time to time.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
