
/* IMPORT */

import {describe} from 'fava';
import mime from '../dist/index.js';
import standard from 'mime/types/standard.js';

/* MAIN */

describe ( 'Mime Standard', it => {

  it ( 'provides the same object as mime/types/standard', t => {

    t.deepEqual ( mime, standard );

  });

});
