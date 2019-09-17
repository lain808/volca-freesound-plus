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

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={s.root}>
        <span>
          Current Available Tags: ambiance+ ambience+ ambient+ atmosphere+
          background+ bass+ beat+ bell+ bird+ birds+ car+ cars+ cinematic+ city+
          click+ close+ computer+ creepy+ crowd+ dance+ dark+ digital+ door+
          drone+ drum+ drums+ effect+ electric+ electro+ electronic+ engine+
          female+ field+ field-recording+ film+ foley+ footsteps+ forest+ fx+
          game+ girl+ glass+ glitch+ guitar+ hit+ horror+ house+ human+ impact+
          industrial+ kick+ kitchen+ loop+ machine+ male+ metal+ metallic+
          motor+ music+ nature+ night+ noise+ open+ opening+ owi+ paper+ people+
          percussion+ piano+ plastic+ processed+ rain+ recording+ reverb+
          sample+ scary+ sci-fi+ sfx+ sound+ soundscape+ space+ spooky+ stereo+
          storm+ street+ synth+ synthesizer+ techno+ thunder+ traffic+ train+
          vocal+ voice+ walking+ water+ weather+ weird+ wind+ woman+ wood+
        </span>
        <span className={s.name}>© Wouter Hisschemoller, 2018</span>
        <a className={s.link} href="http://www.hisschemoller.com">
          www.hisschemoller.com
        </a>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
