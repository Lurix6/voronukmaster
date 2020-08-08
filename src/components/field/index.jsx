import React, { useState } from 'react';
import './field.scss';
import classNames from 'classnames';
import { CloseCircleOutlined }  from '@ant-design/icons';


const Field = (props) => {
  const initialState = {
    focused: false,
    value: ''
  }
  const [state, setState] = useState(initialState);

  const { placeholder, disabled, icon, className, cleanBnt, fullWidth } = props;

  const onChange = (e) => {e.preventDefault(), setState({...state, value: event.target.value}) } 
  
  return (
    <div className={ classNames('field', className, {'field-full-width': fullWidth}, {'field-clean-icon': cleanBnt}, {'field-focused': state.focused }) }>
      <div className='field-icon-container' >{icon && icon}</div>
      <input
        className={classNames('field-full-width')}
        placeholder={ placeholder }
        value={ state.value }
        onChange={ onChange }
        onFocus={ () => setState({...state, focused: true})}
        onBlur={ () =>  setState({...state, focused: false})}
        disabled={disabled}
      />
      { cleanBnt && <div className='field-icon-clear' onClick={ () => setState({...state, value: ''}) } ><CloseCircleOutlined /></div> }
    </div>

  )
}

export default  Field;