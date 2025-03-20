type Config = {
    GOOGLE_CLIENT_ID: string;
}

const config = {
    GOOGLE_CLIENT_ID: import.meta.env.GOOGLE_CLIENT_ID
}

export default config;