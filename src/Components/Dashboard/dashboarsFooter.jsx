import React from 'react'

function DashboarsFooter() {
  return (
        < footer className = "d-flex align-items-center justify-content-between bg-white w-100 px-4 footer-sec" >
               <div className="res-order d-flex align-items-center">
                  <p className="mb-0 gilroy-medium">
                     Copyright © 2024&nbsp;
                     <a href="https://secure.decentnanoledger.com" className="link-text">
                        quantumledgersecv
                     </a>
                     &nbsp;|&nbsp;All Rights Reserved.
                  </p>
                  <span className="d-none">4.0.1</span>
               </div>
               <div className="d-flex f-link align-items-center">
                  <div>
                     <div
                        className="d-flex align-items-center text-gray-100 f-13 blink-w sp"
                        id="select_language"
                     >
                        <div className="form-group selectParent f-13">
                           <select
                              className="select2 form-control f-13 mb-2n"
                              data-minimum-results-for-search="Infinity"
                              id="select-height"
                           >
                              <option className="f-13 gilroy-medium" selected="" value="en">
                                 English
                              </option>
                              <option className="f-13 gilroy-medium" value="ar">
                                 عربى
                              </option>
                              <option className="f-13 gilroy-medium" value="fr">
                                 Français
                              </option>
                              <option className="f-13 gilroy-medium" value="pt">
                                 Português
                              </option>
                              <option className="f-13 gilroy-medium" value="ru">
                                 Русский
                              </option>
                              <option className="f-13 gilroy-medium" value="es">
                                 Español
                              </option>
                              <option className="f-13 gilroy-medium" value="tr">
                                 Türkçe
                              </option>
                              <option className="f-13 gilroy-medium" value="ch">
                                 中文 (繁體)
                              </option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
            </footer >
  )
}

export default DashboarsFooter