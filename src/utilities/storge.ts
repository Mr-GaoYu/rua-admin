import { TOKEN, NONCE, SCOPES, EXPIRE } from "src/consts";

const localStorageCache = {};

export const getStorage = (key: string, fallback?: any) => {
  if (localStorageCache[key]) {
    return localStorageCache[key];
  }

  const item = window.localStorage.getItem(key);

  if ((item === null || item === undefined) && !!fallback) {
    return fallback;
  }

  try {
    const parsedItem = JSON.parse(item as any);
    localStorageCache[key] = parsedItem;
    return parsedItem;
  } catch (e) {
    localStorageCache[key] = item;
    return item;
  }
};

export const setStorage = (key: string, value: string) => {
  try {
    localStorageCache[key] = JSON.parse(value);
  } catch (e) {
    localStorageCache[key] = value;
  }

  return window.localStorage.setItem(key, value);
};

interface AuthGetAndSet {
  get: () => any;
  set: (value: string) => void;
}

export interface Storage {
  authentication: {
    token: AuthGetAndSet;
    nonce: AuthGetAndSet;
    scopes: AuthGetAndSet;
    expire: AuthGetAndSet;
  };
}

export const storage: Storage = {
  authentication: {
    token: {
      get: () => getStorage(TOKEN),
      set: (v) => setStorage(TOKEN, v),
    },
    nonce: {
      get: () => getStorage(NONCE),
      set: (v) => setStorage(NONCE, v),
    },
    scopes: {
      get: () => getStorage(SCOPES),
      set: (v) => setStorage(SCOPES, v),
    },
    expire: {
      get: () => getStorage(EXPIRE),
      set: (v) => setStorage(EXPIRE, v),
    },
  },
};

export const { authentication } = storage;
