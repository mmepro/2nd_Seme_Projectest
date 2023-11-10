import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 프록시 설정
      '/users': {
        target: 'http://localhost:5000', // Flask 서버가 5000번 포트에서 실행 중이라고 가정
        changeOrigin: true, // 이 옵션은 호스트 헤더의 원점을 대상 원점으로 변경합니다.
        secure: false, // 만약 HTTPS를 사용하지 않는다면 false로 설정
      }
    }
  },
})
