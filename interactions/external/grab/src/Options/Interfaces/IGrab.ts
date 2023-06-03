import type { IGrabLinks } from "./IGrabLinks";

/**
 */
export interface IGrab {
    distance: number;

    /**
     * @deprecated use the new links instead
     */
    lineLinked: IGrabLinks;

    /**
     * @deprecated use the new links instead
     */
    line_linked: IGrabLinks;

    links: IGrabLinks;
}
