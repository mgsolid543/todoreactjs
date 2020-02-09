import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
    render() {
        let indonesia = require('moment/locale/id');
        Moment.updateLocale('id', indonesia);

        return(
            <p align="center">
            <div>
            <i class="fa fa-coffee"></i>
                <h3>Aplikasi Aktivitas Harian</h3>
                    <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
            </p>
        );
    }
}
export default Header;