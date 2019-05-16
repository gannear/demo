import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {Redirect} from 'react-router-dom';


class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          email: props.email,
          password: '',
          loggedIn:false,
       }
    }

      componentDidMount() {
      if(window.token){
        this.setState({loggedIn:true});
       }
     }

     onChangeHandler = (e) => {

           this.setState({ [e.target.name]: e.target.value });
      }

      onSubmitHandler = (e) => {
       this.setState({loggedIn:true})
       e.preventDefault();

       window.axios.post('http://localhost/test/api/login',{email:this.state.email,password:this.state.password})
      .then(response=>{
         console.log(response);

         this.setState({loggedIn:true});

         localStorage.setItem('token',response.data.auth.access_token)
         
      }

	render(){
    if(this.state.isloggedin){
              return <Redirect to='/profile'  />
    
            }

		return (
			 
		<Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.onSubmitHandler}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value ={this.state.email}
                onChange={this.onChangeHandler}
            
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.onChangeHandler}
                 
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
			 
			)
	}
}

export default Login;