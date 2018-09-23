import React from 'react';
import classname from 'classnames';

const Section = (props) => {
  const {
    depth,
    paddingLess,
    borderLess,
    children,
  } = props;
  return (
    <section className={classname(
        'section',
        depth && 'section-depth__' + depth,
        paddingLess && 'section-padding-less__' + paddingLess,
        borderLess && 'section-border-less__' + borderLess,
      )}>
      {children}
    </section>
  );
};

export default Section;
