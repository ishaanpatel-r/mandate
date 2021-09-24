// 
// importies
import React, { useState } from "react"
import MainScreen from "../MainScreen"
// 
// wrapper to loop over params
const Wrapper = () => {
    // 
    // fetch all accounts from query params on link
    // http://localhost:3000/?accounts=12,542,2125&phoneNumber=2182341
    const query = new URLSearchParams(window.location.search);
    const account = query.get('accounts').split(',')[0]
    const phoneNumber = query.get('phoneNumber')
    // 
    // 
    return (<MainScreen phoneNumber={phoneNumber} account={account} />)
}

export default Wrapper