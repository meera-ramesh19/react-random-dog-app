import { Component } from "react";

class Dog extends Component {
  constructor() {
    super();
    this.state = {
      dogURL:'',
    };
  }

  //fetcha new url and update the component state
  updateDogURL =() =>{
    console.log('updating the dog url');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response)=> response.json())
    .then((data)=>{
      if (data.status==='success'){
      this.setState({dogURL:data.message})
    }
    })
  }

  componentDidMount(){
    //run some code that fetches api data and throw in the mounting 
    this.updateDogURL();
  }
  render() {
    //we can write this instead of conditional rendering in line 40
    // let tag=''
    // if(this.state.dogURL){
    //   tag=<img src={this.state.dogURL} alt='dogimage'/>
    // }
    //figure out current url 
    return (
      <article>
        <p>IMAGE PLACEHOLDER</p>
        {/* // {tag}
        // or the REACTWAy
        //if (this.state.dogURL is an empty string it is a falsy it ignores but if it has some value then the right hand side is evaluated and given the right side valueof && (short-circuit)) */}
        {this.state.dogURL && <img src={this.state.dogURL} alt='dogimage'/>}

        <button onClick={this.updateDogURL}>Load new Dog</button>
      </article>
    );
  }
}

export default Dog;
