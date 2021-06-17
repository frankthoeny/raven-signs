import React from 'react';
import Footer from './components/Footer/Footer'
import Toolbar from './components/Toolbar/Toolbar'

import {AdminSidebar} from './components/Admin/AdminSidebar'
import AgentToolbar from './components/Agents/AgentToolbar'
import ClientToolbar from './components/Clients/ClientToolbar'
import BookToolbar from './components/Book/BookToolbar'
import SignToolbar from './components/Signs/SignsToolbar'

const toolbarType = (type) => {
  switch (type) {
    case "agent":{return <AgentToolbar />}
    case "client":{return <ClientToolbar />}
    case "sign":{return <SignToolbar />}
    case "book":{return <BookToolbar />}
    default: return null
  }
}

export const AdminLayout= ({ children, type }) => {
return (
  <>
     <div className="layout">
      {toolbarType(type)}
        <main role="main" className="container-fluid">
          <article className="d-flex flex-row mb-2">
           <AdminSidebar />
           {children}
          </article>
       </main>
     </div>
  </>
)};

export const AuthLayout= ({children}) => {
return (
  <>
     <div className="backdrop">
        <main role="main">
          <article>
           {children}
          </article>
       </main>
     </div>
  </>
)};

const Layout= ({children}) => {
return (
  <>
     <div className="layout">
        <Toolbar />
        <main role="main" className="container-fluid">
          <article className="row">
           {children}
          </article>
       </main>
       <Footer />
     </div>
  </>
)};

export default Layout
