import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{
	constructor(){
		super();
		this.state = {
			name:"Welcome to Avatar world"
		}
	}
	namechange(){
		this.setState({
			name:"hello oecians"

		})
	}
	render(){
	const avaratlistarray =[
	    {
	    	id:1,
		    name:"Rahul Raj",
		    company:"DXC"
	    },
	    {
	    	id:2,
	 	    name:"Ashish Das",
		    company:"wipro"
	    },
	    {
	    	id:3,
		    name:"Rupesh",
		    company:"Icici"
	    },
	    {
	    	id:4,
		    name:"Choubey",
		    company:"wipro"
	    },
	];

	const arrayavaratcard = avaratlistarray.map( (avatarcard,i) => {
		return (
			<Avatarlist
			    key={i}
		        id = {avatarcard.name}
		        name={avatarcard.name}
		        company={avatarcard.company}
		    />
		);

	})
	return (
		    <div className="mainpage">
		    <h1>{this.state.name}</h1> 
		    {arrayavaratcard}
	        <button onClick ={ () => this.namechange()}> Subscribe </button>
		     <h1>Welcome to Avatar World</h1>
		     	
	       </div>
	       );
	}
}
export default Avatar;	       