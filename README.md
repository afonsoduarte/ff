# Palace Skateboards front-end home test

Welcome to step 2 of our front-end interview process. We have a small task for you to complete at home, and we expect it to take you about one hour to complete.

Our Timeline component currently displays a big list of events. But users not happy! Timeline does not show in which day the event happened, only the time. Users also need events grouped by day, and want to be able to collapse days they don't care about. Finally, an icon of the product type should be shown next to the event for quick scanning.

We want you to improve the timeline so it looks like this:

```
24 May 2021
⌜ ⌝ Bolt Thrower Shoes created by Bob
⌞ ⌟ 12:10

25 May 2021
⌜ ⌝ Bolt Thrower Shoes updated by Alice
⌞ ⌟ 08:45
⌜ ⌝ Donut Triferg T-Shirt created by Eve
⌞ ⌟ 13:19
⌜ ⌝ Bolt Thrower Shoes updated by Alice
⌞ ⌟ 14:05
```

And here's a visual reference:

![Implementation](test-reference-implementation.png)

In summary, here are the requirements:

1. Group events by day under a header with the date (25 May 2021, etc)
2. Clicking the header should collapse those events
3. Each event should display an icon of the product type next to it (icons provided, look in the imports of the Timeline.tsx file)
4. The Timeline.test.tsx file contains two tests without expectations, make them pass.
