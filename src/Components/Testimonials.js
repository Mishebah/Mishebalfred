import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
        var styles = {

            textAlign: 'center',
        }
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
          <p  style={styles} >
              <a className="scrolldown" className="smoothscroll" href="#contact"><i className="icon-down-circle"></i>  </a>

              <a className="smoothscroll"  href="#portfolio"><i className="icon-up-circle"></i></a>
          </p>
   </section>
    );
  }
}

export default Testimonials;
