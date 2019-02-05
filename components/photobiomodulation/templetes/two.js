import React, {Component} from 'react';
class TempleteTwo extends Component {
    render() {
        return (
            <div className="paragraph_container">
                <div className="para_main">
                    <div className="head_heart">
                        <h1>Reaching Target Tissue</h1>
                    </div>
                    <p>
                        For PBM to occur, light needs to reach the mitochondria of the damaged target tissue. Laser therapy is applied to the surface
                        of the skin. The best clinical results are achieved when a sufficient amount of light (number of photons) reaches the target
                        tissue.  There are a number of factors that can help maximize the light that reaches the target tissue.  These include:</p>
                    <p><a href="#">proper wavelength selection</a>,<a href="#"> sufficient laser power</a>,<a href="#"> reducing reflections</a>,
                        and<a href="#"> minimizing absorption by molecules not involved in photobiomodulation</a>.</p>
                </div>
            </div>
        )
    }
}
export default TempleteTwo;