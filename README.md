# Messenger app

A very simple and barebones frontend prototype for a messenger web application.

## Installation

1. Install dependencies using `npm install`
1. Run a development server with `npm run dev`

## Folder structure

* `layout`: Top-level components that are responsible for rendering various parts of the page. State-changing logic is usually on this level.
* `component`: Generally more complex components that handle some business logic, or propagate them to layout elements.
* `ui`: UI "dumb" components that primarily exist for styling purposes.
* `state`: State management logic, including state initialization, context creation, reducer setup, type definitions, etc.
* `img`: Dynamically loaded images (like user avatars). _TODO: might be worth to move these into `public`_
* `helper`: A collection of helper functions.

## Todos

* Tests (snapshot/behavior)
* Eye candy (better color scheme, animations)
* Error handling, error boundary setup (wrong URL, invalid channel name, etc.)
* Welcome screen if no channel is selected
* Cache message input on channel change
* Scroll back down to the most recent message once a message is submitted from the user's end
* Random incoming messages on a set interval (to showcase unread message count)
* Message grouping (only display avatar on first message, subsequent messages from same source can be compacted into a group)
* Visible read receipts
* Read receipt should only trigger if the message is in viewport
