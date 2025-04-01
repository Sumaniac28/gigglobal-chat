import dotenv from 'dotenv';
import cloudinary from 'cloudinary';

dotenv.config();

class Config{
    public GATEWAY_JWT_TOKEN: string | undefined;
    public JWT_TOKEN: string | undefined;
    public NODE_ENV: string | undefined;
    public API_GATEWAY_URL: string | undefined;
    public RABBITMQ_ENDPOINT: string | undefined;
    public DATABASE_URL: string | undefined;
    public CLOUDINARY_CLOUD_NAME: string | undefined;
    public CLOUDINARY_API_KEY: string | undefined;
    public CLOUDINARY_API_SECRET: string | undefined;
    public ELASTIC_SEARCH_URL: string | undefined;
    public ELASTIC_SEARCH_USERNAME: string;
    public ELASTIC_SEARCH_PASSWORD: string;
    public KIBANA_DASH_USERNAME: string | undefined;
    public KIBANA_DASH_PASSWORD: string | undefined;

    constructor(){
        this.GATEWAY_JWT_TOKEN = process.env.GATEWAY_JWT_TOKEN || '';
        this.JWT_TOKEN = process.env.JWT_TOKEN || '';
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.API_GATEWAY_URL = process.env.API_GATEWAY_URL || '';
        this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || '';
        this.DATABASE_URL = process.env.DATABASE_URL || '';
        this.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || '';
        this.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '';
        this.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || '';
        this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || '';
        this.ELASTIC_SEARCH_USERNAME = process.env.ELASTIC_SEARCH_USERNAME || '';
        this.ELASTIC_SEARCH_PASSWORD = process.env.ELASTIC_SEARCH_PASSWORD || '';
        this.KIBANA_DASH_USERNAME = process.env.KIBANA_DASH_USERNAME || '';
        this.KIBANA_DASH_PASSWORD = process.env.KIBANA_DASH_PASSWORD || '';
    }
    
  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUDINARY_CLOUD_NAME,
      api_key: this.CLOUDINARY_API_KEY,
      api_secret: this.CLOUDINARY_API_SECRET
    });
  }
}

export const config: Config = new Config();