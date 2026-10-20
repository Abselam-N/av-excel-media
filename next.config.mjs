/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services/event-technology", destination: "/services", permanent: true },
      { source: "/services/video-photo-production", destination: "/services/videography-photography-documentary", permanent: true },
      { source: "/services/av-integration-training", destination: "/services/av-integration", permanent: true },
      { source: "/services/event-management-branding", destination: "/services", permanent: true },
      { source: "/services/digital-marketing-content-creation", destination: "/services", permanent: true },
    ];
  },
};
export default nextConfig;
