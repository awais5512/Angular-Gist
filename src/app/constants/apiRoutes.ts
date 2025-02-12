export const gistAPIEndpoint = 'https://api.github.com';

export const GET_PUBLIC_GISTS = `${gistAPIEndpoint}/gists/public`;
export const GET_GIST_BY_ID = (id: string) => `${gistAPIEndpoint}/gists/${id}`;
export const GET_USER_GISTS = `${gistAPIEndpoint}/gists`;
export const CREATE_GIST = `${gistAPIEndpoint}/gists`;
export const DELETE_GIST = (gistId: string) =>
  `${gistAPIEndpoint}/gists/${gistId}`;
export const UPDATE_GIST = (gistId: string) =>
  `${gistAPIEndpoint}/gists/${gistId}`;
export const STAR_UNSTAR_GIST = (gistId: string) =>
  `${gistAPIEndpoint}/gists/${gistId}/star`;
export const GET_STARRED_GISTS = `${gistAPIEndpoint}/gists/starred`;
export const IS_GIST_STARRED = (gistId: string) =>
  `${gistAPIEndpoint}/gists/${gistId}/star`;
export const FORK_GIST = (gistId: string) =>
  `${gistAPIEndpoint}/gists/${gistId}/forks`;
