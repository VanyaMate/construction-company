import { component$, Slot } from '@builder.io/qwik';
import type { QwikIntrinsicElements } from '@builder.io/qwik';
import css from './Link.module.css';
import classNames from 'classnames';
import { useLocation, Link as QwikLink } from '@builder.io/qwik-city';


export type LinkProps =
    QwikIntrinsicElements['a']
    & {};


export const Link = component$((props: LinkProps) => {
    const { ...other } = props;
    const { url }      = useLocation();

    return (
        <QwikLink
            { ...other }
            class={ classNames(css.container, {
                [css.isActive]: url.pathname === props.href,
            }, [ props.class ]) }
        >
            <Slot/>
        </QwikLink>
    );
});