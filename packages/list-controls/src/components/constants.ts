/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export enum Component {
    List = 'list',
    ListFooter = 'listFooter',
    ListHeader = 'listHeader',
    ListItem = 'listItem',
    ListItems = 'listItems',
    ListLoading = 'listLoading',
    ListNoMore = 'listNoMore',
    ListTitle = 'listTitle',
    ItemActionToggle = 'itemActionToggle',
}

export enum SlotName {
    DEFAULT = 'default',
    FOOTER = 'footer',
    HEADER = 'header',
    HEADER_TITLE = 'headerTitle',
    ITEMS = 'items',
    LOADING = 'loading',
    NO_MORE = 'noMore',
    ITEM = 'item',
    ITEM_ACTIONS = 'itemActions',
    ITEM_ACTIONS_EXTRA = 'itemActionsExtra',
}
