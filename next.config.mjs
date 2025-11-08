/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'salesup-ai-storage.s3.ap-southeast-1.amazonaws.com', 
            'salesup-ai-storage-new.s3.ap-southeast-3.amazonaws.com',
            'apistaging.salesup-aiapp.com', 
            'productions.salesup-aiapp.com', 
            'private-cdn.fathir.cloud', 
            'via.placeholder.com', 
            '127.0.0.1', 
            'cms-staging.salesup-aiapp.com', 
            'cms.salesup-aiapp.com', 
            'lh3.googleusercontent.com'
        ],
    },
};

export default nextConfig;