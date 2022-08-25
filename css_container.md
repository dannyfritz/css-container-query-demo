# CSS Container Query

## I Don't Have Much Time and I Want to Know More

- Video [Una Kravitz Container queries - Designing in the Browser](https://youtu.be/gCNMyYr7F6w)

## Prior Art

- Media Queries `@media`
- Flexible Layouts with Grid / Flexbox / Float `display: flex`, `display: grid`, `float: left/right`
- Resize Observer `new ResizeObserver()`

## CSS Container Query

Gives the ability to query on a container size rather than just the viewport size with `@media`.
Can be done with `ResizeObserver` today, but CSS can do it performantly and with better developer ergonomics.

```css
.container {
  container: inline-size / my-container;
}
.container > .card {
  background-color: red;
  height: 200px;
}

@container my-container (insline-width > 700px){
  .card {
    background-color: blue;
  }
}
```
```html
<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

Demo: `npx live-server demo.html`

## Resources

- Docs [MDN Container Query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)
- Docs [CanIUse Container Queries](https://caniuse.com/css-container-queries)
- Docs [CanIUse Container Units](https://caniuse.com/css-container-query-units)
- Article [Use The Right Container Query Syntax](https://www.oddbird.net/2022/08/18/cq-syntax/)
- Article [Understanding and Using the the new CSS style queries](https://blog.logrocket.com/new-css-style-queries/)
- Article [Say Hello to CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)
- Video [Una Kravitz Container queries - Designing in the Browser](https://youtu.be/gCNMyYr7F6w)
- Video [Michelle Barker Creative CSS Layout](https://youtu.be/tueTFd2TQUA?t=1440)