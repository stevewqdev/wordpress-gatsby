import React, { Component } from "react"
import Layout from "../layouts/index"
import axios from "axios"
import Reaptcha from 'reaptcha';

import "./css/example.css"

class AsyncPage extends Component {
  // We need to set the state for each form input
  constructor(props) {
    super(props);
    let startFood = 'Pizza' 
    this.state = {
      name: '',
      email: '',
      food: startFood,
      subject: `Order of ${startFood}!`,
      message: `Hi i would like to place a new order of ${startFood}, can you send me one?`,
      loading: 'slept',
      verified: false, // <-- Recaptcha state
      errorForm: 'error__field',
      submit: false, 
      verifiedEmail: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // We handle the change on each of the form inputs
  handleChange(event) {
    if(event.target.name === 'your-name'){
        this.setState({name: event.target.value});
    }
    if(event.target.name === 'your-email'){
        this.setState({email: event.target.value});
    }
    if(event.target.name === 'your-subject'){
        this.setState({subject: event.target.value});
    }
    if(event.target.name === 'your-message'){
        this.setState({message: event.target.value});
    }
    if(event.target.name === 'your-food'){
      let startFood = event.target.value;
      this.setState({food: event.target.value});
      this.setState({subject: `Order of ${startFood}!`});
      this.setState({message: `Hi i would like to place a new order of ${startFood}, can you send me one?`});
    }
  }

  // Verify the Recaptcha
  onVerify = recaptchaResponse => {
    this.setState({
      verified: true
    });
  };

  // function for email validation
  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  // We get and set the form data
  handleSubmit = async event => {
    event.preventDefault();
    const state = this.state; 
    
    // set the state of the form to submitted
    this.setState({submit: true});
    
    // We create the form data wrapper
    const form = new FormData()

    // Validate the form
    let validName = false, validEmail = false, validSubject = false, validMessage = false

    // check each input to validate them
    if(state.name.length > 3){ validName = true }
    if(this.validateEmail(state.email)) { validEmail = true; this.setState({verifiedEmail: true}); }
    if(state.subject.length > 10){ validSubject = true }
    if(state.message.length > 20){ validMessage = true }

    // if they all pass the validation we continue to send the post request
    if(validName && validEmail && validSubject && validMessage){
      // We activate the loading status
      this.setState({loading: 'loading'});

      // set the key and value for the form response
      form.set('your-name', state.name)
      form.set('your-email', state.email)
      form.set('your-subject', state.subject)
      form.set('your-message', state.message)
      form.set('your-food', state.food)
  
      // we make the post request to the link
      axios.post('https://gatsby.raxo.dev/wp-json/contact-form-7/v1/contact-forms/77/feedback', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(response => {
          this.setState({loading: 'success'});
      }).catch(err => {
          this.setState({loading: 'failed'});
      })
    }else{
      this.setState({loading: 'failed'});
    }
  }

  render() {
    const {loading} = this.state

    return (
      <Layout>
        <div className="async__call form__post">
          <div className="container__base">
            <h1 className="centered__text">Form post + Contact Form 7 plugin</h1>
            <p className="centered__text">Please fill up the fields to enabled the sent button</p>
                <form className={'async__form'}>
                  <label htmlFor="your-name">Your name and last name</label>
                  <input type="text" 
                  className={
                    this.state.submit === true
                    ? this.state.name.length > 3
                      ? ''
                      : <p><small>Please add your name and your last name</small></p>
                    : ''
                  } 
                  value={this.state.name} onChange={this.handleChange}  id="your-name" name="your-name" required />
                  <div className="validation__message">
                    {
                      this.state.submit === true
                      ? this.state.name.length > 3
                        ? ''
                        : <p><small>Please add your name and your last name</small></p>
                      : ''
                    }
                  </div>
                  <label htmlFor="your-email">Email address</label>
                  <input type="text" 
                  className={
                    this.state.submit === true
                    ? this.state.verifiedEmail === true
                      ? ''
                      : <p><small>Please add your email address!</small></p>
                    : ''
                  } 
                  value={this.state.email} onChange={this.handleChange} id="your-email" name="your-email" required />
                  <div className="validation__message">
                    {
                      this.state.submit === true
                      ? this.state.verifiedEmail === true
                        ? ''
                        : <p><small>Please add your email address!</small></p>
                      : ''
                    }
                  </div>
                  <label htmlFor="your-food">Your favorite food</label>
                  <select type="text" value={this.state.food} onChange={this.handleChange} id="your-food" name="your-food" required >
                    <option value="Pizza" >Pizza</option>
                    <option value="Hamburguer">Hamburguer</option>
                    <option value="Lassagna">Lassagna</option>
                    <option value="Salad">Salad</option>
                  </select>
                  <div className="form__box">
                    <label htmlFor="your-subject"><small>Order subject</small></label>
                    <input type="text" className={this.state.subject.length > 0 ? 'passed__field' : 'error__field'} value={this.state.subject} onChange={this.handleChange} id="your-subject" name="your-subject" required disabled/>
                    <div className="validation__message">
                      {
                        this.state.submit === true
                        ? this.state.subject.length > 10
                          ? ''
                          : <p><small>Please don't leave the subject blank!</small></p>
                        : ''
                      }
                    </div>
                    <label htmlFor="your-message"><small>Order description</small></label>
                    <textarea value={this.state.message} className={this.state.message.length > 0 ? 'passed__field' : 'error__field'} onChange={this.handleChange} id="your-message" name="your-message" required disabled></textarea>
                    <div className="validation__message">
                      {
                        this.state.submit === true
                        ? this.state.message.length > 20
                          ? ''
                          : <p><small>Please add a message for the team</small></p>
                        : ''
                      }
                    </div>
                  </div>
                  <hr></hr>
                  <Reaptcha sitekey="6LfFE9AUAAAAAJq5au9qA7-mC3iLPXTyGow9xOwc" onVerify={this.onVerify} />
                  <hr></hr>
                  <button type="submit" onClick={this.handleSubmit} disabled={!this.state.verified}>Send!</button>
                  <div className={'loading__status ' + loading }>
                    {
                      loading === 'loading' ? <p>We are submitting your information</p> : ''
                    }
                    {
                      loading === 'success' ? <p>Your data was sent to our cook!</p> : ''
                    }
                    {
                      loading === 'failed' ? <p>It seems your are not going to eat today</p> : ''
                    }
                  </div>
                </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AsyncPage
