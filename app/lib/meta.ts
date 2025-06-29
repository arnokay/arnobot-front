import config from '~/config';

export function getTitle(pathname: string) {
  if (pathname === '/') {
    return { title: config.app.name }
  }
  const paths = pathname.split('/');
  return { title: `${config.app.name} > ${paths[paths.length - 1]}` }
}
