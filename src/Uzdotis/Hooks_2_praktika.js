import React, {useState} from 'react';

function Kortele() {
    const [likeN,setLikeN]=useState(0)
    const [unlikeN,setUnLikeN]=useState(0)
  return (   
    <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src="https://www.efoto.lt/files/images/67008/_MG_7804.preview.jpg" />
                <div className="card-body">
                    <h5 className="card-title">Katinas</h5>
                  <p className="card-text"> 
                  Sedincio katino notrauka </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" class="btn btn-danger"onClick={()=>setLikeN(likeN+1)}>like({likeN})</button>
                    <button type="button" class="btn btn-danger"onClick={()=>setUnLikeN(unlikeN+1)}>Unlike({unlikeN})</button>
                    <button type="button" class="btn btn-danger"onClick={()=>{setUnLikeN(0); setLikeN(0)}}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Kortele;
