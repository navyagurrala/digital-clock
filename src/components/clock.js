
import React, { useState } from "react"

function Digitalclock(){
    const {date , setdate}=useState(new Date())
    return(
<>
<div className="container">
    <h1>hello</h1>
    {/* <div className="hour"></div>
    <div className="min"></div>
    <div className="sec"></div>
    <div className="number number1"><p>1</p></div>
    <div className="number number2"><p>2</p></div>
    <div className="number number3"><p>3</p></div>
    <div className="number number4"><p>4</p></div>
    <div className="number number5"><p>5</p></div>
    <div className="number number6"><p>6</p></div>
    <div className="number number7"><p>7</p></div>
    <div className="number number8"><p>8</p></div>
    <div className="number number9"><p>9</p></div>
    <div className="number number10"><p>10</p></div> */}
    </div>
</>
    )
}

export default Digitalclock