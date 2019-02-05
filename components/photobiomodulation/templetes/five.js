import React, {Component} from 'react';
class TempleteFive extends Component {
    render() {
        return (
            <div className="paragraph_container">
                <div className="para_main">
                    <div className="head_heart">
                        <h1>Understanding Dosing</h1>
                    </div>
                    <p>
                        Pegasus lasers are not designed for spot treatment. Instead the treatment area is larger than
                        the beam area and the PBM treatment is delivered by scanning the treatment head over the
                        treatment area in a continuous movement. Treatment with Pegasus lasers is non-invasive and it
                        is not possible to measure the dose delivered to the target tissue; it is only possible to
                        measure the <a href="http://www.litecure.com/about-photobiomodulation/photobiomodulation-glossary/">dose delivered to the treatment area.</a></p>
                    <p>
                        However, we do know from cadaver, animal studies, and modeling that the absorption of the laser
                        in the skin and fat layers on its way to the target tissue can significantly reduce the dose
                        that gets to the target tissue. The most prevalent method of indicating <a href="http://www.litecure.com/about-photobiomodulation/photobiomodulation-glossary/">
                         laser therapy dosage</a> is to measure the density of energy applied to the tissue surface. This is typically expressed in
                        J/cm&#xb2;. Some variation in clinical effects can be observed; particularly at very high (>50W) or
                        very low (&lt;1 W) power settings using the same J/cm&#xb2; dose. The measurement technique works well for
                        typical treatment protocols, but is not absolutely ideal. Pegasus Animal Health provides a
                        treatment guide with each device with recommended dosing for different clinical
                        conditions.</p>
                </div>
            </div>
        )
    }
}
export default TempleteFive;