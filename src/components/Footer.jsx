import clsx from "clsx";
import Style from './Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className={clsx(Style.InProgress, Style.Footer)}>
                <div className={clsx(Style.InProgressIcon)}>
                    <i class="fa-duotone fa-triangle-exclamation"></i>
                </div>
                <div className={clsx(Style.InProgressText)}>
                    <h4>THIS WEBSITE IS UNDER DEVELOPMENT!!!</h4>
                    <p>You can contribute at <a href="//github.com/michioxd/mash1r0-web" target="_blank">my GitHub repository</a>!</p>
                </div>
            </div>
            <div className={clsx(Style.Footer)}>
                <div className={clsx(Style.FooterText)} >
                    <p>&copy; 2022 <b>mash1r0</b> powered</p>
                    <p className={clsx(Style.FooterTextSubtitle)}>from <b>michioxd</b> with love :3 / built via  <a href="https://vitejs.dev/" target={'_blank'}>Vite</a> + <a href="https://reactjs.org/" target={'_blank'}>React</a></p>
                </div>
                <div className={clsx(Style.FooterSocial)}>
                    <a href="//github.com/michioxd" target='_blank'><i className="fa-brands fa-github"></i></a>
                    <a href="//facebook.com/michioxd" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    <a href="//twitter.com/michioxd" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </>
    )
}