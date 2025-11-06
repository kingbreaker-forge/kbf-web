import { App } from 'vue';

export default (app: App) => {
  const oldWarnHandler = app.config.warnHandler;

  app.config.warnHandler = (msg, instance, trace) => {
    // Suppress specific warnings
    if (msg.includes('Non-function value encountered for default slot')) return;

    if (oldWarnHandler) {
      oldWarnHandler(msg, instance, trace);
      return;
    }
    console.warn(`[Vue warn]: ${msg}${trace}`);
  };
};
