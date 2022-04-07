/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly REACT_APP_TOKEN_KEY: string;
	readonly REACT_APP_DOMAIN_API: string;
	readonly REACT_APP_API_PREFIX: string;
	readonly REACT_APP_API_VERSION: string;
	readonly REACT_APP_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
