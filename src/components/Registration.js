import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import {Redirect} from 'react-router-dom';


class Registration extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      mobile: '',
      isregisterd : false
   }
}

    onChangeHandler = (e) => {

         this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
      if(window.token){
        this.setState({isregisterd:true});
       }
     }

    onSubmitHandler = (e) => {
    	 e.preventDefault();
       window.axios.post('http://localhost/test/api/register', { fname: this.state.fname,lname:this.state.lname,email:this.state.email, password: this.state.password,mobile: this.state.mobile })
            .then(response => {

       localStorage.setItem('token', response.data.auth.access_token)
                
        });
    	 
    }

	render(){

    if(this.state.isregisterd){
              return <Redirect to='/login'  />
            }

		return (
			 
		<Container className="App">
        <h2>Registration Form</h2>
        <Form className="form" onSubmit={this.onSubmitHandler} >
          <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="mobile">Mobile Number</Label>
              <Input
                type="mobile"
                name="mobile"
                id="mobile"
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

export default Registration;