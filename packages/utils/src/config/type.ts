/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { Component, ComponentOptions } from '../options';
import { PresetConfig } from '../type';

export type Config = {
    preset: {
        [key: string]: PresetConfig
    },
    component: {
        [K in `${Component}` | Component]?: Partial<ComponentOptions<K>>
    }
};
