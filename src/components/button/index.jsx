import React from 'react';
import './button.scss';
import classNames from 'classnames';

const Button = (props) => {

  const renderText = (children , text, upperCase, lowerCase) => {

    if (children) return children

    const stringText = String(text) 

    if( lowerCase ) return stringText.toLowerCase();
    if( upperCase ) return stringText.toUpperCase();

    return stringText;

  }

  const { className, id,children, label, ghost,  upperCase, lowerCase, icon, type, ...restProps } = props;

  const text = renderText(children , label || '', upperCase, lowerCase);

  return (
    <button 
       className={classNames( 
        "button", className , 
        { "button-ghost": ghost },  
        `type-${type ? type : 'primary'}` )}
      id={id}
      { ...restProps }
    >
      <span className="button-text">
        { icon ? <span className="button-icon">{ icon }</span> : '' }
        { text }
      </span>
    </button>
  )
}

export default  Button;