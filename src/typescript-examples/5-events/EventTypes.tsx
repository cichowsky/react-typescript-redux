/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React, { MouseEvent, MouseEventHandler } from 'react';

/* CASE 1 - inference when using anonymous function (TS know HTML element and type of event)  */
export function Case1() {
  return (
    <button
      onClick={(e) => {
        console.log(e);
      }}
    >
      Click
    </button>
  );
}

/* CASE 2 - typing event */
export function Case2() {
  const action = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  // we can use union too, e.g. MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  // but we should detect type of element in handler, e.g.
  const action2 = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if ('href' in target) {
      console.log(target.href); // anchor
    }

    console.log(target.textContent);
  };

  return (
    <>
      <button onClick={action}>Click</button>
      <a href="/" onClick={action2}>
        Anchor click
      </a>
    </>
  );
}

/* CASE 3 - typing handler */
export function Case3() {
  const action: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  return <button onClick={action}>Click</button>;
}

/* EVENTS TYPES */
//  MouseEvent, KeyboardEvent, FormEvent, ChangeEvent,

//  AnimationEvent, ClipboardEvent, CompositionEvent,
//  DragEvent, FocusEvent, PointerEvent,
//  TouchEvent, TransitionEvent, WheelEvent.
//  As well as SyntheticEvent, for all other events.
