/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React, {Component} from 'react';


class Folder extends Component {

    handleClick(folder) {
        folder.isCollapsed = !folder.isCollapsed;
        this.props.rerenderTree();

    }
    render() {


    
        return (
            <li className= {"folder-item " + (this.props.folder.isCollapsed ?
                            this.props.folder.isCollapsed : 'false')}
                onClick={this.handleClick.bind(this,this.props.folder)}
            >
                {this.props.folder.name}
            </li>

        );
      
    }
}

export default Folder;