/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React, {Component} from 'react';
class File extends Component{
    render(){
        return(
            <li className="file-item folder-wrapper">{this.props.fileName}</li>
        );
    }
}

export default File;