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
    width: '0'
  })),
  state('false', style({
    width: '*'
  })),
  transition('* => *', animate('250ms ease'))
]);
