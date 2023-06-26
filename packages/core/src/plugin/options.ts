/*
 * Copyright (c) 2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { usePresetStore } from '../store-preset';
import { useDefaultsStore } from '../store-defaults';
import type { PluginBaseOptions } from './type';

export function applyPluginBaseOptions(options: PluginBaseOptions) {
    if (options.presets) {
        const presetKeys = Object.keys(options.presets);
        for (let i = 0; i < presetKeys.length; i++) {
            const store = usePresetStore(presetKeys[i]);
            store.setAll(options.presets[presetKeys[i]]);
        }
    }

    if (options.defaults) {
        const store = useDefaultsStore();
        store.setAll(options.defaults);
    }
}
