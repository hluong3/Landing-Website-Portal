import React from 'react';

class SmoothScroll extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(e) {
    e.preventDefault();

    const targetId = this.props.targetId;
    const headerHeight = this.props.headerHeight || 80;

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <a href={`#${this.props.targetId}`} onClick={this.scrollTo}>
        {this.props.children}
      </a>
    );
  }
}

export default SmoothScroll;
