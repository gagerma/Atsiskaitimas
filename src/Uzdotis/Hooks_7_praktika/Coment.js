import React from "react";
export default function Coment(props){
    const{id, img,  text, status} = props;
        
    let div_status_class = status ? "table-success" : "table-warning";
    let del_btn_status_class = status
    ? "btn btn-success disabled"
    : "btn btn-primary";
    
    return(
        <div className="col-lg-4 text-center shadow-sm text-bg-dark">
         <img className="bd-placeholder-img rounded-circle" src={img} alt="Girl in a jacket" width="140" height="140"/> 

        <h2>{text}</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
      </div>
        
        

    );
}