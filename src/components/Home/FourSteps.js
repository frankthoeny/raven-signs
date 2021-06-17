import React from 'react';
import ReactDOM from 'react-dom';

const FourSteps = (props) => {
  return(
  <div className="card cards__ipad-pro-portrait" style={{width:`29.75rem`}}>
     <div className="card-body">
        <h2 className="content-border-box-header">4 Steps And You're Done!</h2>
        <ol>
           <li>LOGIN to your private homepage using your username & password.</li>
           <li>Select from the Sign Setters Services menu.</li>
           <li>Complete Request Form & Submit.</li>
          <li>Print a confirmation for your records.</li>
        </ol>
     </div>
   </div>
 )
}
export default FourSteps
