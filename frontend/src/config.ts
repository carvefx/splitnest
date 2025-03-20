type Config = {
    GOOGLE_CLIENT_ID: string;
}

const config = {
    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID
}

export default config;