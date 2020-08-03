import '../style/index.scss';
interface LnvAppProps {
  Component: any;
  pageProps: any;
}
export default function LnvApp({ Component, pageProps }: LnvAppProps) {
  return <Component {...pageProps} />;
}
