import React, {Component} from 'react'
import Photo from './pic.jpg';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Home Yo</h1>
                <img src={Photo} alt='kyle-face' />
            </div>
        )
    }
}
export default Home