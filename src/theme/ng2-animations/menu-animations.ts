import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

export const animMenuRight = trigger('animMenuRight', [
  state('true', style({
    flex: '0 1 0px'
  })),
  state('false', style({
    flex: '0 0 150px'
  })),
  transition('* => *', animate('250ms ease'))
]);
