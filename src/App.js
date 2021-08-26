import React, { Component } from 'react'
import myPic from './profile_pic.jpg'
import Profile from './components/Profile'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      person:{
        fullName:"Amina KCHAOU",
        bio: "Coding Enthusiast",
        imgSrc: myPic,
        profession: "Student"
        },
    isShow: false,
    count:0
    }
  }
  toggle = () => {
    this.setState({isShow:!this.state.isShow})
    
  }
  
  componentDidMount = () => {
    console.log("componentDidMount()")
  //   setInterval(() => {
  //     this.setState({ count: this.state.count+1 });
  // }, 1000)
  }

  render() {
    return (
      <div>
        <h1>Profile info</h1>
        <button onClick={this.toggle}>{this.state.isShow ? "Hide Profile" : "Show Profile"}</button>
        {
          
          this.state.isShow === true ? <Profile person={this.state.person}/> : "\n click the button to show the profile"
        }
        {/* <p>
          {`times the component did mount ${this.componentDidMount()}`}
        </p> */}
        
      </div>
    )
  }
}

export default App

