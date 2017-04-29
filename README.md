# phonenumber-country-lookup
Take a phone number with full international dialling codes, and return its city + area

## About
Using publicly available [telephone number datasets](https://www.aggdata.com/free/international-calling-codes) and restructuring them a little to reduce search time, the geographic registered location of a telephone number can be provided without querying other servers.


Coupled with [jackocnr](https://github.com/jackocnr)'s [custom build](https://github.com/jackocnr/intl-tel-input/blob/master/src/js/utils.js) of [libphonenumber](https://github.com/googlei18n/libphonenumber/tree/master/javascript), some cool stuff is possible.

_NOTE: No number validation is performed - only best effort lookups against what is provided. If validation, formatting, etc is what you want, please look at [jackocnr](https://github.com/jackocnr)'s work or [libphonenumber](https://github.com/googlei18n/libphonenumber/tree/master/javascript)_

The lookup script is less than 1k (minified), and the number datasets are around 637k.

## Demo
Clone the repo and launch demo.html in your browser!

## License
GNU GPLv3

Copyright (c) 2017 [Lucep](https://lucep.com)
