import React, { Component } from 'react';
import toastr from 'toastr'
import * as emailjs from 'emailjs-com'
import 'jquery'
import {validate} from "@babel/types";

class Contact extends Component {



  render() {

    if(this.props.data){
      var namee = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var emaill = this.props.data.email;
      var message = this.props.data.contactmessage;


    }
      this.state ={
            name: '',
            email:'',
           subject: '',
           message: '',
          errors: {
              name: '',
              email:'',
              subject: '',
              message: '',

          }
      }


       function handleInputChange  (e) {
    e.preventDefault()
     const target = e.target
     const name = target.name
     const value = target.value
     this.setState({[name]: value})
 };

function validateMail (){
     let errors ={}
     let formIsValid =true

     if (!this.state.name || this.state.name.length<3)
     { errors.name ='Type something readable'
         formIsValid =false
     }
     if (!this.state.subject || this.state.subject.length<3)
     { errors.subject ='Type something readable'
         formIsValid =false
     }
     if (!this.state.message || this.state.message.length<10)
     { errors.message ='Type something readable'
         formIsValid =false
     }
     if (!this.state.email || this.state.email.length<3)
     { errors.email ='Type some mail please'
         formIsValid =false
     }
     let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     if (!pattern.tes(this.state.email))
     {
         errors.email ='This is not a valid email'
         formIsValid =false
     }
     this.setState(
         {
             errors:errors
         }
     )
     return formIsValid
 };
    function sentMessage(e)
      {
          e.preventDafault  ()
              if (!this.validateMail()) {
                  return
              }
          var templateParams =
              {
                  from_name : this.state.name +'(' +this.state.email +')',
                  to_name: {emaill},
                  subject:this.state.subject,
                  message_html :this.state.message
              }
    emailjs.send('gmail', 'template', templateParams,'')
        .then(function (response) {
            toastr.success('Message Sent.Bravooh!')
            console.log('SUCCESS!',response.status,response.text)
        },
            function (err) {
             toastr.error(err)
                console.log(err)

            }

        )
          this.setState(
              {
                  name: '',
                  email: '',
                  subject: '',
                  message : ''
              }
          )
      }
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Drop Me a Line!.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

                <form action="" method="post" id="contactForm" name="contactForm">
                    <fieldset>

                        <div>
                            <label htmlFor="contactName">Name <span className="required">*</span></label>
                            <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                            <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="contactSubject">Subject</label>
                            <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                            <textarea cols="40" rows="10" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                            <button className="submit">Submit</button>
                            <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                        </div>
                    </fieldset>
                </form>

                <div id="message-warning"> Error Please Please Try Again </div>
                <div id="message-success">
                    <i className="fa fa-check"></i>Your message has been Recieved, Thank you!<br />
                </div>
            </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone Contact</h4>
					   <p className="address">
                           Name:  <span> {namee} </span> <br />
						  Adress:  {zip} <br/>
						 Street:  {street} <br />
						   City:  {city} - {state} <br />
						  Phone:   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title"> </h4>
                  <ul id="twitter">
                     <li>
                        <span>

                        <a href="#"></a>
                        </span>
                        <b><a href="#"> </a></b>
                     </li>
                     <li>
                        <span>

                        <a href="#"></a>
                        </span>
                        <b><a href="#"></a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>

   </section>
    );
  }
}

export default Contact;
