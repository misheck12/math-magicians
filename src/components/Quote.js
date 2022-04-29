/* eslint-disable max-len */
import React from 'react';

function Quote() {
  return (
    <figure className="quote">
      <blockquote>
        Mathematics as an expression of the human mind reflects the active will,
        the contemplative reason, and the desire for aesthetic perfection.
        Its basic elements are logic and intuition, analysis and construction,
        generality and individuality.
      </blockquote>
      <figcaption>
        &mdash; Richard Courant,
        {' '}
        <cite> German-American mathematician</cite>
        {' '}

      </figcaption>
    </figure>

  );
}

export default Quote;
