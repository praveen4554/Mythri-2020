import React from 'react';
import * as Workspace from './WorkspaceComponents';

var createReactClass = require('create-react-class');
var ImagePreview = createReactClass({
  render: function() {
    return (
      <div className="ImagePreview" style={{'backgroundImage': 'url('+ this.props.image +')'}}>
        <div className="WorkspaceOverview">
          <Workspace.Information name="XFINITY WIFI" price={this.props.price} duration="1" />
          <Workspace.Meta people={this.props.people} />
        </div>
      </div>
    );
  }
});
export default ImagePreview;