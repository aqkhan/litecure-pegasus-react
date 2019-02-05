import React, {Component} from 'react';
class TempleteSix extends Component {
    render() {
        return (
            <div className="paragraph_container">
                <div className="para_main">
                    <div className="head_heart">
                        <h1>Pulsing and Frequencies</h1>
                    </div>
                    <p>
                        Therapy lasers can pulse in different ways. Generally speaking, therapy lasers that pulse
                        either operate in a superpulsed mode or a gated mode. In superpulsed mode, a large amount of
                        energy is allowed to build up over a period of time, and then released quickly in a single,
                        large burst of energy. Superpulsed lasers produce very brief pulses (on the order of 200 nanoseconds)
                        of high frequency.
                        The pulses have high peak powers (1-50 W) with a much lower average power (such as 60 mW).</p>
                    <p>
                        Photobiomodulation therapy can be delivered in either continuous wave (CW) or pulsed modes.
                        As photobiomodulation therapy has become more popular, manufacturers have made elaborate
                        claims about specific pulsing protocols and application-specific wavelengths. These claims
                        can be misleading and can create confusion. In reality these product-specific bells and
                        whistles are more marketing hype than science. A review  <a href="http://www.litecure.com/references/"> by Hashmi et al.</a> that looked at CW versus pulsed light concluded that more evidence is needed.16 In general, the use of pulsing decreases light delivered to the surface and hence to the target.</p>
                    <p> Pegasus lasers do have the option to be operated in a pulsed mode. In the pulsing mode for
                        Pegasus lasers, the laser is gated: it cycles its CW power on an off and consequently delivers
                        a lower average output power. If you are treating a small region and would like to treat for a
                        longer time at a lower power, then switching to a pulsed mode will <a href="http://www.litecure.com/about-photobiomodulation/importance-of-power/"> decrease the effective power </a> and <a href="http://www.litecure.com/about-photobiomodulation/understanding-dosing/">dose delivered to the target</a> by 50%.</p>
                </div>
            </div>
        )
    }
}
export default TempleteSix;