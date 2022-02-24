/*
 * Copyright (c) 2021-2021.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export type Component = {
    id?: string | number,
    tier?: number,
    name?: string,

    url?: string,
    urlTarget?: '_self' | '_blank' | '_parent' | '_top' | string,

    default?: boolean,
    type?: 'separator' | 'link',

    icon?: string,

    display?: boolean,
    displayChildren?: boolean,

    rootLink?: boolean,
    components?: Component[],

    [key: string]: any
};
