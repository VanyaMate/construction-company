import {
    component$,
    useSignal,
    useVisibleTask$,
} from '@builder.io/qwik';
import type { QwikIntrinsicElements } from '@builder.io/qwik';
import css from './SiteHeaderNavigationMenu.module.css';
import classNames from 'classnames';
import {
    Button,
} from '~/components/shared/buttons/Button/Button';
import anime from 'animejs';
import { Link } from '~/components/shared/links/Link/Link';


export type SiteHeaderNavigationMenuProps =
    QwikIntrinsicElements['div']
    & {};

export const SiteHeaderNavigationMenu = component$((props: SiteHeaderNavigationMenuProps) => {
    const { ...other } = props;
    const logo         = useSignal<HTMLHeadingElement>();
    const navigation   = useSignal<HTMLDivElement>();
    const menu         = useSignal<HTMLButtonElement>();

    useVisibleTask$(() => {
        const timeline = anime.timeline({ duration: 500 });

        timeline.add({
            targets : [ logo.value, navigation.value, menu.value ],
            autoplay: true,
            opacity : [ 0, 1 ],
            duration: 1000,
            delay   : (_, index) => {
                return index * 1000 + 500;
            },
        });

        timeline.add({
            targets : [ logo.value, navigation.value, menu.value ],
            autoplay: true,
            opacity : [ 1, .5 ],
        });
    }, { strategy: 'document-ready' });

    return (
        <div
            { ...other }
            class={ classNames(css.container, {}, [ props.class ]) }
        >
            <div class={ css.content }>
                <h1 class={ css.logo } ref={ logo }>Alpbau</h1>
                <nav class={ css.navigation } ref={ navigation }>
                    <Link href={ '/about/' }>Квадросферы</Link>
                    <Link href={ '/constructions/' }>Конструкции</Link>
                </nav>
                <Button class={ css.menu } ref={ menu }>Test</Button>
            </div>
        </div>
    );
});