// https://fwywd.com/tech/next-tailwind

// pages/_app.tsx
// Tailwind CSS 以外のスタイルファイルはグローバルで適用したくないため削除
// import '../styles/globals.css'
// 追記


// import '../styles/globals.css'
// import '../styles/components/buttons.css'
// https://zenn.dev/knaka0209/articles/b954ed2e85d3fa

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
