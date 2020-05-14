import React from 'react';
export const InputComponent = React.forwardRef((props,ref)=>{
    return(
        <div>
          <input type="text" ref={ref}/>
        </div>
    )
})