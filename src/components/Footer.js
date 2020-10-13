import React, {Component} from 'react';
import '../../css/common/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className={'container-footer'}>
                <ul>
                    <li>
                        <i className={'fab fa-twitter-square fa-2x'}
                           onClick={(event) => {event.preventDefault(); window.open("https://twitter.com/@fatih_sayilir");}}
                        />
                    </li>
                    <li>
                        <i className={'fab fa-instagram-square fa-2x'}
                           onClick={(event) => {event.preventDefault(); window.open("https://www.instagram.com/fatihsay/");}}
                        />
                    </li>
                    <li>
                        <i className={'fab fa-linkedin fa-2x'}
                           onClick={(event) => {event.preventDefault(); window.open("https://linkedin.com/in/fatih-sayilir-32bb91135");}}
                        />
                    </li>
                    <li>
                        <i className={'fab fa-github-square fa-2x'}
                           onClick={(event) => {event.preventDefault(); window.open("https://github.com/fatsay/");}}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;
