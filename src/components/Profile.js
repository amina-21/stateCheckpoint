import React, { Component } from 'react'

export class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    componentDidMount = () => {
        console.log("componentDidMount()")
        setInterval(() => {
          this.setState({ count: this.state.count+1 });
      }, 1000)
      }
    render() {
        return (
            <div>
            <h3>
                {this.props.person.fullName}
            </h3>
            <p>
                {this.props.person.bio}
            </p>
            <img src={this.props.person.imgSrc} alt={this.props.person.fullName} style={{height:300}}/>
            <p>
                {this.props.person.profession}
            </p>
            <p>
                {`times the component did mount ${this.state.count}`}
            </p>
            
            </div>
        )
    }
}

export default Profile
