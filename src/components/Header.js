import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import { PrismicNextLink } from '@prismicio/next'



export default async function Header() {
  const client = createClient()
  const nav = await client.getSingle('global_menu')
    return (
        <div data-animation="default" class="navbar1_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="a08c413c-c25f-fc41-2bad-82173aaacbe4" role="banner" data-duration="400">
        <div class="navbar1_container">
          <a href="/" class="navbar1_logo-link w-nav-brand">
            <div class="icon-embed-custom w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 103 31" fill="none" preserveaspectratio="xMidYMid meet" aria-hidden="true" role="img">
                <path d="M13.6673 25L12.1782 20.267H5.5839L4.12145 25H0.55839L6.78045 6.44018H11.1412L17.3101 25H13.6673ZM8.93424 9.63098H8.80129L6.43478 17.2623H11.3273L8.93424 9.63098ZM19.8328 11.12H23.2363V13.4068H23.3427C23.5909 12.6091 24.0606 11.9798 24.752 11.5189C25.4433 11.0402 26.2499 10.8009 27.1717 10.8009C28.9443 10.8009 30.2916 11.4302 31.2133 12.6888C32.1529 13.9297 32.6226 15.7112 32.6226 18.0334C32.6226 20.3733 32.1529 22.1726 31.2133 23.4312C30.2916 24.6898 28.9443 25.3191 27.1717 25.3191C26.2499 25.3191 25.4433 25.0798 24.752 24.6011C24.0784 24.1225 23.6086 23.4844 23.3427 22.6867H23.2363V30.318H19.8328V11.12ZM26.0815 22.5005C26.9678 22.5005 27.6857 22.208 28.2353 21.6231C28.7848 21.0381 29.0595 20.2493 29.0595 19.2566V16.8635C29.0595 15.8708 28.7848 15.0819 28.2353 14.4969C27.6857 13.8942 26.9678 13.5929 26.0815 13.5929C25.266 13.5929 24.5836 13.7967 24.034 14.2045C23.5022 14.6122 23.2363 15.1528 23.2363 15.8264V20.2404C23.2363 20.9672 23.5022 21.5256 24.034 21.9156C24.5836 22.3055 25.266 22.5005 26.0815 22.5005ZM35.7764 11.12H39.1799V13.4068H39.2863C39.5345 12.6091 40.0042 11.9798 40.6956 11.5189C41.3869 11.0402 42.1935 10.8009 43.1153 10.8009C44.8879 10.8009 46.2352 11.4302 47.157 12.6888C48.0965 13.9297 48.5662 15.7112 48.5662 18.0334C48.5662 20.3733 48.0965 22.1726 47.157 23.4312C46.2352 24.6898 44.8879 25.3191 43.1153 25.3191C42.1935 25.3191 41.3869 25.0798 40.6956 24.6011C40.022 24.1225 39.5522 23.4844 39.2863 22.6867H39.1799V30.318H35.7764V11.12ZM42.0251 22.5005C42.9114 22.5005 43.6293 22.208 44.1789 21.6231C44.7284 21.0381 45.0032 20.2493 45.0032 19.2566V16.8635C45.0032 15.8708 44.7284 15.0819 44.1789 14.4969C43.6293 13.8942 42.9114 13.5929 42.0251 13.5929C41.2097 13.5929 40.5272 13.7967 39.9776 14.2045C39.4458 14.6122 39.1799 15.1528 39.1799 15.8264V20.2404C39.1799 20.9672 39.4458 21.5256 39.9776 21.9156C40.5272 22.3055 41.2097 22.5005 42.0251 22.5005Z" fill="#141414"></path>
                <path d="M58.2167 6.44018H64.9706C66.176 6.44018 67.2662 6.63517 68.2412 7.02516C69.2339 7.41515 70.0759 8.00013 70.7672 8.7801C71.4763 9.54235 72.0169 10.5084 72.3892 11.6784C72.7792 12.8306 72.9742 14.1779 72.9742 15.7201C72.9742 17.2623 72.7792 18.6184 72.3892 19.7884C72.0169 20.9406 71.4763 21.9067 70.7672 22.6867C70.0759 23.4489 69.2339 24.025 68.2412 24.415C67.2662 24.805 66.176 25 64.9706 25H58.2167V6.44018ZM64.9706 21.889C66.2824 21.889 67.3194 21.5078 68.0816 20.7456C68.8616 19.9656 69.2516 18.7779 69.2516 17.1825V14.2576C69.2516 12.6622 68.8616 11.4834 68.0816 10.7212C67.3194 9.9412 66.2824 9.55121 64.9706 9.55121H61.7266V21.889H64.9706ZM81.9471 25.3191C80.9189 25.3191 79.9971 25.1507 79.1817 24.8139C78.384 24.4593 77.7015 23.9719 77.1343 23.3514C76.5847 22.7133 76.1593 21.951 75.8579 21.0647C75.5566 20.1606 75.4059 19.1502 75.4059 18.0334C75.4059 16.9344 75.5477 15.9417 75.8314 15.0553C76.1327 14.169 76.5581 13.4156 77.1077 12.7952C77.6572 12.157 78.3308 11.6695 79.1285 11.3327C79.9262 10.9782 80.8303 10.8009 81.8407 10.8009C82.922 10.8009 83.8615 10.9871 84.6592 11.3593C85.4569 11.7316 86.1128 12.2368 86.6269 12.875C87.141 13.5131 87.5221 14.2576 87.7703 15.1085C88.0362 15.9417 88.1691 16.8369 88.1691 17.7941V18.9109H78.9424V19.2566C78.9424 20.267 79.226 21.0824 79.7933 21.7028C80.3605 22.3055 81.2025 22.6069 82.3193 22.6069C83.1702 22.6069 83.8615 22.4296 84.3933 22.0751C84.9429 21.7206 85.4303 21.2685 85.8558 20.719L87.6905 22.7664C87.1232 23.5641 86.3433 24.1934 85.3506 24.6543C84.3756 25.0975 83.2411 25.3191 81.9471 25.3191ZM81.8939 13.3536C80.9898 13.3536 80.2719 13.6549 79.7401 14.2576C79.2083 14.8603 78.9424 15.6403 78.9424 16.5976V16.8103H84.6326V16.571C84.6326 15.6137 84.3933 14.8426 83.9147 14.2576C83.4538 13.6549 82.7802 13.3536 81.8939 13.3536ZM93.908 25L89.2813 11.12H92.6317L94.5727 17.1028L95.9288 22.0485H96.115L97.4711 17.1028L99.3589 11.12H102.603L97.9497 25H93.908Z" fill="#0658EF"></path>
              </svg></div>
          </a>
          <nav role="navigation" class="navbar1_menu is-page-height-tablet w-nav-menu">
            {nav.data.slices.map((slice) => {
                return (
                  <div data-hover="true" data-delay="200" data-w-id="a08c413c-c25f-fc41-2bad-82173aaacbef" class="navbar1_menu-dropdown w-dropdown">
                    <div class="navbar1_dropdown-toggle w-dropdown-toggle">
                      <div>  
                        <PrismicLink field={slice.primary.link} class="navbar1_dropdown-link w-dropdown-link">
                          <PrismicRichText field={slice.primary.name} />
                        </PrismicLink>
                      </div>
                      {slice.items.length > 0 && (
                        <div class="dropdown-chevron w-embed"><svg width=" 100%" height=" 100%" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor"></path>
                          </svg></div>
                      )}
                    </div>
                    {/* Load sub menus if present */}
                    {slice.items.length > 0 && (
                      <nav class="navbar1_dropdown-list w-dropdown-list">
                        {slice.items.map((item) => {
                          return (
                            <PrismicLink field={item.child_link} class="navbar1_dropdown-link w-dropdown-link">
                                  <PrismicRichText field={item.child_name} />
                            </PrismicLink>
                          )
                        })}
                      </nav>
                    )}
                  </div>
                )
              })}             
            <div class="navbar1_menu-buttons">
              <PrismicNextLink field={nav.data.header_menu_link} class="button-2 is-small button w-button"><PrismicRichText field={nav.data.header_menu_label} /></PrismicNextLink>              
            </div>
          </nav>
          <div class="navbar1_menu-button w-nav-button">
            <div class="menu-icon1">
              <div class="menu-icon1_line-top"></div>
              <div class="menu-icon1_line-middle">
                <div class="menu-icon_line-middle-inner"></div>
              </div>
              <div class="menu-icon1_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
       
       
    )};