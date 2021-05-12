import React, { Component } from 'react'

export default class Model extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ];

    renderGlasses = ()=>{
        return this.arrProduct.map((glass,index) => {
            return <div className="col-2 my-5" key={index}>
                    <img className="w-100 border border-dark p-1" src={glass.url} onClick={()=> {this.xemChiTiet(glass)}}/>
                </div>
        });
    }

    xemChiTiet = (sanPhamClick) => {
        console.log('Sản phẩm click ',sanPhamClick);
        this.setState({
            sanPhamChiTiet : sanPhamClick
        });
    }

    state = {
        sanPhamChiTiet: { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    }

    render() {
        let {name, desc, url} = this.state.sanPhamChiTiet;
        return (
            <div className="container-fluid row">
                <div className="col-4 my-5 position-relative" style={{
                    marginLeft:300
                }}> 
                    <img src='./glassesImage/model.jpg' style={{width: 300}}/>
                    <div className="position-absolute" style={{left:82, top: 95}}>
                        <img src={url} alt={name} width={170}/>
                    </div>
                    <div className="position-absolute bg-warning p-2" style={{opacity:0.65, bottom:0, left:15, height:120,width: 300}}>
                        <p className="text-primary font-weight-bold">{name}</p>
                        <p className="text-white font-weight-bold">{desc}</p>
                    </div>
                </div>
                <div className="col-4 my-5" style={{
                    marginLeft:160
                }}>
                    <img src='./glassesImage/model.jpg' style={{width: 300}}/>
                </div>
                <div className="container mt-5 bg-white position-relative">
                    <div className="row bg-white ">
                        {this.renderGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}
