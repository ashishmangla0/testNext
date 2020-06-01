import Link from 'next/link';
import  FooterInclude from './footerSvg';
export default function Footer() {
  return (
    <>
    
    <footer>
        <div className="footer__top">
            footer top
        </div>
        <div className="footer__copyright text-center">
        <div className="container">
        
        <FooterInclude/>
        <div className="clearfix pbs">
                <svg className="icon icon-australia-flag">
                <use xlinkHref="#icon-australia-flag"></use>
                </svg>
                <svg className="icon icon-india-flag">
                <use xlinkHref="#icon-india-flag"></use>
                </svg>
                <svg className="icon icon-singapore-flag">
                <use xlinkHref="#icon-singapore-flag"></use>
                </svg>
            </div>

    &copy; {new Date().getFullYear()} Venture7 Technology Pvt. Ltd.
        </div>

        </div>
    </footer>



    </>
  )
}