import React from "react";
import classes from '../../UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";


const Blog = () => {
    const style = {
        color: "white",
    };
    return (
      <div>
        <nav className={classes.Navbar}>
            <Link style={style} to="/">
                <h3 className={classes.title}>PsychHelp</h3>
            </Link>

        </nav>

        <div class="container mt-5 blogs">
          <div class="row">
            <div class="col-md-12">
              <h3 class="mt-3">Blogs</h3>
            </div>
          </div>
          <div class="row">
            <div class="card m-4 blog" style="width: 18rem;">
              <!--<h5 class="card-header">Featured</h5>-->
              <img src="https://www.spring.org.uk/images/woman_glasses-1-1.jpg" class="card-img-top" alt="...">

              <div class="card-body">
                <h5 class="card-title">5 Signs Of High Emotional Intelligence</h5>
                <p class="card-text">There are five signs of emotional intelligence, according to one model developed by
                  Daniel Goleman...
                </p>
                <a href="https://www.spring.org.uk/2020/06/5-signs-of-high-emotional-intelligence.php" class="card-link">Read
                  More</a>
              </div>
            </div>
            <div class="card m-4 blog" style="width: 18rem;">
              <img src="https://www.spring.org.uk/images/woman_glasses-1-1.jpg" class="card-img-top" alt="...">

              <div class="card-body">
                <h5 class="card-title">5 Signs Of High Emotional Intelligence</h5>
                <p class="card-text">There are five signs of emotional intelligence, according to one model developed by
                  Daniel Goleman...
                </p>
                <a href="https://www.spring.org.uk/2020/06/5-signs-of-high-emotional-intelligence.php" class="card-link">Read
                  More</a>
              </div>
            </div>
            <div class="card m-4 blog" style="width: 18rem;">
              <img src="https://www.spring.org.uk/images/woman_glasses-1-1.jpg" class="card-img-top" alt="...">

              <div class="card-body">
                <h5 class="card-title">5 Signs Of High Emotional Intelligence</h5>
                <p class="card-text">There are five signs of emotional intelligence, according to one model developed by
                  Daniel Goleman...
                </p>
                <a href="https://www.spring.org.uk/2020/06/5-signs-of-high-emotional-intelligence.php" class="card-link">Read
                  More</a>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

expost default Blog;
