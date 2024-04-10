import { Breadcrumb } from '@va-bip/bip-ui-components';
import './Header.scss'


function Header() {
    return (
        <div className='header'>
            
            <Breadcrumb
            links={[
                {
                  href: '/',
                  text: 'Home'
                },
                {
                  href: '/federalcontracting',
                  text: 'Level 1'
                },
                {
                  href: '/contract',
                  text: 'Level 2'
                },
                {
                  href: '/contract',
                  text: 'Level 3'
                },
                {
                  href: '/women-owned',
                  text: 'Current Page'
                }
              ]}
            
            
            />

           
        </div>
    )
}
export default Header;