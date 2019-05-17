import * as React from 'react';

import Map from 'ol/PluggableMap';

export interface ContextMenuProps {
    map: Map;
}

export interface ContextMenuState {
    isOpen: boolean;
}

const reducer: React.Reducer<ContextMenuState, any> = (state: ContextMenuState, action: any) => {
    return state;
};

const ContextMenu: React.FunctionComponent<ContextMenuProps> = ({ children }) => {
    const [{ isOpen }, dispatch] = React.useReducer(reducer, {
        isOpen: false
    });
    const context = React.useMemo(
        () => ({
            isOpen,
            dispatch
        }),
        [isOpen]
    );
    return (
        <ContextMenuContext.Provider value={context}>
            <div>{children}</div>
        </ContextMenuContext.Provider>
    );
};
ContextMenu.displayName = 'ContextMenu';

export interface ContextMenuContextState {
    isOpen: boolean;
    dispatch: any;
}

export const ContextMenuContext = React.createContext<ContextMenuContextState | undefined>(undefined);

export default ContextMenu;
