import React, { useState } from "react";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.newTxt = React.createRef();
  }

  handleClickEdit = () => {
    this.setState({ isEdit: true });
  };

  // Создаем функцию для дальнейшего вызовы
  handleClickRemove = () => {
    this.props.removeTask(this.props.index);
  };

  handleClickSave = () => {
    const value = this.newTxt.current.value;
    this.props.updateTask(this.props.index, value);
    this.setState({ isEdit: false });
  };

  renderNorm = () => {
    return (
      <div className="box">
        <div>{this.props.children}</div>
        <button onClick={this.handleClickEdit}>Edit</button>
        <button onClick={this.handleClickRemove}>Remove</button>
      </div>
    );
  };

  renderEdit = () => {
    return (
      <div className="box">
        <textarea
          ref={this.newTxt}
          defaultValue={this.props.children}
        ></textarea>
        <button onClick={this.handleClickSave}>Save</button>
      </div>
    );
  };

  render() {
    if (this.state.isEdit) {
      return this.renderEdit();
    } else {
      return this.renderNorm();
    }
  }
}

export const TaskFunc = ({ children, removeTask, index }) => {
  // hooks
  const [isEditState, setisEditState] = useState({ isEdit: false });

  const handleClickEdit = () => {
    setisEditState({ isEdit: true });
  };
  // const { isEdit } = isEditState;
  const handleClickRemove = () => {
    removeTask(index);
  };
  const handleClickSave = () => {
    // To Do -> Tomorrow
    const value = this.newTxt.current.value;
    this.props.updateTask(this.props.index, value);
    this.setState({ isEdit: false });
  };
  // boolean(true false) ? return 1 : return 2
  isEditState.isEdit ? (
    <div className="box">
      <div>{children}</div>
      <button onClick={handleClickEdit}>Edit</button>
      <button onClick={handleClickRemove}>Remove</button>
    </div>
  ) : (
    <div className="box">
      <textarea ref={this.newTxt} defaultValue={children}></textarea>
      <button onClick={handleClickSave}>Save</button>
    </div>
  );
};
