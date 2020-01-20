import React, { Component } from "react"
import Layout from "../layouts/index"
import addToMailchimp from 'gatsby-plugin-mailchimp';

import "./css/example.css"

class MailchimpForm extends Component {
  // We need to set the state for each form input
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        lastname: '',
        loading: 'slept',
        submit: false,
        mailchimpResponse: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  } 

  // function for email validation
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleChange(event) {
    const value = event.target.name.replace('your-', '');
    this.setState({[value]: event.target.value});
  }

  // We get and set the form data
  handleSubmit = event => {
    event.preventDefault();
    const s = this.state 

    this.setState({submit: true});

    let validName = false, validLastname = false, validEmail = false

    if(s.name.length > 3){ validName = true }
    if(s.lastname.length > 3){ validLastname = true }
    if(this.validateEmail(s.email)) { validEmail = true; this.setState({verifiedEmail: true}); }

    if(validName && validEmail && validLastname){
        this.setState({loading: 'loading'});

        const listFields = {
            FNAME: s.name,
            LNAME: s.lastname
        }
        const email = s.email

        addToMailchimp(email, listFields).then(data => {
            if(data.result === 'success'){
                this.setState({
                    loading: 'success',
                    mailchimpResponse: data.msg,
                });
            }else{
                this.setState({
                    loading: 'failed',
                    mailchimpResponse: data.msg,
                });
            }
        })

    }
  }

  render() {
    // we destructure the variables from the state
    const {loading, submit, name, email, lastname, mailchimpResponse} = this.state

    return (
      <Layout>
        <div className="async__call form__post">
          <div className="container__base">
            <h1 className="centered__text">Form post + Contact Form 7 plugin</h1>
            
            <p className="centered__text">Please fill up the fields to enabled the sent button</p>
                <form className={'async__form'} >
                <hr></hr>
                  <p>This form it's only for testing purpose, emails subscribed to this list will be deleted</p>
                  <label htmlFor="your-name">Your name</label>
                  <input type="text"  className={submit === true ? name.length > 3 ? '' : 'error__field' : ''} 
                  value={name} onChange={this.handleChange}  id="your-name" name="your-name" required />
                  <div className="validation__message">
                    { submit === true ? name.length > 3 ? '' : <p><small>Please add your name</small></p> : '' }
                  </div>

                  <label htmlFor="your-lastname">Your last name</label>
                  <input type="text"  className={submit === true ? lastname.length > 3 ? '' : 'error__field' : ''} 
                  value={lastname} onChange={this.handleChange}  id="your-lastname" name="your-lastname" required />
                  <div className="validation__message">
                    { submit === true ? lastname.length > 3 ? '' : <p><small>Please add your last name</small></p> : '' }
                  </div>
                
                  <label htmlFor="your-email">Your email</label>
                  <input type="text"  className={submit === true ? email.length > 3 ? '' : 'error__field' : ''} 
                  value={email} onChange={this.handleChange}  id="your-email" name="your-email" required />
                  <div className="validation__message">
                    { submit === true ? email.length > 3 ? '' : <p><small>Please add your email</small></p> : '' }
                  </div>

                  <button type="submit" onClick={this.handleSubmit} >Subscribe!</button>
                  <div className={loading !== 'loading' ? 'hidden__element' : `loading__status ${loading}`}  >
                    {
                      loading === 'loading' ? <p>We are sending your data to mailchimp</p> : ''
                    }
                  </div>
                  <div className={mailchimpResponse ? `loading__status ${loading}` : 'hidden__element'}>
                    {
                       <p dangerouslySetInnerHTML={{__html: mailchimpResponse}}/>
                    }
                  </div>
                </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MailchimpForm
