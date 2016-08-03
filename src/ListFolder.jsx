/**
 * Created by gabrielmatasariu on 7/25/2016.
 */
import React, {Component} from 'react';
import Folder from './Folder.jsx';
import File from './File.jsx';
let index = 0;

class ListFolder extends Component {

    render() {
        var lis = [];
        this.props.data.forEach(function (element) {
        
            if (element.type == 'folder') {
                lis.push(<Folder key={element.name+ (++index)}
                                 rerenderTree={this.props.rerenderTree}
                                 folder={element}
                
                />);
            }
            else {
                lis.push(<File fileName={element.name} key={element.name + (++index)}/>);
            }
            if (!element.isCollapsed && element.children)
                lis.push(<ListFolder rerenderTree={this.props.rerenderTree}
                                     data={element.children}
                                     key={'ul--'+ (++index)}
                />);
        }.bind(this));

        return (
            <li>
                <ul className='folder-container'>
                    {lis}
                </ul>
            </li>
        )
    }
}

export default ListFolder;
