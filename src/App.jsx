import React, {Component} from 'react';
import ListFolder from './ListFolder.jsx';
import InputWidget from './inputWidget.jsx';
import * as getters from './getters';
import reactor from './reactor';
import actions from './actions';
import $ from 'jquery';

//import CommentBox from './tutorial1.jsx';
//import {CommentList, CommentForm} from './tutorial2.jsx';
//import {Comment} from './tutorial4.jsx';
//import {CommentList} from './tutorial5.jsx';
//import {Comment, CommentList, CommentForm, CommentBox} from './tutorial6.jsx';


class App extends Component {
    
    handleChange(ev){
        actions.filter({value: ev.target.value});
    }
    
    componentWillMount(){

        const data = reactor.evaluateToJS(getters.data);
        this.setState(data);
    }

    componentDidMount(){
        $.ajax({
            url: '/src/json.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
               actions.fetchProducts(data);
            }.bind(this),
            error: function (err) {
                console.log(err);
            }.bind(this)
        });
        reactor.observe(getters.data, (data) => {
            this.setState(data);
        })
        }


    render() {
      if(this.state.directories.length || this.state.value)
        return (
            <div>
                <h1>Search Bar: React Style</h1>
                <InputWidget handleChange={this.handleChange.bind(this)}  value = {this.state.value} />
                <div className="display">
                    <ul>
                        <ListFolder data={this.state.directories} />
                    </ul>
                </div>

            </div>
        );
        else return(
          <div>
              <h1>Search Bar: React Style</h1>
              <InputWidget handleChange={this.handleChange.bind(this)}  value = {this.state.value} />
              <div className="display">
              LOADING....
              </div>

          </div>
      );

    }
}
export default App;