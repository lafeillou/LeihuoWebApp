import React from 'react';
import classnames from 'classnames';
import './CustomIcon.scss';

// 引入iconfont.js
const scriptElem = document.createElement('script');
// 为什么要把二级目录写上去 webApp
scriptElem.src = 'webApp/assets/fonts/iconfont.js';
document.body.appendChild(scriptElem);


const CustomIcon:React.FC<any> = ({ type, ...restProps }) => {
    return (
        <svg
          className={classnames('super-icon')}
          aria-hidden="true"
          {...restProps}
        >
          <use xlinkHref={`#icon-${type}`} />
        </svg>
      );
};

export default CustomIcon;