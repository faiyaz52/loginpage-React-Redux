import React from 'react'
import './Login.css';
 class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            usernameError:'',
            passswordError:'',
        };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(event);
        this.setState({ username: '',password: ''});
        if(this.valid());
      }
      valid(){
        const user=this.state.username;
        const pass=this.state.password;
         if(user=='hruday@gmail.com' && pass=='hruday123'){
            this.props.history.push('/App');
         }
         else{
            this.setState({usernameError:"Please enter your email id",passswordError:"Please  enter your Password"});
         }
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      myPassword = (event) => {
        this.setState({password: event.target.value});
      }
      render() {
        return (
                <div>
                  <div className="login_box">
                  	<div className="part_img">
                      <h2 style={{color:"white",textAlign:"center",marginTop:"120px",fontSize:"30px"}}>Welcome</h2>
                      <h2 style={{color:"white",textAlign:"center",marginTop:"10px",fontSize:"20px"}}>Appiness Interactive</h2>
	                  </div>
                  	<div className="part_field">
		                  <content_login id='content_in'>
                        <img src="https://www.appinessworld.com/images/appiness-logo.png" alt="appiness-logo" style={{marginLeft:"70px",marginBottom:"50px"}}/> 
                        <form onSubmit={this.mySubmitHandler}>
                          <input
                            type='text'
                            placeholder='Email Id'
                            onChange={this.myChangeHandler}
                          />
                          <span style={{color:"red",fontSize:"13px"}}>{this.state.usernameError}</span>
                          <input
                              type='password'
                              placeholder='Password'
                              onChange={this.myPassword}
                          />
                          <span style={{color:"red",fontSize:"13px"}}>{this.state.passswordError}</span>
                          <button>Sign in</button>
                        </form>
		                  </content_login>
	                  </div>
                  </div>
                </div>
              );
            }
          }
 export default Login;
