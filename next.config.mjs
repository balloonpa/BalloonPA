/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // สำคัญ: ให้ build ออกมาเป็นเว็บ static
  // output: 'export',

  // ถ้าใช้ <Image> ของ Next ให้ปิด optimizer (โฮสต์ shared ไม่มี image server)
  images: { unoptimized: true },

  // ช่วยให้ลิงก์/ไฟล์ไม่เพี้ยนเวลาอยู่บนโฮสต์ทั่วไป
  trailingSlash: true,

  // Old homepage filter URLs (?cat=...) → permanent redirect to /shop/
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'query', key: 'cat' }],
        destination: '/shop',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;