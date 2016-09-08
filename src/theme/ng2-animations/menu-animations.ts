import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

export var animMenuRight = trigger('animMenuRight', [
  state('true', style({
    transform: 'translateX(100%)'
  })),
  // state('false', style({
    // transform: 'translateX(100%)'
  // })),
  transition('* => *', animate('250ms ease'))
]);
