/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Wouter Hisschemoller</span>
          <span className={s.spacer}>·</span>
          <span className={s.text}>2018</span>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="http://www.hisschemoller.com">
            www.hisschemoller.com
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
