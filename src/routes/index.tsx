import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { localDataStorage } from '~/lib';
import {
    SitePageBlock,
    SitePageBlockType,
} from '~/components/entities/site/SitePageBlock/SitePageBlock';


export const useQuadrosphereLoader = routeLoader$(async () => {
    const quads = await localDataStorage.getQuadrospheres(2, 0);
    return {
        quads,
    };
});

export default component$(() => {
    const loader = useQuadrosphereLoader();

    return (
        <>
            <SitePageBlock styleType={ SitePageBlockType.MAIN }
                           pageHeight={ true }>
                {
                    loader.value.quads.data.map((quad) => (
                        <div key={ quad.title }>{ quad.title }</div>
                    ))
                }
            </SitePageBlock>
            <SitePageBlock styleType={ SitePageBlockType.SECONDARY }
                           pageHeight={ true }>
                {
                    loader.value.quads.data.map((quad) => (
                        <div key={ quad.title }>{ quad.title }</div>
                    ))
                }
            </SitePageBlock>
        </>
    );
});

export const head: DocumentHead = ({ resolveValue }) => {
    const data = resolveValue(useQuadrosphereLoader);

    return {
        title: `Welcome to Qwik - ${ data.quads.count }`,
        meta : [
            {
                name   : 'description',
                content: 'Qwik site description',
            },
        ],
    };
};

