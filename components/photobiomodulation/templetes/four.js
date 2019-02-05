import React, {Component} from 'react';
class TempleteFour extends Component {
    render() {
        return (
            <div className="paragraph_container">
                <div className="para_main">
                    <div className="head_heart">
                        <h1>What is Laser Power and How Does it Affect Photobiomodulation (PBM)?</h1>
                    </div>
                    <p>
                        The laser light energy is measured by the laser power.
                    </p>
                    <p>
                        Power seems simple but simply stating the output power does not relate the whole story when discussing
                        therapy laser treatment. Not only is power important, but also the size of the area that is being treated.
                        Typical <a href="http://www.litecure.com/about-photobiomodulation/photobiomodulation-glossary/">power units for
                        a laser are watts (abbreviated as W)</a>. Power is a measure of the number of photons
                        emitted from the laser each second. Early therapeutic lasers had very low powers (less than 0.5 W)
                        and very small <a href="http://www.litecure.com/about-photobiomodulation/photobiomodulation-glossary/">beam areas (or spot sizes)</a>; consequently, early studies were often disappointing because the
                        low powers were not able to provide sufficient number of photons <a href="http://www.litecure.com/about-photobiomodulation/reaching-target-tissue/">to reach deeper affected tissue</a> .</p>
                    <p>
                        <a href="https://www.fda.gov/radiation-emittingproducts/radiationemittingproductsandprocedures/homebusinessandentertainment/laserproductsandinstruments/default.htm">
                            The Food and Drug Administration (FDA) classifies laser according their output power and recognizes
                            four major classes (I to IV) of lasers</a>, including three subclasses (IIa, IIIa, and IIIb).  In December 2003,
                        the FDA approved the first class IV laser for the relief of minor muscle and joint pain.  In October 2006, LiteCure,
                        Pegasus’s parent company was formed and FDA approval for the LCT-1000 a class IV medical therapy laser was granted in
                        February, 2007.
                        Pegasus therapy lasers are class IV lasers; they have an output power that is greater than 0.5 W.</p>
                    <p>
                        Because class IV lasers have a higher output power, there are some additional safety considerations
                        that should be followed when using a class IV laser. Eye safety is the most important consideration
                        and the laser light should not be directed into an eye.
                        The practitioner and patient should wear approved safety glasses for further protect from inadvertent beam reflections.
                    </p>
                    <p>
                        It is important to note that the Pegasus therapy lasers not only have higher power but also have a larger beam area,
                        making them better capable of <a href="http://www.litecure.com/about-photobiomodulation/understanding-dosing/">delivering therapeutic dose</a> to larger treatment areas.
                    </p>
                    <h1>Why are Higher Powers Needed?</h1>
                    <p>
                        Simply stated the greater the number of photons delivered to the surface, the greater
                        the number of photons at any tissue depth. There is a threshold, a minimum number of photons
                        that are needed to “turn on” the therapeutic effects of laser light. Hundreds of scientific studies
                        have been done <a href="http://www.litecure.com/blog/studies/peripheralnerves/">
                        in vitro and have characterized the dosages needed to achieve a cellular response with light.
                    </a>
                        These studies provide a baseline for the amount of laser energy needed to achieve results at the cellular level.
                        PBM therapy is non-invasive; the light is applied to the surface of the skin. <a href="http://www.litecure.com/about-photobiomodulation/maximize-clinical-results/"> Some of that light is reflected by the skin </a> or absorbed by other chromophores that are not associated with the injured cells and therefore do not
                        contribute to PBM. <a href="http://www.litecure.com/about-photobiomodulation/understanding-dosing/">
                        Sufficient dose needs to be applied </a> to the skin so that despite these losses sufficient dose reaches the skin and PBM occurs at the target tissue.
                    </p>
                    <div className="banner_main">
                        <div className="container custom_div">
                            <div className="banner_container">
                                <div className="background-fourth">
                                    <button className="btn button_product banner_gray">
                                        <div className="button_icon "><p> EXPAND IMAGE: FIGURE 1<i
                                            className="	fa fa-plus lite_gray" data-toggle="modal" data-target="#myModal14"> </i></p></div>
                                    </button>
                                </div>
                                <div className="text_container"><p>The figure illustrates, with infrared images,
                                    the amount of light seen on the back of the hand
                                    when laser light is applied to the palm at 1 watt, 5 watts, and 10 watts of power.</p></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="seven-p-t">
                    <p>
                        The greater the power, the greater the penetration to deeper tissue for a given
                        amount of time.  With the higher powered lasers, it is possible to not only apply
                        the benefits of PBM superficially, but it is also possible to treat a greatly expanded range of conditions
                        by delivering a clinically effective quantity of photons to cells deep within the tissue.
                    </p>
                    </div>
                </div>


                {/*********MODAL FOR POPUP IMAGE 1********      */}
                <div className="container">
                    {/*<!-- The Modal -->*/}
                    <div className="modal fade" id="myModal14">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content modal-content-small">
                                {/*<!-- Modal Header -->*/}
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/*<!-- Modal body -->*/}
                                <div className="modal-body">
                                    <img src="http://www.litecure.com/wp-content/uploads/2016/04/power.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}
export default TempleteFour;