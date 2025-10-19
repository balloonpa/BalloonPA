/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // สำคัญ: ให้ build ออกมาเป็นเว็บ static
  output: 'export',

  // ถ้าใช้ <Image> ของ Next ให้ปิด optimizer (โฮสต์ shared ไม่มี image server)
  images: { unoptimized: true },

  // ช่วยให้ลิงก์/ไฟล์ไม่เพี้ยนเวลาอยู่บนโฮสต์ทั่วไป
  trailingSlash: true,
};

export default nextConfig;