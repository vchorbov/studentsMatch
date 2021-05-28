import "../styles/device.min.css"
import "../styles/globals.css"
import "../styles/authenticate.css"
import "bootstrap/dist/css/bootstrap.css"

function MyApp({Component, pageProps}) {
    return (
        /*Device frame from https://github.com/kimolalekan/react-device-frame*/
        <div className={"device-wrapper"}>

            <div className="marvel-device iphone-x">
                {/*comment in to enable notch*/}
                {/*<div className="notch">*/}
                {/*    <div className="camera"></div>*/}
                {/*    <div className="speaker"></div>*/}
                {/*</div>*/}
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="bottom-bar"></div>
                <div className="volume"></div>
                <div className="overflow">
                    <div className="shadow shadow--tr"></div>
                    <div className="shadow shadow--tl"></div>
                    <div className="shadow shadow--br"></div>
                    <div className="shadow shadow--bl"></div>
                </div>
                <div className="inner-shadow"></div>
                <div className="screen">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>

    )
}

export default MyApp
