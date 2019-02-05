import React, {Component} from 'react';
class TempleteThree extends Component {
    render() {
        return (
            <div className="paragraph_container">
                <div className="para_main">
                    <div className="head_heart">
                        <h1>What Wavelengths of Light are the Best for Photobiomodulation (PBM)?</h1>
                    </div>
                    <p>
                        As opposed to white light, which contains a broad range of wavelengths, laser light has a
                        specific wavelength. The unit used to measure <a href="#">wavelength is nanometer (nm)</a>. Much research has
                        been done to investigate how melanin, blood, fat and water absorb light and this has lead
                        researchers to define a window or range of wavelengths through which light can penetrate
                        biological tissue. This window is referred to as the optical or therapeutic window. Typically
                        plots of the optical window are shown on a log scale, which deceptively maximizes peaks below 1
                        and minimizes peaks greater than 1, shown in Figure 1. Plotting on a log scale allows for a wide
                        range of intensities to be plotted. However, the log representation of the data can be
                        misinterpreted, for example, looking at the absorption values from the plot, you can see that
                        below 1000 nm, the absorbance of water is less than 0.5.</p>

                    <div className="banner_main">
                        <div className="container custom_div">
                            <div className="banner_container">
                                <div className="background-first">
                                    <button className="btn button_product banner_gray">
                                        <div className="button_icon "><p> EXPAND IMAGE: FIGURE 1<i
                                            className="	fa fa-plus lite_gray" data-toggle="modal" data-target="#myModal15"> </i></p></div>
                                    </button>
                                </div>
                                <div className="text_container"><p><a href="#">From Hamblin MR, Demidova TN. Mechanisms of low level
                                    light therapy. extends Proc. of SPIE Photonics. 2006; 6140: 614001-01-12. doi:
                                    10.1117/12.646294</a></p></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="seven-p-t">
                    <p>
                        The differences in the water absorption are better viewed on a linear plot.  Figure 2, shows a plot of the water absorption on a
                        linear scale. The lower plot is a magnification of the region between 450 nm and 1400 nm. There is a small peak at 980, but it
                        goes up to a maximum of 0.4. The absorption is dominated by melanin in the skin. Both 810 nm and 980 nm are in the “optical window”
                        where the absorption by other chromophores is minimized. Both of these wavelengths are in the therapeutic or optical window and are
                        effective for laser therapy. Since melanin absorption dominates at lower wavelengths, 980 nm is better for maximal penetration for
                        skin with melanin.</p>
                        <p><a href="#"> Pegasus’s CTO, Luis DeTaboada</a>, has also done modeling of the penetration depth of the various wavelengths of
                        laser to compare them.</p>
                    <h1>Figure 2:</h1>
                    </div>
                    <div className="banner_main">
                        <div className="container custom_div">
                            <div className="banner_container">
                                <div className="background-second">
                                    <button className="btn button_product banner_gray">
                                        <div className="button_icon "><p> EXPAND IMAGE: FIGURE 2<i
                                            className="	fa fa-plus lite_gray" data-toggle="modal" data-target="#myModal16"> </i></p></div>
                                    </button>
                                </div>
                                <div className="text_container"><p><a href="#">Data generated from
                                    Hale and Querry. Optical constants of water in the 200 nm to 200 μm wavelength
                                    region. Appl. Opt. 1973; 12: 555-563</a>.</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="seven-p-t">
                    <h1>Figure 3:</h1>
                    <p>A plot of the various absorption coefficients as a function of wavelength on a linear scale. This shows the dominance of
                        melanin absorption compared to hemoglobin, oxyhemoglobin, water and fat.  Generally, red light (600 nm to 700 nm) can be
                        used to treat the conditions near the surface of the skin, but light in the 800 nm to 1000 nm is needed to reach deeper
                        tissue structures.</p>
                    </div>
                    <div className="banner_main">
                        <div className="container custom_div">
                            <div className="banner_container">
                                <div className="background-third">
                                    <button className="btn button_product banner_gray">
                                        <div className="button_icon "><p> EXPAND IMAGE: FIGURE 3<i
                                            className="	fa fa-plus lite_gray" data-toggle="modal" data-target="#myModal17"> </i></p></div>
                                    </button>
                                </div>
                                <div className="text_container"><p>Linear plot of Absorption Coefficient vs. Wavelength. Data for the absorption coefficients
                                    were obtained from <a href="#">Oregon Medical Laser Center</a>.</p></div>
                            </div>
                        </div>
                        <p>The main components in the tissue that absorb light are: melanin, oxyhemoglobin, deoxyhemoglobin, fat, and water. Melanin
                            absorbs light strongly in the lower wavelengths, so dark skin will absorb more light, especially the wavelengths from 500
                            nm to 800 nm. Wavelengths longer than 1200 nm are readily absorbed by water. Lasers with these longer wavelengths are typically
                            used in ablative procedures such as surgery or skin resurfacing. Current understanding of photobiomodulation that light in the
                            wavelength range of 800 nm to 1000 nm is capable of penetrating the skin and surface tissue and reaching the muscle below. Pegasus
                            lasers typically emit a blend of 810 nm and 980 nm light. For treatment selections of dark skin (and/or dark fur), the laser
                            will automatically shift to all 980 nm light; thus minimizing the amount absorbed by melanin.</p>
                        <div></div>
                    </div>
                </div>
                {/*********MODAL FOR POPUP IMAGE 1********      */}
                <div className="container">
                    {/*<!-- The Modal -->*/}
                    <div className="modal fade" id="myModal15">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content modal-content-small">
                                {/*<!-- Modal Header -->*/}
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/*<!-- Modal body -->*/}
                                <div className="modal-body">
                                    <img src="https://rs-cms.s3.amazonaws.com/pics/bScZPrvJQTf9Biz0.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*********MODAL FOR POPUP IMAGE 2********      */}
                <div className="container">
                    {/*<!-- The Modal -->*/}
                    <div className="modal fade" id="myModal16">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content modal-content-small">
                                {/*<!-- Modal Header -->*/}
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/*<!-- Modal body -->*/}
                                <div className="modal-body">
                                    <img src="https://litecure-assets.s3.amazonaws.com/images/1532359054.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*********MODAL FOR POPUP IMAGE 3********      */}
                <div className="container">
                    {/*<!-- The Modal -->*/}
                    <div className="modal fade" id="myModal17">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content modal-content-small">
                                {/*<!-- Modal Header -->*/}
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/*<!-- Modal body -->*/}
                                <div className="modal-body">
                                    <img src="http://www.litecure.com/wp-content/uploads/2016/04/Linear-Scale.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default TempleteThree;