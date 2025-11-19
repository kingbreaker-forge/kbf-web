import type { PageContextServer } from 'vike/types';

const injectVuetifyHeadTeleport = (pageContext: PageContextServer) =>
  pageContext.ssrContext?.teleports?.head ?? '';

export default injectVuetifyHeadTeleport;
