import React, { Component,  Fragment } from 'react'

export default class HeaderDefault extends Component {
  constructor(props) {
    super(props)
    document.title = this.props.title;
  }
    
  render() {
    return (
      <div>
        <nav class="navbar navbar-default " role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Todo</a>
          </div>
        </nav>
         
         <div class="container">
            {this.props.children}
         </div>
         </div>
    )
  }
}

