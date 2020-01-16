import React, { Component } from "react"
import Layout from "../layouts/index"
import axios from "axios"
import Reaptcha from 'reaptcha';

import "./css/async-call.css"

class AsyncPage extends Component {
  // We need to set the state for each form input
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      food: 'Pizza',
      loading: 'slept',
      verified: false // <-- Recaptcha state
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
      this.setState({food: event.target.value});
    }
  }
  onVerify = recaptchaResponse => {
    this.setState({
      verified: true
    });
  };
  // We get and set the form data
  handleSubmit = async event => {
    event.preventDefault();
    const state = this.state; 

    // We activate the loading status
    this.setState({loading: 'loading'});

    // We create the form data wrapper
    const form = new FormData()

    form.set('your-name', state.name)
    form.set('your-email', state.email)
    form.set('your-subject', state.subject)
    form.set('your-message', state.message)
    form.set('your-food', state.food)

    axios.post('https://gatsby.raxo.dev/wp-json/contact-form-7/v1/contact-forms/77/feedback', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(response => {
        this.setState({loading: 'success'});
    }).catch(err => {
        this.setState({loading: 'failed'});
    })
  }

  render() {
    const {loading} = this.state

    return (
      <Layout>
        <div className="async__call form__post">
          <div className="container__base">
            <h1 className="centered__text">Form post + Contact Form 7 plugin</h1>
                <form className={'async__form'}>
                  <Reaptcha sitekey="6LejEdAUAAAAANgpcIfcR1PzCbWYmPiiF1GbFcxs" onVerify={this.onVerify} />
                  <label htmlFor="your-name">Your name and last name</label>
                  <input type="text" value={this.state.name} onChange={this.handleChange}  id="your-name" name="your-name" required />
                  <label htmlFor="your-email">Email address</label>
                  <input type="text" value={this.state.email} onChange={this.handleChange} id="your-email" name="your-email" required />
                  <label htmlFor="your-food">Your favorite food</label>
                  <select type="text" value={this.state.food} onChange={this.handleChange} id="your-food" name="your-food" required >
                    <option value="Pizza" >Pizza</option>
                    <option value="Hamburguer">Hamburguer</option>
                    <option value="Lassagna">Lassagna</option>
                    <option value="Salad">Salad</option>
                    <option value="I am a vampire...">I am a vampire...</option>
                  </select>
                  <label htmlFor="your-subject">Subject</label>
                  <input type="text" value={this.state.subject} onChange={this.handleChange} id="your-subject" name="your-subject" required />
                  <label htmlFor="your-message">Your message</label>
                  <textarea value={this.state.message} onChange={this.handleChange} id="your-message" name="your-message" required ></textarea>
                  <button type="submit" onClick={this.handleSubmit} disabled={!this.state.verified} disabled={!this.state.verified}>Send!</button>
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
