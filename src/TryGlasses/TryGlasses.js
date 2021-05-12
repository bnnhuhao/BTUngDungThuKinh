import React, { Component } from 'react'
import Model from './Model'

export default class TryGlasses extends Component {
    render() {
        return (
            <div className="position-relative" style={{
                backgroundImage:`url('./glassesImage/background.jpg')`,
                height:1000,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'}}>
                <div className="w-100 bg-dark position-absolute" style={{
                    opacity:0.2,
                    height:1000,
                    top:0,
                    left:0
                }}></div>
                <h2 className="bg-dark text-white text-center" style={{
                    opacity:0.85,
                    padding:25
                }}>TRY GLASSES APP ONLINE</h2> 
                 <Model/>
            </div>
        )
    }
}
