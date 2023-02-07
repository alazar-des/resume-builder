import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: this.props.defaultSize
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      width: value.length > this.props.defaultSize ? value.length : this.props.defaultSize
    });
    this.props.onInputChange(e, this.props.index);
  }

  render() {
    const { type, name, placeholder } = this.props;
    const style = {
      width: this.state.width + "ch",
      textAlign: this.props.alignText
    };
    return (
      <input
        type={type}
        name={name}
        id={this.props.id}
        placeholder={placeholder}
        value={this.props.value}
        onChange={this.onChange}
        style={style}
      />
    );
  }
}
