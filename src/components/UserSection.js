import Cards from './Cards'
import SideBar from './SideBar'
import '../assets/style/UserSection.css'
import '../assets/style/Cards.css'
import { LuBellRing } from "react-icons/lu";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";

export default function UserSection() {
  return (
    <div className='UserSection-container'>
      <SideBar/>
      <main className='principalUser'>
        <header className='header-U'>
        <LuBellRing />
        <IoChatbubbleEllipsesOutline />
        <GoGear />
        </header>
        <section>
          <div className='dashb'>
            <h1>Dashboard</h1>
            <a href="#"><button type="button" className='c-button'>COMPLETE O SEU CADASTRO</button></a>
          </div>
          <div className='project1'>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
          </div>
          <div className='project2'>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
            <Cards title="Create Project" description="Deploy your new project in one-click"/>
          </div>
        </section>
      </main>
    </div>

      
  )
}