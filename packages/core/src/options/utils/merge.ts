/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { merge } from 'smob';
import { isVNodeOption, mergeVNodeOption } from './vnode';

function isObject(item: any): item is Record<string, any> {
    return (item && typeof item === 'object' && !Array.isArray(item));
}

export function mergeOption<T>(key: string, target: T, source: T) : T {
    if (isVNodeOption(key)) {
        return mergeVNodeOption(key, target, source);
    }

    if (
        isObject(target) &&
        isObject(source)
    ) {
        return merge(target, source) as T;
    }

    return target ?? source;
}
