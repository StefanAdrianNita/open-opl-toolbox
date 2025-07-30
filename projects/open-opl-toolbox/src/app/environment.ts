import * as packageInfo from "../../../../package.json";

export const environment = {
    version: (packageInfo as any).version,
};