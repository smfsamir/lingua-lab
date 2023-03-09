import React from 'react';
// Create an h1 element with the class name styles.title. It should say Welcome to Nłeʔkepmxcin learning page!.

function Header(props) {
  return (
    <h1 className={props.style_title}>
      Welcome to Nłeʔkepmxcin learning page!
    </h1>
  );
}

export default Header;