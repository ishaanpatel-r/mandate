// 
// importies
import React, { useState } from "react"
// 
// frame for cashfree webpage
const MandateFormFrame = (props) => {
    // 
    // automation script
    let script = `
    function getInputsByValue(value) {
        var allInputs = document.getElementsByTagName("input");
        var results = [];
        for(var x=0;x<allInputs.length;x++)
            if(allInputs[x].value == value)
                results.push(allInputs[x]);
        return results;
    }

    function formFill() {
        // getInputsByValue('debitCard')[0].checked=true;
        alert(getInputsByValue('debitCard'))
        // document.querySelectorAll('input[value="debitCard"]').checked = true;
        // document.getElementById('bankId').value=${props.bankName};
        // document.getElementById('inputAccountNumber').value=${props.accountNumber};
        // document.getElementById('inputAccountHolder').value=${props.accountHolder};
        // document.getElementById('emand-agree').checked = true;
        if(window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage('filled form')
        }
    }
    formFill();
    `
    function formFill() {
        console.log(document.getElementById('adad').contentWindow.document)
        // document.querySelectorAll('input[value="debitCard"]').checked = true;
        // document.getElementById('bankId').value=props.bankName;
        // document.getElementById('inputAccountNumber').value=props.accountNumber;
        // document.getElementById('inputAccountHolder').value=props.accountHolder;
        // document.getElementById('emand-agree').checked = true;
    }
    // 
    // 
    
    return (<></>)
    // return (<iframe
    //     id="adad"
    //     src={props.mandateLink} 
    //     onLoad={formFill}
    //     style={{position:'fixed', top:0, left:0, bottom:0, right:0, width:'100%', height:'100%', 
    //     border:'none', margin:0, padding:0, overflow:'hidden', zIndex:99999}}></iframe>)
}

export default MandateFormFrame