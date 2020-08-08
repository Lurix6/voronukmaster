import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// Styling
import './styles.scss';

const propTypes = {
    content: PropTypes.string.isRequired,
    position: PropTypes.string,
    children: PropTypes.node.isRequired,
    trigger: PropTypes.string,
};

const Tooltip = ({ content, position, children, arrow, trigger }) => {
    const node = useRef();
    const [isVisible, setState] = useState(false);
    const handleClick = ({ target }) => {

        if (node.current.contains(target)) {
            // inside click
            return;
        }
        // outside click
        setState(false);
    };

    const handleOpen = () => {
      if (!isVisible)
        setState(true)


    }

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div className={"container"}
            data-testid="tooltip"
            ref={node}
            onClick={handleOpen}
        >
            <div data-testid="tooltip-placeholder">{children}</div>
            {isVisible && (
                <div
                    className={cx("tooltipContent", position)}
                    data-testid="tooltip-content"
                >
                    <span className={cx({"arrow": arrow})}></span>
                    {content}
                </div>
            )}
        </div>
    );
};

Tooltip.defaultProps = {
    position: 'bootom',
};

Tooltip.propTypes = propTypes;

export default Tooltip;