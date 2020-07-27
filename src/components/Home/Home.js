import React from "react";
import Navbar from "../../UI/Navbar/Navbar";
import classes from "./Home.module.css";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import FAQs from "../FAQs";
const Home = () => {



    return (
        <div className={classes.Home}>
            <Navbar />

            {/* <div className="container"> */}
            <div
                className={["row d-flex align-items-center", classes.Home].join(" ")}>
                <div
                    className={[
                        "col-sm-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column",
                        classes.cardColumn, ].join(" ")} >
                    <div>
                        <h2 className={classes.title}>Matching patient <br/> with great doctors</h2><br/>
                    </div>
                    <div className={classes.cardRow}>
                        <div
                            className={["card col-lg-6", classes.cardAlignment].join(' ')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">For Doctors</h5>
                                <p className="card-text">
                                Doctors are persons who prescribe medicines of which they know little, to cure diseases of which they know less, in human beings of whom they know nothing.
                                </p>

                                <Link to="/doctor">
                                <button className="btn btn-primary">
                                   Learn More
                               </button>
                                </Link>

                            </div>
                        </div>
                        <div
            className={["card col-lg-6", classes.cardAlignment].join(' ')}>
                            <div className="card-body">
                                <h5 className="card-title">For Patients</h5>
                                <p className="card-text">
                                A man is a living being and has to rest every now and then both physically and emotionally.It is normal to feel exhausted and have burnout sometimes but feeling so all the time must be avoided because it is counter productive.
                                </p>

                                <Link to="/patient">
                                <button className="btn btn-primary" >
                                    Learn More
                                </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        "col-sm-6 col-md-6 col-sm-12 col-xs-12",
                        classes.imageColumn,
                    ].join(" ")}
                >
                    <img src={hero} alt="Hero" />
                </div>
            </div>


            <FAQs />



        </div>
    );

};
export default Home;
