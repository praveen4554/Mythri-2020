import React from 'react';
import pluralize from 'pluralize';

function Information(props){
    var duration = pluralize('day',parseInt(props.duration));
    
    return (
      <div className="WorkspaceInformation">
        <div className="WorkspaceName">{props.name}</div>
        <div className="WorkspacePrice">
          <div className="Price">{props.price} $</div>
          <div className="Duration">/ {duration}</div>
        </div>
      </div>
    );
}


function Meta(props){
    var people = pluralize('person',props.people);
  
    return (
      <div className="WorkspaceMeta">
        <div className="Description"><strong>Getting Online Has Never Been Easier</strong></div>  
        <div className="Dates"><strong>Surf, Stream or Share From Millions Of WIFI Hotspots</strong></div>
      </div>
    );
}

export { Information, Meta };