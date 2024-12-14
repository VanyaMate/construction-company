import { component$, Slot } from '@builder.io/qwik';
import type { QwikIntrinsicElements } from '@builder.io/qwik';
import css from './Button.module.css';
import classNames from 'classnames';


export enum ButtonStyleType {
    MAIN,
    SECONDARY,
    PRIMARY,
    GHOST
}

export type ButtonProps =
    QwikIntrinsicElements['button']
    & {
        styleType?: ButtonStyleType;
    };

export const Button = component$((props: ButtonProps) => {
    const {
              styleType = ButtonStyleType.MAIN,
              ...other
          } = props;

    return (
        <button
            { ...other }
            class={ classNames(css.container, {
                [css.main]     : styleType === ButtonStyleType.MAIN,
                [css.secondary]: styleType === ButtonStyleType.SECONDARY,
                [css.primary]  : styleType === ButtonStyleType.PRIMARY,
                [css.ghost]    : styleType === ButtonStyleType.GHOST,
            }, [ props.class ]) }
        >
            <Slot/>
        </button>
    );
});