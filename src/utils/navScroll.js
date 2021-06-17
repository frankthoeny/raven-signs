export const navbarScroll = (scrollTop) => {
  //console.log(scrollTop);
  return (scrollTop > 100)? ('transparent'):(null)
}

// Compares the top of the window with the value of
// the state this.state.transform
// Usage: ${(this.state.transform > 70)? ('transparent'):(null)}
// Transition, opacity and height styles should be
// put into the Toolbar.scss file.
//console.log(this.state.transform);
// Count of from the top of the page.
export const handleScroll = () => {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop
   this.setState({
      transform: scrollTop
   });
}
