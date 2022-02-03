import React, { Component, ReactElement, MouseEvent } from 'react';

/* component with render prop */
interface IMouseState {
  x: number;
  y: number;
}

interface IMouseProps {
  render(state: IMouseState): ReactElement;
}

class Mouse extends Component<IMouseProps, IMouseState> {
  constructor(props: IMouseProps) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event: MouseEvent) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div style={{ height: '100vh', width: '100vw' }} onMouseMove={this.handleMouseMove}>
        {render(this.state)}
      </div>
    );
  }
}

/* component passed to render prop */
interface ICatProps {
  mouse: IMouseState;
}

const Cat = ({ mouse }: ICatProps) => {
  return (
    <img src="cat.jpg" alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  );
};

/* Useage */
function App() {
  return <Mouse render={(mousePos) => <Cat mouse={mousePos} />} />;
}
export default App;
