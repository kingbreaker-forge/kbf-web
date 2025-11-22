import { render as vikeRenderAbort } from 'vike/abort';

type AbortStatusCode = 401 | 403 | 404 | 410 | 429 | 500 | 503;

export const renderAbort = (
  statusCode: AbortStatusCode,
  message?: string,
  extras?: Record<string, unknown>,
) => {
  console.debug('(renderAbort)', { statusCode, message, extras });
  return vikeRenderAbort(statusCode, {
    ...(message ? { message } : {}),
    ...(extras ? extras : {}),
  });
};
