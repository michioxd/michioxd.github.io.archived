import clsx from 'clsx';
import Style from './Contact.module.css';
import ContactImage from './../assets/contact.png';

export default function Contact() {
    return (
        <div className={clsx(Style.ContactPage)}>
            <img srcSet={ContactImage} className={clsx(Style.ContactImage)} />
            <div className={clsx(Style.ContactMain)}>
                <div>
                    <h2>contact with mashiro</h2>
                    <p>if u want ehe</p>
                </div>
                <br />
                <div>
                    <a href="//github.com/michioxd" target={'_blank'} className={clsx(Style.ContactSocial)}>
                        <div className={clsx(Style.ContactSocialIcon)}>
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <div className={clsx(Style.ContactSocialTitle)}>
                            <h3>GitHub</h3>
                            <p>michioxd</p>
                        </div>
                    </a>
                    <a className={clsx(Style.ContactSocial)}>
                        <div className={clsx(Style.ContactSocialIcon)}>
                            <i className="fa-brands fa-discord"></i>
                        </div>
                        <div className={clsx(Style.ContactSocialTitle)}>
                            <h3>Discord</h3>
                            <p>michioxd#5144</p>
                        </div>
                    </a>
                    <a href="//facebook.com/michioxd" target={'_blank'} className={clsx(Style.ContactSocial)}>
                        <div className={clsx(Style.ContactSocialIcon)}>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className={clsx(Style.ContactSocialTitle)}>
                            <h3>Facebook</h3>
                            <p>michioxd</p>
                        </div>
                    </a>
                    <a href="//twitter.com/michioxd" target={'_blank'} className={clsx(Style.ContactSocial)}>
                        <div className={clsx(Style.ContactSocialIcon)}>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className={clsx(Style.ContactSocialTitle)}>
                            <h3>Twitter</h3>
                            <p>@michioxd</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}