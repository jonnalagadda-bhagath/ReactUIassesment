import React from 'react';
import {UserDetailsFormContext, userDetailsObject} from './user-details-form-context';
import UserDetailsForm from './user-details';
import  '../styles/appBody.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.submitForm = (e) => {
        e.preventDefault();
        this.setState(() => ({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value
        }));
    };

    this.state = {
      firstName: userDetailsObject.firstName,
      lastName: userDetailsObject.lastName,
      load: 'home',
      submitForm: this.submitForm,
    };
    this.loadContent = this.loadContent.bind(this);
  }
  loadContent(e) {
     this.setState((state) => ({
         ...state,
         load: e.target.id
        }));
  }

  render() {
    // The entire state is passed to the provider
    return (
        <>
        <div className='body'>
            <header className='header'>
                <h1>Home/{this.state.load}</h1>
            </header>
            <main>
                <nav className='sideNav'>
                    <ul>
                        <li id='home' className='navItem active' onClick={this.loadContent}>Home</li>
                        <li id='products' className='navItem' onClick={this.loadContent}>Products</li>
                        <li id='settings' className='navItem' onClick={this.loadContent}>Settings</li>
                    </ul>
                </nav>
                <div className='mainContent'>
                    <UserDetailsFormContext.Provider value={this.state}>
                        <Content />
                    </UserDetailsFormContext.Provider>
                </div>
            </main>
        </div> 
        </>
      
    );
  }
}

function Content() {
  return (
      <>
      <div className='home'>
        <UserDetailsFormContext.Consumer>
            {({firstName, lastName, load}) => (
                <div>
                    <h1>This is {load} page</h1>
                    <h1>FirstName : {firstName}</h1>
                    <h1>LastName : {lastName}</h1>
                    <h1>{load === 'settings' && <UserDetailsForm />}</h1>
                </div>
            )}
        </UserDetailsFormContext.Consumer>
      </div>
      </>
  );
}
export default App;