import React, { useState } from 'react';

export default function Form() {
    const [text, setText] = useState("Enter the values");

    const handleOnChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const handleNumberClick = (number) => () => {
        setText(prevText => prevText + number);
        console.log(text);
    }
    const handleAdd = ()=>{
        setText(prevText => prevText + "+");
    }
    const handleMinus = ()=>{
        setText(prevText => prevText + "-");
    }
    const handleMul = ()=>{
        setText(prevText => prevText + "*");
    }
    const handleDiv = ()=>{
        setText(prevText => prevText + "/");
    }
    const handleAns = ()=>{
        let nums = text.split(/(\+|-|\*|\/)/);
        let num1 = parseInt(nums[0]);
        let op = nums[1];
        let num2 = parseInt(nums[2]);
        //console.log(typeof(num1));
        if(op==="+"){
            setText(num1+num2);
        }
        else if(op==="-"){
            setText(num1-num2);
        }
        else if(op==="*"){
            setText(num1*num2);
        }
        else if(op==="/"){
            setText(num1/num2);
        }
    }
    return (
        <div className='container'>
            <input
                className="form-control form-control-lg"
                value={text}
                type="text"
                aria-label=".form-control-lg example"
                onChange={handleOnChange}
                style={{ marginTop: '5rem' }}
            />
            <div className="position-relative my-5">
                <div className="position-absolute top-0 start-0">
                    <input className="btn btn-primary" type="button" value="0" onClick={handleNumberClick("0")} />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <input className="btn btn-primary" type="button" value="1" onClick={handleNumberClick("1")} />
                </div>
                <div className="position-absolute top-0 end-0">
                    <input className="btn btn-primary" type="button" value="2" onClick={handleNumberClick("2")} />
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="position-relative">
                <div className="position-absolute top-0 start-0">
                    <input className="btn btn-primary" type="button" value="3" onClick={handleNumberClick("3")} />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <input className="btn btn-primary" type="button" value="4" onClick={handleNumberClick("4")} />
                </div>
                <div className="position-absolute top-0 end-0">
                    <input className="btn btn-primary" type="button" value="5" onClick={handleNumberClick("5")} />
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="position-relative">
                <div className="position-absolute top-0 start-0">
                    <input className="btn btn-primary" type="button" value="6" onClick={handleNumberClick("6")} />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <input className="btn btn-primary" type="button" value="7" onClick={handleNumberClick("7")} />
                </div>
                <div className="position-absolute top-0 end-0">
                    <input className="btn btn-primary" type="button" value="8" onClick={handleNumberClick("8")} />
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="position-relative">
                <div className="position-absolute top-0 start-0">
                    <input className="btn btn-primary" type="button" value="+" onClick={handleAdd} />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <input className="btn btn-primary" type="button" value="-" onClick={handleMinus}/>
                </div>
                <div className="position-absolute top-0 end-0">
                    <input className="btn btn-primary" type="button" value="*" onClick={handleMul}/>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="position-relative">
                <div className="position-absolute top-0 start-0">
                    <input className="btn btn-primary" type="button" value="/" onClick={handleDiv}/>
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                    <input className="btn btn-primary" type="button" value="." />
                </div>
                <div className="position-absolute top-0 end-0">
                    <input className="btn btn-primary" type="button" value="Ans" onClick={handleAns}/>
                </div>
            </div>
        </div>
    );
}
