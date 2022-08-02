import React from 'react';
import { useState } from 'react';
import './editor.css';
import { HtmlCode, CssCode, JsCode } from '../../Codes/exportCode'
// import HtmlCode from '../../Codes/HtmlCode';
const Editor = () => {
  const [activeBtn, setActiveBtn] = useState('html')
  return (
    <div className='editor-container'>
      <header className="editor-header">
        <button
          className={`select-btn ${activeBtn === 'html' && 'active-html'}`}
          onClick={() => setActiveBtn('html')}>
          HTML
        </button>
        <button
          className={`select-btn ${activeBtn === 'css' && 'active-css'}`}
          onClick={() => setActiveBtn('css')}>
          CSS
        </button>
        <button
          className={`select-btn ${activeBtn === 'js' && 'active-js'}`}
          onClick={() => setActiveBtn('js')}>
          JS
        </button>
      </header>
      <div className="code-content">
        {activeBtn === 'html' && <HtmlCode />}
        {activeBtn === 'css' && <CssCode />}
        {activeBtn === 'js' && <JsCode/>}
      </div>
    </div>
  )
}

export default Editor