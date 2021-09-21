import React from 'react';



const Preview=({web})=>{


    const createWeb=()=>{
        return {__html:`
            <style>
                ${web.css}
            </style>
            <main>
                ${web.html}
            </main>
            <script>
                ${web.js}
            </script>
        `}
        }


    return(
      <div>
        
        <div className="preview" dangerouslySetInnerHTML={createWeb()} >
        </div>
      </div>
    );
}
export default Preview;