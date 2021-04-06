---
templateKey: blog-post
title: Adding days to a date using Vanilla JS
date: 2020-04-20T15:32:06.404Z
description: >-
  This is a short post about how we can manage a common situation with our
  propper implementation.
tags:
  - javascript
  - dates
  - vanila js
---
Despite the JavaScript `Date` warts, it’s straightforward to add days to a date in JavaScript.

> Today we have a ton of libraries and external modules to work with dates. It's overwhelming!

While it would be very easy to reach for `moment.js` or another date manipulation library (`date-fns`, `luxon`, `dayjs`) to do something as simple as adding days to a Date in JavaScript, writing a short helper function might just be easier.

## A utility function that creates a Date copy

```javascript
function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

const date = new Date();
const newDate = addDays(date, 10);
```

## Mutating the Date directly

```javascript
const date = new Date();
date.setDate(date.getDate() + 10);
```

## Gotchas and examples
This actually works as expected, eg. the month rolls over.

```javascript
const d = new Date('2019-04-14');

const monthRollsOver = addDays(myDate, 31);
console.log(monthsRollOver)
// 2019-05-15
```

Of course, if you’re already using a data manipulation library elsewhere in your code, you should leverage that since you’re already paying the download/parse cost.

