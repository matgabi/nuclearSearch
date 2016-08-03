/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React,{Component} from 'react';




class InputWidget extends Component{



   render(){

       return(
          <div className = "widget">
              <input placeholder="Filter"
                     type="text"
                     onKeyUp= {this.props.handleChange}

              />
              <p>{this.props.value ? 'Searching for : ' + this.props.value : null}</p>
          </div>

       );
   }

}

export default InputWidget;