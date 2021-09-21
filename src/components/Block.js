import React,{useState} from 'react';

const Block=({doctype,color,getScript,webGloba})=>{

    const [code, setCode] = useState({
        doc:doctype,
        script:'//welcome'
    })
    
    const writeCode=({target})=>{
        getScript(doctype,code.script)
        setCode({
            doc:doctype,
            script:target.value
        })
        //webGloba[doctype]=code
        //console.log(webGloba)
    }

    return(
      <>
        <div className="block-content" >
            <div className="doc">
                <h3>{doctype}</h3>
            </div>
            <div className="block">
                <textarea rows='1' id={doctype} onKeyDown={(e)=>writeCode(e)} onKeyDownCapture={(e)=>writeCode(e)} onKeyUp={(e)=>writeCode(e)}>

                </textarea>
            </div>
        </div>
      </>
    );
}
export default Block;