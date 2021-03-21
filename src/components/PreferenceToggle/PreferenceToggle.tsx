import React from 'react';

export type PreferenceValue = number | string | boolean;

interface RenderChildrenProps {
    preference: PreferenceValue;
    togglePreference: () => PreferenceValue;
}

type RenderChildren = (props: RenderChildrenProps) => JSX.Element;

export interface Props<T = PreferenceValue> {
    key: string;
    options: [T, T];
    value?: T;
    localStorageKey?: string;
    children: RenderChildren;
    toggleCallbackFn?: (value: T) => void;
}

export type CombinedProps<T = PreferenceValue> = Props<T>

const PreferenceToggle: React.FC<CombinedProps> = props => {
    const {
        key,
        options,
        value,
        localStorageKey,
        children,
        toggleCallbackFn
    } = props;

    const [currentlySetPreference, setPreference] = React.useState<PreferenceValue | undefined>(value);
    const [lastUpdated, setLastUpdated] = React.useState<number>(0);

    const togglePreference = () => {
        const newPreferenceToSet = currentlySetPreference === options[0] ? options[1] : options[0];

        setPreference(newPreferenceToSet);

        if (toggleCallbackFn) {
            toggleCallbackFn(newPreferenceToSet);
        }

        return newPreferenceToSet;
    }

    return null
}