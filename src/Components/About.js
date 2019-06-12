import React, { Component } from 'react';
const FileDownload = require('js-file-download');
const axios = require('axios');
class About extends Component {


  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic = "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;


      var styles = {

          textAlign: 'center',
        }
    }
      function downloadFile()
      {
          axios({
              url: '/documents/misheba_alfred_cv.pdf',
              method: 'GET',
              responseType: 'blob', // important
          }).then((response) => {

              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'Misheba_Alfred_CV.pdf');
              document.body.appendChild(link);
              link.click();
          });}



    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Misheba Alfred Profile Picture" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href onClick = {downloadFile} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>

      </div>

          <p  style={styles} >
              <a className="scrolldown" className="smoothscroll" href="#resume"><i className="icon-down-circle"></i>  </a>

              <a className="smoothscroll"  href="#home"><i className="icon-up-circle"></i></a>
          </p>

   </section>

    );
  }
}

export default About;
