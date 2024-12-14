import { component$, Slot } from '@builder.io/qwik';
import type { QwikIntrinsicElements } from '@builder.io/qwik';
import classNames from 'classnames';
import css from './SitePageBlock.module.css';


export enum SitePageBlockType {
    MAIN,
    SECONDARY
}

export type SitePageBlockProps =
    QwikIntrinsicElements['div']
    & {
        pageHeight?: boolean;
        styleType?: SitePageBlockType;
    };

export const SitePageBlock = component$((props: SitePageBlockProps) => {
    const {
              pageHeight = false,
              styleType  = SitePageBlockType.MAIN,
              ...other
          } = props;

    return (
        <div
            { ...other }
            class={ classNames(css.container, {
                [css.second]    : styleType === SitePageBlockType.SECONDARY,
                [css.pageHeight]: pageHeight,
            }) }
        >
            <Slot/>
        </div>
    );
});