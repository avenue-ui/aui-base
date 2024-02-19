import {withNaming} from '@bem-react/classname';

export type CnMod = Record<string, string | boolean | undefined>;
export const NS = 'aui-';
export const className = withNaming({e: '__', m: '_'});

export const block = withNaming({n: NS, e: '__', m: '_'});
export type ClassNameBlock = ReturnType<typeof className>;

export function modClassName(cn: string) {
    return cn.split(/\s(.*)/)[1];
}
