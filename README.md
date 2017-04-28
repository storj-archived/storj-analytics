[![Coverage Status](https://coveralls.io/repos/github/Storj/storj-analytics/badge.svg?branch=master)](https://coveralls.io/github/Storj/storj-analytics?branch=master)

Wraps the `analytics-node` package to respect do not track headers. Provides a
simple configuration file.

Usage
-----

```javascript
const analytics = require('storj-analytics');

analytics.identify(req.headers.dnt, {
  userId: user.uuid,
  traits: {
    email: user.uuid + '@email.suffix'
    key: value
  }
});

analytics.track(req.headers.dnt, {
  userId: user.uuid,
  event: 'This is an event name',
  properties: {
    key: value,
    key2: value2
  }
})
```

License
-------

Storj Analytics - Analytics module for Storj Services
Copyright (C) 2017 Storj Labs, Inc

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see http://www.gnu.org/licenses/.
