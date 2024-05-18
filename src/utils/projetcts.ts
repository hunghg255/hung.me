import type { Endpoints } from '@octokit/types';

export type Repo = Endpoints['GET /user/repos']['response']['data'][number];
export type User = Endpoints['GET /user']['response']['data'];

export interface ICursorStyle {
  dot: Record<string, number | string>;
  cursor: Record<string, number | string>;
  circle: Record<string, number | string>;
}

export interface Article {
  _id: string;
  _draft: boolean;
  _empty: boolean;
  _extension: string;
  _file: string;
  _path: string;
  _source: string;
  _type: string;

  id: number;
  uid?: number;
  mtime: string;
  mtimeMs: number;
  ctime: string;
  ctimeMs: number;
  slug: string;
  title: string;
  draft: boolean;
}

export interface IProjects {
  Npm: All[];
  Extension: All[];
  Blog: All[];
  Plugins: All[];
  Reactjs: All[];
  Config: All[];
  Templates: All[];
  All: All[];
}

export interface All {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
}

export enum DefaultBranch {
  Main = 'main',
  Master = 'master',
}

export enum Language {
  CSS = 'CSS',
  HTML = 'HTML',
  JavaScript = 'JavaScript',
  Shell = 'Shell',
  TypeScript = 'TypeScript',
}

export interface License {
  key: Key;
  name: Name;
  spdx_id: SpdxID;
  url: string;
  node_id: LicenseNodeID;
}

export enum Key {
  BSD3Clause = 'bsd-3-clause',
  MIT = 'mit',
}

export enum Name {
  BSD3ClauseNewOrRevisedLicense = 'BSD 3-Clause "New" or "Revised" License',
  MITLicense = 'MIT License',
}

export enum LicenseNodeID {
  MDc6TGljZW5ZZTEz = 'MDc6TGljZW5zZTEz',
  MDc6TGljZW5ZZTU = 'MDc6TGljZW5zZTU=',
}

export enum SpdxID {
  BSD3Clause = 'BSD-3-Clause',
  MIT = 'MIT',
}

export interface Owner {
  login: Login;
  id: number;
  node_id: OwnerNodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: FollowingURL;
  gists_url: GistsURL;
  starred_url: StarredURL;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersHunghg255EventsPrivacy = 'https://api.github.com/users/hunghg255/events{/privacy}',
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersHunghg255FollowingOtherUser = 'https://api.github.com/users/hunghg255/following{/other_user}',
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersHunghg255GistsGistID = 'https://api.github.com/users/hunghg255/gists{/gist_id}',
}

export enum Login {
  Hunghg255 = 'hunghg255',
}

export enum OwnerNodeID {
  MDQ6VXNlcjQyMDk2OTA4 = 'MDQ6VXNlcjQyMDk2OTA4',
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersHunghg255StarredOwnerRepo = 'https://api.github.com/users/hunghg255/starred{/owner}{/repo}',
}

export enum Type {
  User = 'User',
}

export enum Visibility {
  Public = 'public',
}

const language2Color: Record<string, string> = {
  vue: '#41b883',
  typescript: '#3178c6',
  javascript: '#f1e05a',
  html: '#e34c26',
  css: '#563d7c',
  scss: '#c6538c',
  python: '#3572a5',
  shell: '#89e051',
  'c++': '#f34b7d',
  c: '#555555',
  'c#': '#178600',
  java: '#b07219',
  php: '#4F5D95',
  ruby: '#701516',
  go: '#00ADD8',
  rust: '#dea584',
  dart: '#00B4AB',
  swift: '#ffac45',
  kotlin: '#F18E33',
  'objective-c': '#438eff',
  'jupyter notebook': '#DA5B0B',
  dockerfile: '#384d54',
  makefile: '#427819',
};

export const getLanguageColor = (language: string) => {
  return language2Color[language.toLowerCase()] || '#ddd';
};

function filterRepos(repos: Repo[], key: string) {
  return repos.filter((repo) => repo.topics && repo.topics.includes(key));
}

export const getProjects = async () => {
  // const { data } = await OctokitCtx.rest.repos.listForAuthenticatedUser({
  //   per_page: 100,
  //   type: 'owner',
  //   sort: 'updated',
  // })
  const data = await fetch(
    'https://api.github.com/users/hunghg255/repos?per_page=250&type=owner&sort=updated&private=false',
    { next: { revalidate: 3600 } },
  ).then((r) => r.json());

  const publicRepos = data.filter((repo) => !repo.private && !repo.archived);
  const publicAndNotForkRepos = publicRepos.filter((repo) => !repo.fork);

  const repoGroups = {
    Npm: filterRepos(publicAndNotForkRepos, 'npm'),
    Actions: filterRepos(publicRepos, 'github-actions'),
    Extension: filterRepos(publicAndNotForkRepos, 'extension'),
    Plugins: filterRepos(publicAndNotForkRepos, 'plugin'),
    Config: filterRepos(publicAndNotForkRepos, 'config'),
    Templates: filterRepos(publicAndNotForkRepos, 'template'),
    Blog: filterRepos(publicAndNotForkRepos, 'blog'),
    Reactjs: filterRepos(publicRepos, 'react'),
    All: publicAndNotForkRepos,
  };

  return repoGroups;
};
