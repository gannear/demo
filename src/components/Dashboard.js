import React from 'react';
const  api = "http://localhost/test/api/users";
class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emp : []
			
		}
	}



	componentDidMount = () => {
    	fetch(api)
    	.then(response => response.json())
    	.then(data => {
    		this.setState({
    			emp:data
    		})
    	})
    }

     
	render(props){
		return(
            <>
		   <table border="1">
		   <tr>
		   <th>First Name</th>
		   <th>Last Name</th>
		   <th>Email Address</th>
		   <th>Mobile Number</th>
		    
		   </tr>
		  {props.emp.map((d,index) =>
			   	<tr key={d.id}>
                  <td><a href="#">{d.fname}</a></td> 
                  <td><a href="#">{d.lname}</a></td> 
                  <td><a href="#">{d.email}</a></td> 
                  <td><a href="#">{d.mobile}</a></td> 
                     
                 </tr>
			   	)}
           </table>
		   </>
			);
	}
}
export default Dashboard;