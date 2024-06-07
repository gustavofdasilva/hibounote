import { Connection, ManagedElement } from "@jsplumb/browser-ui";

export interface Board {
  id: string,
  dateCreated: Date,
  connetions: Record<string, Connection> | Array<Connection> | null,
  name: string,
  elements: {
    element: HTMLElement,
    id: string | null,
  }[] ,
  groups: {
    groupId: string | null,
    children: {id: string | null}[]
  }[],
  zoomScale: number,
}