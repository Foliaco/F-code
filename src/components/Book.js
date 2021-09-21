import React,{useState} from 'react';
const Book=({getCode,webGloba})=>{

     const [script, setScript] = useState(null)
     const [html, setHtml] = useState("<!-- Wreite your code here -->")
     const [css, setCss] = useState("/*Wreite your code here */")
     const [js, setJs] = useState("/*Wreite your code here */")


     const writeCode=()=>{
       setScript({
         html,
         css,
         js
       })
       getCode(script)
     }

    return(
      <>
    <div className="book d-flex">
      
        <div className="block-content" >
            <div className="doc">
                <h3>HTML</h3>
            </div>
            <div className="block">
                <textarea rows='1' value={html} onChange={(e)=>{
                  setHtml(e.target.value)
                  writeCode()
                }} id="html" >

                </textarea>
            </div>
        </div>
 
        <div className="block-content" >
            <div className="doc">
                <h3>CSS</h3>
            </div>
            <div className="block">
                <textarea rows='1' value={css} onChange={(e)=>{
                  setCss(e.target.value)
                writeCode();
              }
                } id="css">

                </textarea>
            </div>
        </div>
   
        <div className="block-content" >
            <div className="doc">
                <h3>JavaScrip</h3>
            </div>
            <div className="block">
                <textarea rows='1' value={js} onChange={(e)=>{
                  setJs(e.target.value)
                  writeCode()
                }} id="js" >

                </textarea>
            </div>
        </div>
    </div>
      </>
    );
}
export default Book;