# Scroll Snapping
CSS Scroll snapping is available in IOS 9 and Chrome and makes it easy to create a slider control to replace ion-slider for simple scenarios.

Check out `tab1.page.html` to see a horizontal slider which uses the following css for its container:
```css
.container {
    display: flex;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    scroll-behavior: smooth;
}
```

Each item in the container requires the `scroll-snap-align` set:
```css
.card {
    scroll-snap-align: start;
    ...
```

> Note: iOS 14.x (Fixed in iOS 15) has an issue with CSS scroll snapping: In the example the container with `scroll-snap-type` will reset its scroll position to 0 when it is redisplayed after visiting the `card` page.
