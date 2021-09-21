import React,{useState,useEffect} from 'react'
import Book from '../components/Book'
import Header from '../components/Header'
import Preview from '../components/Preview'


const Init=()=>{

    const [web, setWeb] = useState({})
    const writeWeb=(code)=>{
        if(code!==null){
            setWeb(code)
           // console.log(web)
            
        }
        else{
            console.log("efe")
        }
    }

    
    document.title='Your Project'
    return(
        <div>
            <Header/>
            <Book getCode={writeWeb} webGloba={web}/>
            <Preview web={web}/>

        </div>
    )
}
export default Init