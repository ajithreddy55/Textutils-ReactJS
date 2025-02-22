import React, {useState} from 'react'

export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })


    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'black':'white',
    }

  return (
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042723'}}>
        <h3>About Us</h3>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={myStyle}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count and etc.
        </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        
        <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={myStyle}>
        Textutils is free character counter tool that provides insatnt character ciount and word count statistics for a given text. Textutils reports the number of words and characters, thus it is suitable for writing text wit word/character limit. 
        </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as chrome, firefox, internet explorer, safari, opera.c It suits to count characters in fb, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
        </div>
        </div>
        {/* <div className="container my-3">
             <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
       
        </div>
  )
}
